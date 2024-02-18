import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../rtk/Slices/CartUiSlice';
import FormatCurrency from '../FormatCurrency';
import { addToCart, cartActions, decreaseQuantity, deleteProduct } from '../rtk/Slices/CartSlice';
import { Link } from 'react-router-dom';

const CartSlide = ({ product }) => {
    const dispatch = useDispatch();

    // const cart = useSelector(state => state.CartSlice.cartItems);

    // const total = cart.reduce((acc, cur) => {
    //     acc += cur.price * cur.quantity;
    //     return acc;
    // }, 0)

    const { id, title, thumbnail, price, quantity, totalPrice } = product;

    const increamentProduct = () => {
        dispatch(cartActions.addToCart({
            id,
            title,
            thumbnail,
            price
        }));
    }

    const decreaseQuantity = () => {
        dispatch(cartActions.decreaseProduct(id));
    }

    const deleteProduct = () => {
        dispatch(cartActions.deleteProduct(id));
    }

    return (
        <div className="cart-slide">
            <div className="container">
                <div className="cart-box">
                    <div className="big-box mb-3">
                        <div className="product-cart d-flex align-items-center justify-content-between">
                            <img className='product-cartimage' src={thumbnail} alt="" />
                            <div className="cart-text d-flex flex-column">
                                <span className='text-black-50'>{title}</span>
                                <span><span className='price'>Price:</span> {FormatCurrency(totalPrice)}</span>
                            </div>
                        </div>
                        <div className="quantity-box d-flex justify-content-around align-items-center mt-3">
                            <button className='increase-btn rounded fs-4 fw-bold' onClick={increamentProduct}>+</button>
                            <span className='fs-4 fw-bold text-black-50'>{quantity}</span>
                            <button className='decrease-btn rounded fs-4 fw-bold' onClick={decreaseQuantity}>-</button>
                        </div>
                        <button className='del-btn rounded p-2 mt-3 w-100 fw-bold' onClick={deleteProduct}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        // <div className="cart-slide">
        //     <div className="container">
        //         <button className='cart-close m-lg-3' onClick={toggleCart}><FontAwesomeIcon className='fs-4' icon={faCircleXmark} /></button>
        //         <div className="cart-box">
        //             {
        //                 cart.map((product) => (
        //                     <div className="big-box mb-3">
        //                         <div className="product-cart d-flex align-items-center justify-content-between">
        //                             <img className='product-cartimage' src={product.thumbnail} alt="" />
        //                             <div className="cart-text d-flex flex-column">
        //                                 <span className='text-black-50'>{product.title}</span>
        //                                 <span><span className='price'>Price:</span> {FormatCurrency(product.price)}</span>
        //                             </div>
        //                         </div>
        //                         <div className="quantity-box d-flex justify-content-around align-items-center mt-3">
        //                             {/* <button className='increase-btn rounded fs-4 fw-bold' onClick={() => dispatch(addToCart(product))}>+</button> */}
        //                             <span className='fs-4 fw-bold text-black-50'>{product.quantity}</span>
        //                             {/* <button className='decrease-btn rounded fs-4 fw-bold' onClick={() => dispatch(decreaseQuantity(product))}>-</button> */}
        //                         </div>
        //                         {/* <button className='del-btn rounded p-2 mt-3 w-100 fw-bold' onClick={() => dispatch(deleteProduct(product))}>Delete</button> */}
        //                     </div>
        //                 ))
        //             }
        //             {
        //                 cart.length === 0 && <p className='cart-empty fw-bold fs-3 text-center'>NO PRODUCT ADDED</p>
        //             }
        //             {
        //                 cart.length > 0 && <>
        //                     <hr />
        //                     <div className='total-check'>
        //                         <div className="total-box d-flex align-items-center justify-content-between mt-3">
        //                             <p className='total fs-2 fw-bold'>TOTAL:</p>
        //                             {/* <p className='price fs-2 fw-bold'>{FormatCurrency(total)}</p> */}
        //                         </div>
        //                         <Link onClick={removeActive} to={"/cart"}><button className='check-cart rounded w-100 p-2 fs-5 fw-bold'>Check Your Cart</button></Link>
        //                     </div>
        //                 </>
        //             }
        //         </div>
        //     </div>
        // </div>
    );
}

export default CartSlide;