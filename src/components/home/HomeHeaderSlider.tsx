import React from 'react';
import SwiperCore, {Navigation, Autoplay} from 'swiper';
import "./assets/header-slider.scss"
import {Swiper, SwiperSlide} from 'swiper/react';
import BG1 from "./assets/photo1.jpg";
import BG2 from "./assets/photo2.jpg";
import { useTranslation } from 'react-i18next';
SwiperCore.use([Navigation,Autoplay]);

export function HomeHeaderSlider() {
    const {t, i18n} = useTranslation();
    return (
        <div className="home-header">
            <Swiper slidesPerView={1} spaceBetween={30}  autoplay={{
                "delay": 10000,
                "disableOnInteraction": false
            }} loop={true} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className="swiper-slide_body" style={{
                        background: `url(${BG1}) center center no-repeat`,
                        backgroundSize: "cover"
                    }}>
                        <div className="swiper-slide_bg" />
                        <div className="swiper-slide_content">
                            <p className="swiper-slide_content_title">
                               {t('home_text1')} 
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide_body" style={{
                        background: `url(${BG2}) center center no-repeat`,
                        backgroundSize: "cover"
                    }}>
                        <div className="swiper-slide_bg" />
                        <div className="swiper-slide_content">
                            <p className="swiper-slide_content_title">
                               {t('home_text2')} 
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

