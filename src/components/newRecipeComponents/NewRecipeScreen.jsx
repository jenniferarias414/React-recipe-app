import React, { useState } from 'react';
import styles from './NewRecipe.module.css';
import { Formik } from "formik";
import axios from 'axios';


const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const handleIngredientAdd = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
    axios
    .post(`https://recipes.devmountain.com/recipes`, values)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };
 

  // const [formData, setFormData] = useState({
  //   recipeName: "",
  //   imageURL: "",
  //   prepTime: "",
  //   cookTime: "",
  //   serves: "",
  //   ingredient: "",
  //   quantity: "",
  //   instructions: "",
  //   cookingMethod: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleIngredientAdd = () => {
  //   if (formData.ingredient && formData.quantity) {
  //     // Assuming ingredients are stored as an array of objects
  //     setFormData({
  //       ...formData,
  //       ingredients: [
  //         ...(formData.ingredients || []),
  //         {
  //           ingredient: formData.ingredient,
  //           quantity: formData.quantity,
  //         },
  //       ],
  //       ingredient: "",
  //       quantity: "",
  //     });
  //   }
  // };
  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.title_container}>
            <input
              type="text"
              placeholder="Recipe Name"
              name="recipeName"
              value={values.recipeName} //formData.recipeName
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Image URL"
              name="imageURL"
              value={values.imageURL}
              onChange={handleChange}
            />
            </div>

            <div className={styles.radio_container}>
            <label>
              Cook
              <input
                type="radio"
                name="cookingMethod"
                value="Cook"
                // checked={formData.cookingMethod === "Cook"}
                onChange={handleChange}
              />
            </label>
            <label>
              Bake
              <input
                type="radio"
                name="cookingMethod"
                value="Bake"
                // checked={formData.cookingMethod === "Bake"}
                onChange={handleChange}
              />
            </label>
            <label>
              Drink
              <input
                type="radio"
                value="Drink"
                onChange={handleChange}
                name="cookingMethod"

                // checked={formData.cookingMethod === "Drink"}
              />
            </label>
            </div>

            <div className={styles.input_container}>
            <input
              type="text"
              placeholder="Prep Time"
              name="prepTime"
              value={values.prepTime}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Cook Time"
              name="cookTime"
              value={values.cookTime}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Serves"
              name="serves"
              value={values.serves}
              onChange={handleChange}
            />
            </div>

            <div className={styles.input_container}>
            <div className={styles.ingredient_inputs}>
            <input
              type="text"
              placeholder="Ingredient"
              name="ingredient"
              // value={formData.ingredient}
              // onChange={handleChange}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              // value={formData.quantity}
              // onChange={handleChange}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            </div>
            <ul>{ingredientDisplay}</ul>

            </div>

            <button type="button" className={styles.orange_btn} onClick={handleIngredientAdd}>
              Add Another
            </button>

            <textarea
              name="instructions"
              rows={7}
              placeholder="What are the instructions?"
              value={values.instructions}
              onChange={handleChange}
            ></textarea>

            
            <button type="submit" className={styles.green_btn} >Save</button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
