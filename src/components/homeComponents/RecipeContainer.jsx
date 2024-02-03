import React, {useState} from 'react';
import RecipeCard from '../cards/RecipeCard';
import styles from './RecipeContainer.module.css'

import { FaSearch } from 'react-icons/fa';

const RecipeContainer = ({recipes}) => {
    const [search, setSearch] = useState("");

    const recipeDisplay = recipes
    .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe, index) => {
        return <RecipeCard recipe={recipe}/>
    });

  return (
    <section className={styles.recipe_section}>
    <div className={styles.search_bar}>
      <FaSearch className={styles.search_icon} />
      <input
        type="text"
        value={search}
        placeholder="Search for a recipe"
        className={styles.search_input}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <RecipeCard /> */}
    </div>
    <div className={styles.recipe_container}>
        {recipeDisplay ? recipeDisplay : <h2>Sorry, No Recipes Found</h2>}
      </div>
    </section>
    
  );
};

export default RecipeContainer;