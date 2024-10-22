import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('data==> ', data); // Log the data to see what is returned

      if (data.meals) {
        const formattedRecipes = data.meals.map((meal) => ({
          id: meal.idMeal,
          title: meal.strMeal,
          summary: cleanSummary(meal.strInstructions),
          image: meal.strMealThumb || 'https://via.placeholder.com/300x200',
          tags: meal.strTags ? meal.strTags.split(',') : [],
          instructions: meal.strInstructions || 'Instructions not available.',
        }));

        setRecipes(formattedRecipes);
      } else {
        setRecipes([]); // Set to empty array if no meals are returned
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setLoading(false);
  };

  const cleanSummary = (summary) => {
    const cleanText = summary.replace(/<[^>]*>/g, '');
    if (cleanText.length > 250) {
      return cleanText.substring(0, 250).trimEnd() + '...';
    }
    return cleanText;
  };

  // Limit to 3 recipes
  const filteredRecipes = recipes.slice(0, 3);

  return (
    <div className="container mx-auto p-4">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">Trending Recipes</h1>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-500" role="status"></div>
          <span className="ml-2">Loading recipes...</span>
        </div>
      ) : (
        /* Recipes Grid */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="border rounded-lg overflow-hidden shadow-md">
                <img src={recipe.image} alt={recipe.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{recipe.title}</h2>
                  <p className="text-gray-600 mb-2">{recipe.summary}</p>

                  {/* Tags Section */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {recipe.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="px-2 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Link to the recipe detail page */}
                  <Link to={`/recipe/${recipe.id}`} className="text-red-500 font-semibold mt-2 block">VIEW RECIPE</Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No recipes found</p>
          )}
        </div>
      )}
    </div>
  );
}
