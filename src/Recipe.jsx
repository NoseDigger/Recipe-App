import React from 'react';
import style from './recipe.module.css'


const Recipe=({title,calories,images,ingredients})=>{
    return(
        <div className={style.recipe} >
            <h1>{title}</h1>
            <ol className={style.list}>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.p}>Calories {calories}</p>
            <img src={images} alt='' />
        </div>
    )
}

export default Recipe;