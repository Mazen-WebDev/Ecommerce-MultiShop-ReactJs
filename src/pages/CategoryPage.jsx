import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SecNavBar from '../components/SecNavBar';
import { useSelector } from 'react-redux';
import CartSlide from '../components/CartSlide';
import FavouriteSlide from '../components/FavouriteSlide';
import products from '../assets/products';
import Products from '../components/Products';
import "../styles/CategoryPage.css";
import MainTitle from '../components/MainTitle';
import FooterSection from '../components/FooterSection';
import Carts from '../components/Carts';
import Favs from '../components/Favs';

const CategoryPage = () => {
    const showCart = useSelector(state => state.CartUiSlice.cartIsVisible);
    const showFav = useSelector(state => state.FavouriteUiSlice.FavouriteIsVisible);

    window.scrollTo({
        top: 0,
    });

    const { category } = useParams();

    const [product, setProducts] = useState([products]);

    useEffect(() => {
        if (category === "Smartphones") {
            const showProducts = products.filter((e) => e.category === "Smartphones");
            setProducts(showProducts);
        }

        if (category === "Laptops") {
            const showProducts = products.filter((e) => e.category === "Laptops");
            setProducts(showProducts);
        }

        if (category === "Fragrances") {
            const showProducts = products.filter((e) => e.category === "Fragrances");
            setProducts(showProducts);
        }

        if (category === "Skincare") {
            const showProducts = products.filter((e) => e.category === "Skincare");
            setProducts(showProducts);
        }

        if (category === "Groceries") {
            const showProducts = products.filter((e) => e.category === "Groceries");
            setProducts(showProducts);
        }

        if (category === "Shoses") {
            const showProducts = products.filter((e) => e.category === "Shoses");
            setProducts(showProducts);
        }

        if (category === "Home-Decoration") {
            const showProducts = products.filter((e) => e.category === "Home-Decoration");
            setProducts(showProducts);
        }

    }, [category]);

    return (
        <>
            <NavBar />
            <SecNavBar />
            {showCart && <Carts />}
            {showFav && <Favs />}
            <div className="category mt-4 pb-4 pt-2">
                <div className="container">
                    <MainTitle title={category} />
                    <div className="row">
                        {
                            product.map((product) => (
                                <div className="col-lg-3">
                                    <Products product={product} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}

export default CategoryPage;