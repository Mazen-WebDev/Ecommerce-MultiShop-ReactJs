import React from 'react'
import NavBar from '../components/NavBar';
import SecNavBar from '../components/SecNavBar';
import LandingSection from '../components/LandingSection';
import FeaturesSection from '../components/FeaturesSection';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import SpecialOfferSection from '../components/SpecialOfferSection';
import RecentProducts from '../components/RecentProducts';
import { useSelector } from 'react-redux';
import CartSlide from '../components/CartSlide';
import FavouriteSlide from '../components/FavouriteSlide';
import VendorSection from '../components/VendorSection';
import FooterSection from '../components/FooterSection';
import Carts from '../components/Carts';
import Favs from '../components/Favs';

const Layout = () => {
    const showCart = useSelector(state => state.CartUiSlice.cartIsVisible);
    const showFav = useSelector(state => state.FavouriteUiSlice.FavouriteIsVisible);

    return (
        <div className='layout'>
            <NavBar />
            <SecNavBar />
            {showCart && <Carts />}
            {showFav && <Favs />}
            <LandingSection />
            <FeaturesSection />
            <CategoriesSection />
            <FeaturedProducts />
            <SpecialOfferSection />
            <RecentProducts />
            <VendorSection />
            <FooterSection />
        </div>
    );
}

export default Layout;