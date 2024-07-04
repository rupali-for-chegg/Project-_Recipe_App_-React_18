// RecipeCreate.js
import React, { useState } from 'react';

function RecipeCreate({ addRecipe }) {
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(formData);
    setFormData({
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: ''
    });
  };

  return (
    <form className="recipe-form" name="create" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Cuisine:
        <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} required />
      </label>
      <label>
        Photo URL:
        <input type="text" name="photo" value={formData.photo} onChange={handleChange} required />
      </label>
      <label>
        Ingredients:
        <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} required />
      </label>
      <label>
        Preparation:
        <textarea name="preparation" value={formData.preparation} onChange={handleChange} required />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeCreate;
