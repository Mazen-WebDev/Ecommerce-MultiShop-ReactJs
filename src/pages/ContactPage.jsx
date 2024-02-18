import React from 'react';
import NavBar from '../components/NavBar';
import SecNavBar from '../components/SecNavBar';
import { useSelector } from 'react-redux';
import FavouriteSlide from '../components/FavouriteSlide';
import MainTitle from '../components/MainTitle';
import "../styles/ContactPage.css";
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterSection from '../components/FooterSection';
import Carts from '../components/Carts';
import Favs from '../components/Favs';

const ContactPage = () => {
    const showCart = useSelector(state => state.CartUiSlice.cartIsVisible);
    const showFav = useSelector(state => state.FavouriteUiSlice.FavouriteIsVisible);

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

    window.scrollTo({
        top: 0,
    });

    return (
        <>
            <NavBar />
            <SecNavBar />
            {showCart && <Carts />}
            {showFav && <Favs />}
            <div className="contact mt-lg-2 pt-2">
                <div className="container">
                    <MainTitle title={"CONTACT US"} />
                    <div className="row">
                        <div className="col-lg-7">
                            <form>
                                <div className="content-1 p-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <input className='w-100 p-2 mb-3' type="text" placeholder='Your Name' required />
                                        </div>
                                        <div className="col-lg-12">
                                            <input className='w-100 p-2 mb-3' type="email" placeholder='Your E-mail' required />
                                        </div>
                                        <div className="col-lg-12">
                                            <input className='w-100 p-2 mb-3' type="text" placeholder='Subject' required />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className='w-100 p-2 mb-2' type="text" placeholder='Message' required />
                                        </div>
                                    </div>
                                    <input className='send-btn px-3 py-2' type="submit" value={"Send Message"} />
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="content-2 mb-4 p-4">
                                <iframe title='map' style={{ width: "100%", height: "250px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                            <div className="content-3 p-4">
                                {
                                    iconText.map((e, i) => (
                                        <p key={i} className='text-black-50'><FontAwesomeIcon className='me-2' icon={e.icon} style={{ color: "#ffd333", }} /> {e.text}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}

export default ContactPage;