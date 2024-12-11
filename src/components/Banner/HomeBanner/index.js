import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerHomeStyle from './bannerHome.module.scss'
import bannerHome from '../../../Image/Banner/Its-a-flat-world-Reimagine-how-you-do-business-background.webp';

const HomeBanner = () => {
    return (
        <div className={bannerHomeStyle.backgroundImage}>
            <img rel="preload" fetchpriority="high" src={bannerHome} alt="Its-a-flat-world-Reimagine-how-you-do-business-background"></img>
        </div>
    )
}

export default HomeBanner