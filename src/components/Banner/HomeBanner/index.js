import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerHomeStyle from './bannerHome.module.scss'
import bannerHome from '../../../Image/Banner/wrapper_header_bg1.jpg';
// import OclockBanner from '../OclockBanner';

const HomeBanner = () => {
    return (
        <div className={bannerHomeStyle.backgroundImage}>
            <img rel="preload" fetchpriority="high" src={bannerHome}></img>
        </div>
    )
}

export default HomeBanner