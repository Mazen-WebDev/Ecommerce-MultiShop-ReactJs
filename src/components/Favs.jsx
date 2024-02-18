import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavouriteSlide from './FavouriteSlide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FavUiActions } from '../rtk/Slices/FavouriteUiSlice';
import "../styles/Favs.css";

const Favs = () => {
    const favProducts = useSelector(state => state.FavouriteSlice.favItems);

    const dispatch = useDispatch();

    const toggleFav = () => {
        dispatch(FavUiActions.toggleFav());
    }

    return (
        <div className="fav">
            <div className="container">
                <button className='fav-close m-lg-3' onClick={toggleFav}><FontAwesomeIcon className='fs-4' icon={faCircleXmark} /></button>
                {
                    favProducts.length === 0 ? <p className='cart-empty fw-bold fs-3 text-center'>NO PRODUCT ADDED</p>
                        : (
                            favProducts.map((product, i) => (
                                <FavouriteSlide product={product} key={i} />
                            ))
                        )
                }
            </div>
        </div>
    );
}

export default Favs;