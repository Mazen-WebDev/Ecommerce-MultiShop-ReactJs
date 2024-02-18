import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import Vendor_img1 from "../imgs/vendor-img/vendor-1.jpg";
import Vendor_img2 from "../imgs/vendor-img/vendor-2.jpg";
import Vendor_img3 from "../imgs/vendor-img/vendor-3.jpg";
import Vendor_img4 from "../imgs/vendor-img/vendor-4.jpg";
import Vendor_img5 from "../imgs/vendor-img/vendor-5.jpg";
import Vendor_img6 from "../imgs/vendor-img/vendor-6.jpg";
import Vendor_img7 from "../imgs/vendor-img/vendor-7.jpg";
import Vendor_img8 from "../imgs/vendor-img/vendor-8.jpg";
import "../styles/VendorSection.css";

const VendorSection = () => {
    const vendorImgs = [
        {
            image: Vendor_img1,
        },
        {
            image: Vendor_img2,
        },
        {
            image: Vendor_img3,
        },
        {
            image: Vendor_img4,
        },
        {
            image: Vendor_img5,
        },
        {
            image: Vendor_img6,
        },
        {
            image: Vendor_img7,
        },
        {
            image: Vendor_img8,
        },
    ];

    return (
        <div className="vendor-section mt-5 mb-5">
            <div className="container">
                <Swiper
                    // effect={'coverflow'}
                    grabCursor={true}
                    spaceBetween={40}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        vendorImgs.map((slide, i) => (
                            <SwiperSlide className="swiper-image d-flex justify-content-center p-2" key={i}>
                                <img className='w-50' src={slide.image} alt='vendor-img' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default VendorSection;