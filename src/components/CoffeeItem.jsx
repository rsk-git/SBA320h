import React from 'react';

const CoffeeItem = ({coffee}) => {
    return (
       <divd className = "coffee-item">
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
        <img src = {coffee.image} alt = {coffee.title}/>
       </divd>
    );
};

export default CoffeeItem;