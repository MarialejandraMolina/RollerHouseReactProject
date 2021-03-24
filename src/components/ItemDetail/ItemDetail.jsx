import React, {useState, useContext} from 'react';
// import React, {useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import cartContext from '../../context/CartContext';

const ItemDetail = ({nombre, precio, descripcion}) => {
    const [goCart, setGoCart] = useState(false);
    console.log({nombre, precio, descripcion});

    const {setProduct, product} = useContext(cartContext)

    const onAdd=(contador) => {
        console.log('Ud añadió ', contador);
        setGoCart(true);
        setProduct({nombre, precio, descripcion});
    }

    console.log([product]);
    // console.log(quantity);

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