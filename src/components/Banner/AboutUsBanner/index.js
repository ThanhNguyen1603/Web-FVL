import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerGeneral from '../banner.module.scss';
import bannerStyle from './BannerAboutUs.module.scss';
import Header from '../../Header';
import imgBanner from '../../../Image/Banner/Ai-brain-hallucinate-1024x683.jpg'


const BannerAboutUs = () => {
    return (
        <>
            <div className={bannerStyle.AIbrainBackground}>
                <div className='container-fluid'>
                    <div className="row flex-lg-row flex-md-row flex-column-reverse">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                            <div className={bannerStyle.bannerWhoWeAre}><h2>Who We Are</h2></div>
                            <p>We are the western-managed Business Process Outsourcing business based in Ho Chi Minh City, Vietnam.</p>
                            <p className={bannerStyle.highlight}>Established in 2004 and 2013 respectively, Transcend People LLC & First Virtue LLC offer long-term, flexible outsourcing solutions to a broad range of clients to help drive operational cost efficiency and business growth.
                                FVL & TPL combine in-depth understanding of our clients' businesses and expertise in business process outsourcing, we take on clients' challenges and develop innovative solutions to address them.</p>
                            <p>Through our commitment to ease of integration, transparent communication, and superior customer service, we help to free up their time and resources, enabling them to focus on what they do best.</p>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <div className={bannerStyle.AIbrian}>
                                <img src={imgBanner}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BannerAboutUs