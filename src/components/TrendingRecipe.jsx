import { useState, useEffect } from 'react';

const Trending = () => {
  const [trendingRecipes, setTrendingRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendingRecipes();
  }, []);

  const fetchTrendingRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=3&apiKey=2b460e0e2c6d42cb9bfbbcdb077fbbdf`
      );
      const data = await response.json();

      const formattedRecipes = data.recipes.map((recipe) => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        rating: (Math.random() * 2 + 3).toFixed(1), // Simulate random ratings between 3.0 to 5.0
        chef: {
          name: "John Doe", // You can replace this with dynamic names if you have them
          avatar: "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain" // Default avatar
        }
      }));

      setTrendingRecipes(formattedRecipes);
    } catch (error) {
      console.error("Error fetching trending recipes:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-5">Trending Recipes</h2>

      {loading ? (
        <div className="flex justify-center items-center mb-10 h-48">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-pink-500" role="status"></div>
          <span className="ml-2">Loading trending recipes...</span>
        </div>
      ) : (
        <div className="container mx-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={recipe.image} 
                alt={`Trending recipe ${recipe.title}`} 
                width={300} 
                height={200} 
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">{recipe.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600">{recipe.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img 
                      src={recipe.chef.avatar} 
                      alt="Chef avatar" 
                      width={24} 
                      height={24} 
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-600">{recipe.chef.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trending;
