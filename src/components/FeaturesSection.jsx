import { faCheck, faPhoneVolume, faRightLeft, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../styles/FeatureSection.css";

const FeaturesSection = () => {
    const features = [
        {
            icon: faCheck,
            text: "Quality Product"
        },
        {
            icon: faTruckFast,
            text: "Free Shipping"
        },
        {
            icon: faRightLeft,
            text: "14-Day Return"
        },
        {
            icon: faPhoneVolume,
            text: "24/7 Support"
        },
    ];

    return (
        <div className="feature-section mt-5 mb-5">
            <div className="container">
                <div className="row">
                    {
                        features.map((e) => (
                            <div className="col-lg-3 mt-md-4">
                                <div className="feature-box d-flex justify-content-center align-items-center p-2 mt-4">
                                    <p className='fs-1 mx-2 mt-2'><FontAwesomeIcon icon={e.icon} style={{ color: "#ffd333", }} /></p>
                                    <p className='fs-5 fw-bold mx-2 mt-2'>{e.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;