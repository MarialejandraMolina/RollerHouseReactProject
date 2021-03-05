import React, {useState, useEffect} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({nombre, precio, descripcion}) => {

    const [goCart, setGoCart] = useState(false);
    console.log({nombre, precio, descripcion});

    const onAdd=(contador) => {
        console.log('Udseleccionó ', contador);
        setGoCart(true);
    }

    return (
    <div className='item'>
        <h1>{nombre}</h1>
        <h2>{precio}</h2>
        <p>{descripcion}</p>
        {goCart ? <button>Ir al carrito</button> : <ItemCount onAdd={onAdd} />}
    </div>    
);
};

export default ItemDetail;