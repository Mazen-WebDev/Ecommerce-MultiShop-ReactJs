import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import SecNavBar from '../components/SecNavBar';
import { useDispatch, useSelector } from 'react-redux';
import CartSlide from '../components/CartSlide';
import FavouriteSlide from '../components/FavouriteSlide';
import "../styles/CartPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import FormatCurrency from '../FormatCurrency';
import { addToCart, cartActions, decreaseQuantity2, deleteProduct } from '../rtk/Slices/CartSlice';
import FooterSection from '../components/FooterSection';
import Carts from '../components/Carts';
import Tr from '../components/Tr';
import Favs from '../components/Favs';

const CartPage = () => {
    const showCart = useSelector(state => state.CartUiSlice.cartIsVisible);
    const showFav = useSelector(state => state.FavouriteUiSlice.FavouriteIsVisible);

    const cart = useSelector(state => state.CartSlice.cartItems);

    // const total = cart.reduce((acc, cur) => {
    //     acc += cur.price * cur.quantity;
    //     return acc;
    // }, 0);

    const shipping = 10;

    const dispatch = useDispatch();

    const checkoutActive = useRef(null);
    const checkProceed = useRef(null);

    const checkActive = () => {
        if (cart.length === 0) {
            checkProceed.current.classList.add("disable");
        } else {
            checkProceed.current.classList.remove("disable");
            checkoutActive.current.classList.add("checkActive");
        }
    }

    const closeCheck = () => {
        checkoutActive.current.classList.remove("checkActive");
    }

    window.scrollTo({
        top: 0,
    });

    const totalAmount = useSelector(state => state.CartSlice.totalAmount);

    return (
        <>
            <NavBar />
            <SecNavBar />
            {showCart && <Carts />}
            {showFav && <Favs />}
            <div className="cart-page mt-lg-2 pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <table className=''>
                                <thead>
                                    <tr className='tr-1 text-light'>
                                        <th className="p-2 px-lg-3">Product</th>
                                        {/* <th className="p-2 px-3">Title</th> */}
                                        <th className="p-2 px-lg-3">Price</th>
                                        <th className="p-2 px-lg-3">Quantity</th>
                                        <th className="p-2 px-lg-3">Remove</th>
                                    </tr>
                                </thead>
                                {
                                    cart && cart.length > 0 ? (
                                        <tbody>
                                            {
                                                cart.map((product) => (
                                                    <Tr product={product} key={product.id} />
                                                ))
                                            }
                                        </tbody>
                                    ) : cart.length === 0 && <h3 className='empty text-center text-black-50'>YOUR CART IS EMPTY</h3>
                                }
                            </table>
                        </div>
                        <div className="col-lg-3 col-md-12" id='summary-col'>
                            <h4 className='cart-sum'>CART SUMMARY</h4>
                            <div className="summary-box p-4">
                                <div className="first d-flex justify-content-between">
                                    <p className='fw-bold'>Subtotal</p>
                                    <p className='fw-bold'>{FormatCurrency(totalAmount)}</p>
                                </div>
                                <div className="second d-flex justify-content-between">
                                    <p className='fw-bold'>Shipping</p>
                                    <p className='fw-bold'>{FormatCurrency(shipping)}</p>
                                </div>
                                <div className="third d-flex justify-content-between align-items-center mb-2">
                                    <p className='fw-bold fs-4'>Total</p>
                                    <p className='fw-bold fs-5'>{FormatCurrency(totalAmount + shipping)}</p>
                                </div>
                                <button ref={checkProceed} onClick={checkActive} className='check-btn p-3 w-100 fw-bold'>Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={checkoutActive} className="checkout">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                {/* <div className="billing p-2 d-flex">
                                    <h4>BILLING ADDRESS</h4>
                                    <button onClick={closeCheck} className='close-check fs-4'><FontAwesomeIcon icon={faXmark} /></button>
                                </div> */}
                                <div className="checkout-box text-center p-4">
                                    <div className="billing p-2 d-flex w-100">
                                        <h4>BILLING ADDRESS</h4>
                                        <button onClick={closeCheck} className='close-check fs-4'><FontAwesomeIcon icon={faXmark} /></button>
                                    </div>
                                    <form className='text-light mt-5'>
                                        <div className="row">
                                            <div className="check-smbox d-flex justify-content-between mb-1">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>First Name</label>
                                                        <input required className='input-text p-2' type="text" placeholder='First Name' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Last Name</label>
                                                        <input required className='input-text p-2' type="text" placeholder='Last Name' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-smbox d-flex justify-content-between mb-1">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>E-mail</label>
                                                        <input required className='input-text p-2' type="email" placeholder='example@email.com' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Mobile No</label>
                                                        <input required className='input-text p-2' type='text' maxLength={9} placeholder='+123 456 789' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-smbox d-flex justify-content-between mb-1">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Address Line 1</label>
                                                        <input required className='input-text p-2' type="text" placeholder='123 Street' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Address Line 1</label>
                                                        <input required className='input-text p-2' type="text" placeholder='123 Street' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-smbox d-flex justify-content-between mb-1">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Country</label>
                                                        <input required className='input-text p-2' type="text" placeholder='United States' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>City</label>
                                                        <input required className='input-text p-2' type="text" placeholder='New York' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-smbox d-flex justify-content-between mb-1">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>State</label>
                                                        <input required className='input-text p-2' type="text" placeholder='New York' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>ZIP Code</label>
                                                        <input required className='input-text p-2' type="text" placeholder='123' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-box d-flex flex-column mb-1 mt-1">
                                                <div className='mb-2'>
                                                    <input type="checkbox" /> <span>Create an account</span>
                                                </div>
                                                <div>
                                                    <input type="checkbox" /> <span>Ship to different address</span>
                                                </div>
                                            </div>
                                            <input type='submit' className='check-btn2 p-3 w-100 fw-bold' value='Submit' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}

export default CartPage;

// {
//     cart.map((product, i) => (
//         <tr className='product-tr' key={i}>
//             <td className='d-flex flex-column'>
//                 <td><img className='table-img my-2' src={product.thumbnail} alt='product-img' /></td>
//                 <td className='text-black-50'>{product.title}</td>
//             </td>
//             <td className='text-black-50'>{FormatCurrency(product.price)}</td>
//             <td className=''><button onClick={increaseQuantity} className='increase-btn w-25 me-lg-2 fs-5'>+</button><span className='text-light bg-black px-2 mx-2'>{product.quantity}</span><button onClick={decreaseQuantity} className='decrease-btn w-25 ms-lg-2 fs-5'>-</button></td>
//             {/* <td><button className='x-btn p-2 ms-4' onClick={() => dispatch(deleteProduct(product))}><FontAwesomeIcon className='x-icon text-light fs-5' icon={faRectangleXmark} /></button></td> */}
//         </tr>
//     ))
// }