import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, img, ingredients, calories}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))

        }
      </ol>
      <h3>Calories</h3>
      <p>{calories}</p>
      <img className={style.image} src={img} alt="" />
    </div>

  );
}

export default Recipe;