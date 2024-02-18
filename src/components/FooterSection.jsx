import React from 'react';
import "../styles/FooterSection.css";
import { faAngleRight, faCopyright, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    const iconText = [
        {
            icon: faLocationDot,
            text: "123 Street, New York, USA"
        },
        {
            icon: faEnvelope,
            text: "info@example.com"
        },
        {
            icon: faPhone,
            text: "+012 345 67890"
        },
    ];

    const quickShop = [
        {
            icon: faAngleRight,
            text: "Home",
            path: "/home"
        },
        {
            icon: faAngleRight,
            text: "Our Shop",
            path: "/shop"
        },
        {
            icon: faAngleRight,
            text: "Shopping Cart",
            path: "/cart"
        },
        {
            icon: faAngleRight,
            text: "Checkout",
            path: "/cart"
        },
        {
            icon: faAngleRight,
            text: "Contact Us",
            path: "/contact"
        },
    ];

    const aboutUs = [
        {
            icon: faAngleRight,
            text: "Projects"
        },
        {
            icon: faAngleRight,
            text: "About Us"
        },
        {
            icon: faAngleRight,
            text: "Blog"
        }
    ];

    const currentYear = new Date().getFullYear();
    const path = "https://github.com/Mazen-WebDev";

    return (
        <>
            <div className="footer-section mb-4 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="footer-box mt-5">
                                <h4 className='text-light mb-2'>GET IN TOUCH</h4>
                                <p className='text-light'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                                {
                                    iconText.map((e, i) => (
                                        <p key={i} className='text-light'><FontAwesomeIcon className='me-2' icon={e.icon} style={{ color: "#ffd333", }} /> {e.text}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <div className="footer-box2 mt-5">
                                <h4 className='text-light mb-2'>QUICK SHOP</h4>
                                <ul className='list-unstyled'>
                                    {
                                        quickShop.map((e, i) => (
                                            <Link className='text-decoration-none' to={e.path} key={i}><li className='text-light my-2'><FontAwesomeIcon className='me-2' icon={e.icon} /> {e.text}</li></Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <div className="footer-box2 mt-5">
                                <h4 className='text-light mb-2'>ABOUT US</h4>
                                <ul className='list-unstyled'>
                                    {
                                        aboutUs.map((e, i) => (
                                            <li className='text-light my-2'><FontAwesomeIcon className='me-2' icon={e.icon} /> {e.text}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer-box3 mt-5">
                                <h4 className='text-light mb-2'>NEWSLETTER</h4>
                                <p className='text-light'>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                                <div className="input-group mb-3">
                                    <input className='p-2 input-2' type="text" placeholder="Your E-mail Address" />
                                    <button className="sign-btn">Sign UP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <p className='dev'><FontAwesomeIcon icon={faCopyright} /> {currentYear} Developed By <Link to={path} className='github-link text-decoration-none fw-bold'>MazenMohamed</Link>. All Rights Reserved. Designed by HTML Codex</p>
                </div>
            </div>
        </>
    );
}

export default FooterSection;