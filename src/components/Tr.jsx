import React from 'react';
import FormatCurrency from '../FormatCurrency';
import { cartActions } from '../rtk/Slices/CartSlice';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

const Tr = (props) => {
    const { id, title, thumbnail, price, quantity } = props.product;
    const dispatch = useDispatch()

    const increaseQuantity = () => {
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
        <tr className='product-tr'>
            <td className='d-flex flex-column'>
                <td><img className='table-img my-2' src={thumbnail} alt='product-img' /></td>
                <td className='text-black-50'>{(title).slice(0, 12)}</td>
            </td>
            <td className='text-black-50'>{FormatCurrency(price)}</td>
            <td className=''><button onClick={increaseQuantity} className='increase-btn w-25 me-lg-2 fs-5'>+</button><span className='text-light bg-black px-2 mx-2'>{quantity}</span><button onClick={decreaseQuantity} className='decrease-btn w-25 ms-lg-2 fs-5'>-</button></td>
            <td><button className='x-btn p-2 ms-4' onClick={deleteProduct}><FontAwesomeIcon className='x-icon text-light fs-5' icon={faRectangleXmark} /></button></td>
        </tr>
    );
}

export default Tr;