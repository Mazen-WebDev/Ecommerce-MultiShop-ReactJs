import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SecNavBar from '../components/SecNavBar';
import "../styles/Shop.css";
import Products from '../components/Products';
import products from '../assets/products';
import { useSelector } from 'react-redux';
import FavouriteSlide from '../components/FavouriteSlide';
import FooterSection from '../components/FooterSection';
import Carts from '../components/Carts';
import Favs from '../components/Favs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const filterPrice = [
        {
            text1: "ALL PRICE",
            text2: "1000"
        },
        {
            text1: "$0 - $100",
            text2: "150"
        },
        {
            text1: "$100 - $200",
            text2: "295"
        },
        {
            text1: "$200 - $300",
            text2: "50"
        },
        {
            text1: "$300 - $400",
            text2: "300"
        },
        {
            text1: "$400 - $500",
            text2: "10"
        }
    ];

    const filterColor = [
        {
            text1: "ALL COLOR",
            text2: "1000"
        },
        {
            text1: "Black",
            text2: "150"
        },
        {
            text1: "White",
            text2: "295"
        },
        {
            text1: "Red",
            text2: "50"
        },
        {
            text1: "Blue",
            text2: "300"
        },
        {
            text1: "Yellow",
            text2: "10"
        }
    ];

    const filterSize = [
        {
            text1: "ALL SIZE",
            text2: "1000"
        },
        {
            text1: "XS",
            text2: "150"
        },
        {
            text1: "S",
            text2: "295"
        },
        {
            text1: "M",
            text2: "50"
        },
        {
            text1: "L",
            text2: "300"
        },
        {
            text1: "XL",
            text2: "10"
        }
    ];

    const [product] = useState(products);

    const showCart = useSelector(state => state.CartUiSlice.cartIsVisible);
    const showFav = useSelector(state => state.FavouriteUiSlice.FavouriteIsVisible);

    window.scrollTo({
        top: 0,
    });

    const [inputSearch, setInputSearch] = useState("");

    const handleSearch = (e) => {
        setInputSearch(e.target.value);
    }

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(inputSearch.toLowerCase())
    );

    return (
        <>
            <NavBar />
            <SecNavBar />
            {showCart && <Carts />}
            {showFav && <Favs />}
            <div className="shop mt-4 pt-2">
                <div className="container">
                    <form className="d-flex search-form mb-2 mt-lg-3 ms-auto" role="search">
                        <div className="input-group">
                            <input type="text" value={inputSearch} onChange={handleSearch} className="form-control input-search" placeholder="Search For Products" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffd333", }} /></span>
                        </div>
                    </form>
                    <div className="row" id='shop-row'>
                        <div className="col-lg-3 col-md-12">
                            <div className="filter-price">
                                <h4 className='filter-title'>FILTER BY PRICE</h4>
                                <div className="filter-box p-2">
                                    <ul className='list-unstyled'>
                                        {
                                            filterPrice.map((e, i) => (
                                                <li className='d-flex justify-content-between text-black-50 my-2' key={i}><input className='me-2' type='checkbox' /><span className='me-auto'>{e.text1}</span> <span>{e.text2}</span></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-color mt-4">
                                <h4 className='filter-title'>FILTER BY COLOR</h4>
                                <div className="filter-box p-2">
                                    <ul className='list-unstyled'>
                                        {
                                            filterColor.map((e, i) => (
                                                <li className='d-flex justify-content-between text-black-50 my-2' key={i}><input className='me-2' type='checkbox' /><span className='me-auto'>{e.text1}</span> <span>{e.text2}</span></li>))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-size mt-4">
                                <h4 className='filter-title'>FILTER BY SIZE</h4>
                                <div className="filter-box p-2">
                                    <ul className='list-unstyled'>
                                        {
                                            filterSize.map((e, i) => (
                                                <li className='d-flex justify-content-between text-black-50 my-2' key={i}><input className='me-2' type='checkbox' /><span className='me-auto'>{e.text1}</span> <span>{e.text2}</span></li>))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                {/* {
                                    product.map((product) => (
                                        <div className="col-lg-4 mt-4" key={product.id}>
                                            <Products product={product} />
                                        </div>
                                    ))
                                } */}
                                {
                                    filteredProducts.length === 0 ? (
                                        <div className="col-lg-12 mt-4 text-center">
                                            <h4>NO PRODUCTS FOUND WITH THIS NAME "(</h4>
                                        </div>
                                    ) : (
                                        filteredProducts.map((product) => (
                                            <div className="col-lg-4 mt-4" key={product.id}>
                                                <Products product={product} />
                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}

export default Shop;