import { useEffect, useState } from 'react';

const MyRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ['All', 'pizza', 'salad', 'snack', 'juice', 'antipasto', 'ice cream', 'lasagna', 'pudding', 'soup'];

  useEffect(() => {
    // Retrieve recipes from local storage
    const storedRecipes = JSON.parse(localStorage.getItem('sharedRecipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    localStorage.setItem('sharedRecipes', JSON.stringify(updatedRecipes));
  };

  // Filter recipes based on the search term and selected category
  const filteredRecipes = recipes.filter(recipe =>
    recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || (selectedCategory ? recipe.tags && recipe.tags.includes(selectedCategory) : true))
  );

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Recipes</h2>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-red-600 text-white' : 'bg-red-500 text-white'} text-sm font-semibold`}
              onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search recipes"
            className="w-full p-2 pr-10 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={recipe.image || 'https://via.placeholder.com/300x200'} alt={recipe.recipeName} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">{recipe.recipeName}</h3>
              <p className="text-gray-700 mb-4"><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p className="text-gray-700"><strong>Instructions:</strong> {recipe.instructions.substring(0, 300)}{recipe.instructions.length > 300 ? '...' : ''}</p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => handleDeleteRecipe(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyRecipe;
