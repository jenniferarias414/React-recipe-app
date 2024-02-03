import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import styles from './RecipeCard.module.css';

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

//   const recipeName = "Delicious Pasta";
//   const recipeImage = "https://media.istockphoto.com/id/155433174/photo/bolognese-pens.jpg?s=612x612&w=0&k=20&c=A_TBqOAzcOkKbeVv8qSDs0bukfAedhkA458JEFolo_M="; 

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
}

  return (
    <div className={styles.recipe_card}>
      <img src={recipe.image_url} alt={recipe.recipe_name} className={styles.recipe_image} />
      <div className={styles.recipe_details}>
        <h2 className={styles.recipe_name}>{recipe.recipe_name}</h2>
        <button className={styles.card_btn} onClick={handleClick}>See More</button>
      </div>
    </div>
  );
};

export default RecipeCard;