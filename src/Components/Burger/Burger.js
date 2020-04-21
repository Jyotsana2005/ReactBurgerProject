import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    const transformedIngredient = Object.keys(props.ingredients)
        .map(isKey => {
            return [...Array(props.ingredients(isKey) )].map((_, i) => {
                return <BurgerIngredient key={isKey + i} type={isKey} />
            });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
            {/* <BurgerIngredient type="cheese" /> */}
            {/* <BurgerIngredient type="meat" /> */}
        </div>
    );
};

export default Burger
