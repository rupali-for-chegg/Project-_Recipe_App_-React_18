// RecipeRow.js
import React from 'react';

function RecipeRow({ recipe, index, deleteRecipe }) {
  const { name, cuisine, photo, ingredients, preparation } = recipe;

  const handleDelete = () => {
    deleteRecipe(index);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img src={photo} alt={name} /></td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td className="content_td"><p>{preparation}</p></td>
      <td><button name="delete" onClick={handleDelete}>Delete</button></td>
    </tr>
  );
}

export default RecipeRow;
