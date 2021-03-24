import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = ({}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout (() => resolve(ItemDetail), 3000);
        });
            myPromise.then((result) => setProducts(result));
    }, []);

    return (
        <div className='container'>
            <img src="/img/blueMoon100.jpg" />
            <ItemDetail nombre='RollerBlade Blue Moon 100' precio='$400' descripcion='El Powerslide SWELL Blue moon 100 presenta todos los nuevos estándares técnicos de la colección SWELL, una carcasa modificada con cortes flexibles, acolchado de memoria RECALL, un nuevo manguito más suave y delgado y un soporte TRINITY X para otras opciones de alineación de guías.' />
        </div>
    )
};

export default ItemDetailContainer;