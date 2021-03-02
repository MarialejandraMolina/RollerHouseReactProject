import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({nombre, precio, descripcion}) => {
    return (
    <div className='item'>
        <h1>{nombre}</h1>
        <h2>{precio}</h2>
        <p>{descripcion}</p>
    </div>    
);
};

export default ItemDetail;