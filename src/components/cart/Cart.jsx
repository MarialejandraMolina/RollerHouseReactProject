import {useContext} from 'react';
import cartContext from '../../context/CartContext'

const CartComponent = () => {

    const CartContextUse = useContext(cartContext)

    console.log(CartContextUse);

    return (
        <>
            <div>'Carrito de compras'</div>
        </>
    )
}

export default CartComponent;
