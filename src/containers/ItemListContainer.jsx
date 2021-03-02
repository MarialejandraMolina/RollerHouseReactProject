import * as React from 'react';
import productList from '../components/ItemList/productList';
import ItemList from '../components/ItemList/ItemList';

const ItemListContainer = ({}) => {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout (() => resolve(productList), 3000);
        });
        
        myPromise.then((result) => setProducts(result));
    }, []);

    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
};

export default ItemListContainer;