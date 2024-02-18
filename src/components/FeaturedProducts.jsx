import React, { useState } from 'react'
import MainTitle from './MainTitle';
import Products from './Products';
import products from '../assets/products';

const FeaturedProducts = () => {
    const [product] = useState(products.slice(1, 9));

    return (
        <div className="featured-products mb-5">
            <div className="container">
                <MainTitle title={"Featured Products"} />
                <div className="row">
                    {
                        product.map((product) => (
                            <div className="col-lg-3 col-md-6">
                                <Products product={product} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default FeaturedProducts;