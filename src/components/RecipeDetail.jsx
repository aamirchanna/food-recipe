import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=2b460e0e2c6d42cb9bfbbcdb077fbbdf`
        );
        const data = await response.json();
        setRecipe(data); // Set the fetched recipe details
      } catch (error) {
        console.error("Error fetching recipe detail:", error);
      }
      setLoading(false);
    };

    fetchRecipeDetail();
  }, [id]);

  const stripHTML = (html) => {
    return html.replace(/<[^>]*>?/gm, ''); // Remove HTML tags
  };

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="container mx-auto w-[900px] my-6  p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-72 object-cover mb-4" />
      
      {/* Clean the summary before displaying */}
      <p className="text-gray-600 mb-4">{stripHTML(recipe.summary)}</p>
      
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      
      {/* Clean the instructions before displaying */}
      <p>{stripHTML(recipe.instructions) || 'Instructions not available.'}</p>
    </div>
  );
};

export default RecipeDetail;
