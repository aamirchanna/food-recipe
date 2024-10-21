import  { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from '../RecipesContext'; // Ensure this path is correct

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = useContext(RecipesContext); // Access recipes from context
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-72 object-cover mb-4" />
      <p className="text-gray-600 mb-4">{recipe.summary}</p>
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
