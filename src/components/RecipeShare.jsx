import React from 'react';
import recipeImage from '../images/recipe.jpeg'; // Update the path to your image

const RecipeShare = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left side: Form */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-center mb-6">Share Your Recipe</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="recipeName" className="block text-gray-700 font-semibold mb-2">Recipe Name</label>
              <input
                type="text"
                id="recipeName"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your recipe name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients</label>
              <textarea
                id="ingredients"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="List your ingredients here"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">Instructions</label>
              <textarea
                id="instructions"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Write the cooking instructions"
                rows="4"
              ></textarea>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg">
              Share Recipe
            </button>
          </form>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 p-4">
          <img src={recipeImage} alt="Delicious recipe" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default RecipeShare;
