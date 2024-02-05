import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import styles from "./Details.module.css";
import DetailImage from './DetailImage';

const DetailScreen = () => {  
  const {id} = useParams();
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <section>
      {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}
      <DetailImage image={recipe.image_url} title={recipe.recipe_name} />
      <div className={styles.details_container}>
          <div className={styles.ingredients_container}>
            <h2>Recipe</h2>
            <h4>Prep Time: {recipe.prep_time}</h4>
            <h4>Cook Time: {recipe.cook_time}</h4>
            <h4>Serves: {recipe.serves}</h4>

            <hr/>

            <h2>Ingredients</h2>
            {recipe.ingredients && recipe.ingredients.map((ing, index) => {
              return <h4>{ing.quantity} {ing.ingredient}</h4>
            })}
          </div>

        <div className={styles.instruction_container}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions } 
            {/* && JSON.parse(recipe.instructions) */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
