// App.js
import React, { useState } from 'react';
import RecipeCreate from './RecipeCreate';
import RecipeList from './RecipeList';
import RecipeData from './RecipeData'; // Assuming RecipeData is in the same directory
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(RecipeData); // Initialize state with RecipeData

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="App">
      <h1 className="header">Delicious Food Recipes</h1>
      <RecipeCreate addRecipe={addRecipe} />
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default App;
