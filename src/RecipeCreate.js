import React, { useState } from 'react';

function RecipeCreate({ addRecipe }) {
    const [formData, setFormData] = useState({
        name: '',
        cuisine: '',
        photo: '',
        ingredients: '',
        preparation: '',
    });

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe(formData);
        setFormData({
            name: '',
            cuisine: '',
            photo: '',
            ingredients: '',
            preparation: '',
        });
    };

    return (
        <tr>
            <td>
                <form name="create" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Recipe Name"
                        required
                    />
                </form>
            </td>
            <td>
                <form name="create" onSubmit={handleSubmit}>
                    <input
                        name="cuisine"
                        id="cuisine"
                        value={formData.cuisine}
                        onChange={handleChange}
                        placeholder="Cuisine"
                        required
                    />
                </form>
            </td>
            <td>
                <form name="create" onSubmit={handleSubmit}>
                    <input
                        name="photo"
                        id="photo"
                        value={formData.photo}
                        onChange={handleChange}
                        placeholder="Photo URL"
                        required
                    />
                </form>
            </td>
            <td>
                <form name="create" onSubmit={handleSubmit}>
          <textarea
              name="ingredients"
              id="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="Ingredients"
              required
          />
                </form>
            </td>
            <td>
                <form name="create" onSubmit={handleSubmit}>
          <textarea
              name="preparation"
              id="preparation"
              value={formData.preparation}
              onChange={handleChange}
              placeholder="Preparation"
              required
          />
                </form>
            </td>
            <td>
                <form name="create" onSubmit={handleSubmit}>
                    <button type="submit">Create</button>
                </form>
            </td>
        </tr>
    );
}

export default RecipeCreate;
