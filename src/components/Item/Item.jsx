import React from 'react';
import { card } from './Item.css';
import {Link} from 'react-router-dom';

const Item = ({product}) => {
    return <div className={card}>
        <h3>{product.name}</h3>
        <p>Precio: {product.price}</p>
        <Link to={`detail`}><button>Detalle</button></Link>
    </div>;
}

export default Item;
