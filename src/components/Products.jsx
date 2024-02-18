import "../styles/Products.css";
import FormatCurrency from '../FormatCurrency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faInfo, faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
// import { addToCart} from '../rtk/Slices/CartSlice';
import { FavouriteActions } from '../rtk/Slices/FavouriteSlice';
import { Link } from "react-router-dom";
import { cartActions } from "../rtk/Slices/CartSlice";

const Products = (props) => {
    const { id, title, price, thumbnail, rating } = props.product;
    // const { product } = props;

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addToCart({
            id,
            title,
            price,
            thumbnail
        }));
    }

    const addToFav = () => {
        dispatch(FavouriteActions.addToFav({
            id,
            title,
            thumbnail,
            price
        }))
    }

    return (
        <div className="product-card text-center p-3 my-2">
            <div className="product-img-box overflow-hidden">
                <img className='product-img d-flex' src={thumbnail} alt="" />
            </div>
            <div className="action-buttons">
                <button className='cart-btn2 mx-2' onClick={addToFav}><FontAwesomeIcon className='cart-icon2 fs-5' icon={faHeart} /></button>
                <button className='cart-btn2 mx-2' onClick={addToCart}><FontAwesomeIcon className='cart-icon2 fs-5' icon={faCartShopping} /></button>
                <Link to={`/shopdetail/${id}`}><button className="details-btn mx-2"><FontAwesomeIcon className="details-icon fs-5" icon={faInfo} /></button></Link>
            </div>
            <div className="product-box d-flex flex-column mt-4">
                <span className='fs-6 fw-bold product-title'>{title}</span>
                <span className='text-black-50'>{FormatCurrency(price)}</span>
                <span><FontAwesomeIcon icon={faStar} style={{ color: "#fdd333", }} /> {rating}</span>
            </div>
        </div>
        // <div className="product-card text-center p-3 my-2">
        //     <div className="product-img-box overflow-hidden">
        //         <img className='product-img d-flex' src={product.thumbnail} alt="" />
        //     </div>
        //     <div className="action-buttons">
        //         <button className='cart-btn2 mx-2' onClick={() => dispatch(addToFav(product))}><FontAwesomeIcon className='cart-icon2 fs-5' icon={faHeart} /></button>
        //         <button className='cart-btn2 mx-2' onClick={() => dispatch(addToCart(product))}><FontAwesomeIcon className='cart-icon2 fs-5' icon={faCartShopping} /></button>
        //         <Link to={`/shopdetail/${product.id}`}><button className="details-btn mx-2"><FontAwesomeIcon className="details-icon fs-5" icon={faInfo} /></button></Link>
        //     </div>
        //     <div className="product-box d-flex flex-column mt-4">
        //         <span className='fs-6 fw-bold product-title'>{product.title}</span>
        //         <span className='text-black-50'>{FormatCurrency(product.price)}</span>
        //         <span><FontAwesomeIcon icon={faStar} style={{ color: "#fdd333", }} /> {product.rating}</span>
        //     </div>
        // </div>
    );
}

export default Products;