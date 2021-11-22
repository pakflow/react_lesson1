import React from 'react';
import ProductCard from '../ProductsCard/ProductCard';

const ProductsList = ({cars, getInfo}) => {
    // console.log(cars);
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {
                cars.map((car) => (<ProductCard getInfo={() => getInfo(car)} key={car.id} car={car}/>))
            }
        </div>
    );
};

export default ProductsList;