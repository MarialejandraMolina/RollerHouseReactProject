import React from 'react';
import ItemD from '../ItemDetail/ItemD';

const ItemDetail = ({products}) => {
    return (
        <div>
            {products.map((product) => {
            return <ItemD key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ItemDetail;