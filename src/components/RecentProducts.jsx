import React, { useState } from 'react';
import products from '../assets/products';
import Products from './Products';
import MainTitle from './MainTitle';

const RecentProducts = () => {
    const [product] = useState(products.slice(10, 18));

    return (
        <div className="recent-products mt-5 mb-5">
            <div className="container">
                <MainTitle title={"Recent Products"} />
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

export default RecentProducts;