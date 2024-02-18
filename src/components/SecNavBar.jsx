import { faAngleDown, faAngleRight, faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "../styles/NavBar.css";
import { cartUiActions } from '../rtk/Slices/CartUiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FavUiActions } from '../rtk/Slices/FavouriteUiSlice';

const SecNavBar = (props) => {
    const nav_links = [
        {
            display: "Home",
            path: "/home"
        },
        {
            display: "Shop",
            path: "/shop"
        },
        // {
        //     display: "Shop Detail",
        //     path: "/shopdetail"
        // },
        {
            display: "Cart",
            path: "/cart"
        },
        {
            display: "Contact",
            path: "/contact"
        },
    ];

    const secNavBar = useRef(null);
    const toggleBtn = useRef(null);
    const angleToggle = useRef(null);
    const categoryList = useRef(null);

    const { product } = props;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > secNavBar.current.offsetTop) {
                secNavBar.current.classList.add("position");
            } else {
                secNavBar.current.classList.remove("position");
            }
        }

        window.addEventListener("scroll", handleScroll);

        toggleBtn.current.addEventListener("click", () => {
            categoryList.current.classList.toggle("active");
            angleToggle.current.classList.toggle("rotate");
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const categories = [
        {
            category: "Smartphones",
            icon: faAngleRight
        },
        {
            category: "Laptops",
            icon: faAngleRight
        },
        {
            category: "Fragrances",
            icon: faAngleRight
        },
        {
            category: "Skincare",
            icon: faAngleRight
        },
        {
            category: "Groceries",
            icon: faAngleRight
        },
        {
            category: "Shoses",
            icon: faAngleRight
        },
        {
            category: "Home-Decoration",
            icon: faAngleRight
        }
    ];

    const removeActive = () => {
        categoryList.current.classList.toggle("active");
        angleToggle.current.classList.toggle("rotate");
    }

    const burgerTransform = useRef(null);
    const navActive = useRef(null);

    const burgerClick = () => {
        burgerTransform.current.classList.toggle("burger-active");
        navActive.current.classList.toggle("nav-active");
    }

    const dispatch = useDispatch();
    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    }

    const cart = useSelector((product) => product.CartSlice);

    const toggleFav = () => {
        dispatch(FavUiActions.toggleFav());
    }

    const fav = useSelector(product => product.FavouriteSlice);

    const cartQuantity = useSelector(state => state.CartSlice.totalQuantity);

    const favQuantity = useSelector(state => state.FavouriteSlice.totalQuantity);

    const spanBack = useRef(null);
    const spanBack2 = useRef(null);
    const cartBack = useRef(null);
    const cartBack2 = useRef(null);

    useEffect(() => {
        if (favQuantity > 0) {
            spanBack.current.classList.add("span-back");
        } else {
            spanBack.current.classList.remove("span-back");
        }

        if (favQuantity > 0) {
            spanBack2.current.classList.add("span-back2");
        } else {
            spanBack2.current.classList.remove("span-back2");
        }
    }, [favQuantity]);

    useEffect(() => {
        if (cartQuantity > 0) {
            cartBack.current.classList.add("cart-back");
        } else {
            cartBack.current.classList.remove("cart-back");
        }

        if (cartQuantity > 0) {
            cartBack2.current.classList.add("cart-back2");
        } else {
            cartBack2.current.classList.remove("cart-back2");
        }
    }, [cartQuantity]);

    return (
        <>
            <div className="sec-navbar" ref={secNavBar}>
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <button ref={toggleBtn} className='toggle-btn p-3 d-flex justify-content-between'>
                            <p className=''><FontAwesomeIcon icon={faBars} style={{ color: "#3d464d", }} /> Categories</p>
                            <p className='angle' ref={angleToggle}><FontAwesomeIcon icon={faAngleDown} style={{ color: "#3d464d", }} /></p>
                        </button>
                        <ul ref={categoryList} className='category-list'>
                            {
                                categories.map((cat, i) => (
                                    <Link onClick={removeActive} className='text-decoration-none' to={`/product/${cat.category}`}><li className='list-unstyled text-light my-3' key={i}><FontAwesomeIcon className='me-2' icon={cat.icon} style={{ color: "white", }} /> <span className='category-link'>{cat.category}</span></li></Link>
                                ))
                            }
                        </ul>
                        <div className="nav-links ms-auto me-5">
                            {
                                nav_links.map((link, i) => (
                                    <NavLink to={link.path} key={i} className={(navClass) =>
                                        navClass.isActive ? "active text-decoration-none mx-3" : "unactive text-decoration-none mx-3"
                                    }>
                                        {link.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                        <div className="favourite-cart d-flex">
                            <div className="first-box d-flex align-items-center">
                                <button className='btn' onClick={toggleFav}><FontAwesomeIcon icon={faHeart} style={{ color: "#ffd333", }} /></button>
                                <span ref={spanBack2} className='text-light text-center cart-lenght'>{favQuantity}</span>
                            </div>
                            <div className="second-box d-flex align-items-center">
                                <button className='btn' onClick={toggleCart}><FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffd333", }} /></button>
                                <span ref={cartBack} className='text-light text-center cart-lenght'>{cartQuantity}</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="small-screen mb-5">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#"><span className='fw-bold fs-1 px-2 sp-3'>MULTI</span><span className='fw-bold fs-1 px-2 sp-4'>SHOP</span></a>
                        <div ref={burgerTransform} onClick={burgerClick} className="burger-icon ms-auto me-md-4">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="favourite-cart d-flex">
                            <div className="first-box">
                                <button className='btn fav-btn' onClick={toggleFav}><FontAwesomeIcon icon={faHeart} style={{ color: "#ffd333", }} /></button>
                                <span ref={spanBack} className='text-light text-center fav-lenght'>{favQuantity}</span>
                            </div>
                            <div className="second-box">
                                <button className='btn cart-btn' onClick={toggleCart}><FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffd333", }} /></button>
                                <span ref={cartBack2} className='text-light text-center cart-lenght'>{cartQuantity}</span>
                            </div>
                        </div>
                        <div className="nav-links" ref={navActive}>
                            {
                                nav_links.map((link, i) => (
                                    <NavLink to={link.path} key={i} className={(navClass) =>
                                        navClass.isActive ? "active text-decoration-none d-flex flex-column text-center my-3" : "unactive text-decoration-none d-flex flex-column text-center my-3"
                                    }>
                                        {link.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default SecNavBar;