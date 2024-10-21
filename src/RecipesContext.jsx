// RecipesContext.js
import { createContext, useState, useEffect, children } from "react";

export const RecipesContext = createContext();

export const RecipesProvider = ({children}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=2b460e0e2c6d42cb9bfbbcdb077fbbdf');
      const data = await response.json();
      setRecipes(data.recipes); // Set recipes data
    };

    fetchRecipes();
  }, []);

  return (
    <RecipesContext.Provider value={recipes}>
      {children}
    </RecipesContext.Provider>
  );
};
