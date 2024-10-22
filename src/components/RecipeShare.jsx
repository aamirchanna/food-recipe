// import recipeImage from '../assets/recipe.jpeg'; // Update the path to your image
import Button from './Button';

const RecipeShare = () => {
  const handleShareRecipe = (event) => {
    event.preventDefault();
    const recipeName = event.target.recipeName.value;
    const ingredients = event.target.ingredients.value;
    const instructions = event.target.instructions.value;
    const image = event.target.image.files[0] ? URL.createObjectURL(event.target.image.files[0]) : '';

    // Create a recipe object
    const newRecipe = {
      recipeName,
      ingredients,
      instructions,
      image,
    };

    // Get existing recipes from local storage
    const storedRecipes = JSON.parse(localStorage.getItem('sharedRecipes')) || [];
    // Add the new recipe to the array
    storedRecipes.push(newRecipe);
    // Save updated array back to local storage
    localStorage.setItem('sharedRecipes', JSON.stringify(storedRecipes));

    // Reset form fields after submission
    event.target.reset();
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left side: Form */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-center mb-6">Share Your Recipe</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleShareRecipe}>
            <div className="mb-4">
              <label htmlFor="recipeName" className="block text-gray-700 font-semibold mb-2">Recipe Name</label>
              <input
                type="text"
                id="recipeName"
                name="recipeName"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your recipe name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="List your ingredients here"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">Instructions</label>
              <textarea
                id="instructions"
                name="instructions"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Write the cooking instructions"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Recipe Image</label>
              <input
                type="file"
                id="image"
                name="image"
                className="w-full p-3 border border-gray-300 rounded-lg"
                accept="image/*"
              />
            </div>
            <Button text={"Share Recipe"}/>
          </form>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 p-4">
          <img src='https://th.bing.com/th/id/OIP.iNsZ_cPVKivVmZBSl7X9sQHaE7?rs=1&pid=ImgDetMain' alt="Delicious recipe" className="w-full h-[500px] rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default RecipeShare;
