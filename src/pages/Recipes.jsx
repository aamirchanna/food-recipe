import React from 'react';
import recipeImage from "../assets/noodles.jpeg";
 // Adjust the path as needed

const Recipes= () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Recipe Image */}
        <div className="mb-6">
          <img src={recipeImage} alt="Recipe" className="w-full h-auto rounded-md" />
        </div>

        {/* Recipe Name */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">Delicious Spaghetti Bolognese</h2>
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Ingredients</h3>
          <ul className="list-disc list-inside ml-4">
            <li>400g Spaghetti</li>
            <li>500g Ground Beef</li>
            <li>1 Onion (chopped)</li>
            <li>2 Garlic cloves (minced)</li>
            <li>400g Tomato Sauce</li>
            <li>Salt and Pepper</li>
            <li>Olive Oil</li>
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Instructions</h3>
          <ol className="list-decimal list-inside ml-4">
            <li>Cook spaghetti according to package instructions.</li>
            <li>In a large pan, heat olive oil and sauté onions and garlic.</li>
            <li>Add ground beef, cook until browned.</li>
            <li>Stir in tomato sauce, simmer for 10 minutes.</li>
            <li>Season with salt and pepper to taste.</li>
            <li>Serve sauce over spaghetti and enjoy!</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
