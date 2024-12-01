import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerGeneral from '../banner.module.scss';
import bannerStyle from './BannerAboutUs.module.scss';
import Header from '../../Header';


const BannerAboutUs = () => {
    return (
        <div className={bannerStyle.backgroundImage}>
            <div className={bannerGeneral.titlePage}>
                {/* <Header /> */}
                <h1>WHO WE ARE</h1>
            </div>
        </div>
    )
}

export default BannerAboutUs