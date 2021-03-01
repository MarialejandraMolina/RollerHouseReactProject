import React from 'react';
import { card } from './Item.css';

const ItemD = ({product}) => {
    return <div className={card}>
        <h3>{product.name}</h3>
        <h4>Precio: {product.price}</h4>
        <p>Descripción: {product.description}</p>
    </div>;
}

export default ItemD;
