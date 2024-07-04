import React, { useState } from 'react';
import RecipeList from './RecipeList';
import RecipeData from './RecipeData';
import './App.css';

function App() {
    const [recipes, setRecipes] = useState(RecipeData);

    const addRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    const deleteRecipe = (indexToDelete) => {
        setRecipes(recipes.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="App">
            <h1>Delicious Food Recipes</h1>
            <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} addRecipe={addRecipe} />
        </div>
    );
}

export default App;
