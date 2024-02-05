import React, { useState } from 'react';
import styles from './NewRecipe.module.css';



const NewRecipeScreen = () => {
  const [formData, setFormData] = useState({
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredient: '',
    quantity: '',
    instructions: '',
    cookingMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIngredientAdd = () => {
    if (formData.ingredient && formData.quantity) {
      // Assuming ingredients are stored as an array of objects
      setFormData({
        ...formData,
        ingredients: [
          ...(formData.ingredients || []),
          {
            ingredient: formData.ingredient,
            quantity: formData.quantity,
          },
        ],
        ingredient: '',
        quantity: '',
      });
    }
  };

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      <form>
        <input
          type="text"
          placeholder="Recipe Name"
          name="recipeName"
          value={formData.recipeName}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Image URL"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
        />

        <label>
          Cook
          <input
            type="radio"
            name="cookingMethod"
            value="Cook"
            checked={formData.cookingMethod === "Cook"}
            onChange={handleChange}
          />
        </label>
        <label>
          Bake
          <input
            type="radio"
            name="cookingMethod"
            value="Bake"
            checked={formData.cookingMethod === "Bake"}
            onChange={handleChange}
          />
        </label>
        <label>
          Drink
          <input
            type="radio"
            name="cookingMethod"
            value="Drink"
            checked={formData.cookingMethod === "Drink"}
            onChange={handleChange}
          />
        </label>

        <input
          type="text"
          placeholder="Prep Time"
          name="prepTime"
          value={formData.prepTime}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Cook Time"
          name="cookTime"
          value={formData.cookTime}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Serves"
          name="serves"
          value={formData.serves}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Ingredient"
          name="ingredient"
          value={formData.ingredient}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <button type="button" onClick={handleIngredientAdd}>
          Add Another
        </button>

        <textarea
          name="instructions"
          placeholder="What are the instructions?"
          value={formData.instructions}
          onChange={handleChange}
        ></textarea>

        {/* Add submit button here */}
        <button type="submit">Save</button>
      </form>
    </section>
  );
};

export default NewRecipeScreen;
