import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartUiActions } from '../rtk/Slices/CartUiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import "../styles/Carts.css";
import CartSlide from './CartSlide';
import FormatCurrency from '../FormatCurrency';

const Carts = () => {
    const cartProducts = useSelector(state => state.CartSlice.cartItems);
    console.log(cartProducts);
    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    }

    const removeActive = () => {
        dispatch(cartUiActions.toggle());
    }

    const totalAmount = useSelector(state => state.CartSlice.totalAmount);

    return (
        <div className="carts">
            <div className="container">
                <button className='cart-close m-lg-3' onClick={toggleCart}><FontAwesomeIcon className='fs-4' icon={faCircleXmark} /></button>
                {
                    cartProducts.length === 0 ? <p className='cart-empty fw-bold fs-3 text-center'>NO PRODUCT ADDED</p>
                        : (
                            cartProducts.map((product, i) => (
                                <CartSlide product={product} key={i} />
                            ))
                        )
                }
                {
                    cartProducts.length > 0 && <>
                        <hr />
                        <div className='total-check'>
                            <div className="total-box d-flex align-items-center justify-content-between mt-3">
                                <p className='total fs-2 fw-bold'>TOTAL:</p>
                                <p className='price fs-2 fw-bold'>{FormatCurrency(totalAmount)}</p>
                            </div>
                            <Link onClick={removeActive} to={"/cart"}><button className='check-cart rounded w-100 p-2 fs-5 fw-bold'>Check Your Cart</button></Link>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Carts;