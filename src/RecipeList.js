// RecipeList.js
import React from 'react';
import RecipeRow from './RecipeRow';

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <table className="recipe-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe, index) => (
          <RecipeRow
            key={index}
            recipe={recipe}
            index={index}
            deleteRecipe={deleteRecipe}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RecipeList;
