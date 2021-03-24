import React, {createContext, useState} from 'react'

const cartContext = createContext()

console.log(cartContext);

function CartContext({children}) {
    const [product, setProduct] = useState([])

    // const addCart = (item) => {
    //     if (isInCart(item.item.id) === -1) {
    //         setProduct(item)
    //     }else {

    //     }
    // }
    
    const isInCart = (id) => {
        return product.findIndex(prod => prod.id === id)
    }
    
    return (
        <>
        <cartContext.Provider value={{
            product,
            // addCart,
            // quantity: product.length
        }}>
            {children}
        </cartContext.Provider>
        </>
    )
}

export default CartContext;