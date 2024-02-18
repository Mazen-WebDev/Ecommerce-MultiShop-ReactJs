import React from 'react';
import offerImg_3 from "../../src/imgs/offer-img/offer-3.jpg";
import offerImg_2 from "../../src/imgs/offer-img/offer-2.jpg";
import "../styles/SpecialOfferSection.css";
import { Link } from 'react-router-dom';

const SpecialOfferSection = () => {
    const offer_images = [
        {
            image: offerImg_3,
            text1: "SAVE 20%",
            text2: "Special Offer",
            path: "/Shop"
        },
        {
            image: offerImg_2,
            text1: "SAVE 20%",
            text2: "Special Offer",
            path: "/Shop"
        },
    ];

    return (
        <div className="special-offer mb-5">
            <div className="container">
                <div className="row">
                    {
                        offer_images.map((e, i) => (
                            <div className="col-lg-6 col-md-12 mb-3" key={i}>
                                <div className="offer-box">
                                    <img className='offer-image2' src={e.image} alt="offer-img" />
                                    <div className="offer-text text-center text-light d-flex flex-column">
                                        <span>{e.text1}</span>
                                        <span className='fw-bold fs-4'>{e.text2}</span>
                                        <Link to={e.path}><button className='shop-btn px-4 py-2'>Shop Now</button></Link>
                                    </div>
                                    <div className="overlay"></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SpecialOfferSection;