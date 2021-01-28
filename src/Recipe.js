import React from 'react';
import style from './recipe.module.css'


function Recipe(props) {
    return (
        <div className={style.recipe}>
            <h1>Tên món: {props.title}</h1>
            <p>Mức độ dinh dưỡng: {Math.round(props.calories)} calo</p>
            <p>Thành phần:</p>
            <ul>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={props.image} alt=""/>
        </div>
    );
}

export default Recipe;