import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerGeneral from '../banner.module.scss';
import bannerHomeStyle from './bannerHome.module.scss';

const HomeBanner = () => {
    return (
        <div className={bannerHomeStyle.backgroundImage}>
            <div className={bannerGeneral.titlePage}>

                <h1>SOLUTIONS</h1>
            </div>
        </div>
    )
}

export default HomeBanner