import React from 'react';
import "../styles/MainTitle.css";

const MainTitle = ({ title }) => {
    return (
        <div className="main-title mt-5 mb-5">
            <div className="container">
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default MainTitle;