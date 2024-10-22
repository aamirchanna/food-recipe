import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';  // Import PropTypes

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=2b460e0e2c6d42cb9bfbbcdb077fbbdf');
        const data = await response.json();
        setRecipes(data.recipes); // Set recipes data
      } catch (error) {
        console.error("Failed to fetch recipes", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <RecipesContext.Provider value={recipes}>
      {children}
    </RecipesContext.Provider>
  );
};

// Add PropTypes validation for children
RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is passed and it's a valid React node
};
