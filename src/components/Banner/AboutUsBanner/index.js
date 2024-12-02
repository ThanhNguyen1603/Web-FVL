import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerGeneral from '../banner.module.scss';
import bannerStyle from './BannerAboutUs.module.scss';
import Header from '../../Header';


const BannerAboutUs = () => {
    return (

        <div className={bannerStyle.AIbrainBackground}>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-7">
                        <div className={bannerStyle.bannerWhoWeAre}>Who We Are</div>
                        <p>We are the western-managed Business Process Outsourcing business based in Ho Chi Minh City, Vietnam</p>
                        <p>Transcend People LLC (TPL) since 2004 & First Virtue LLC (FVL) since 2013 offer long-term, flexible outsourcing solutions to a broad range of clients to help drive operational cost efficiency and business growth.</p>
                        <p>FVL & TPL combine in-depth understanding of our clients' businesses and expertise in business process outsourcing, we take on clients' challenges and develop innovative solutions to address them.</p>
                        <p>Through our commitment to ease of integration, transparent communication, and superior customer service, we help to free up their time and resources, enabling them to focus on what they do best.</p>
                    </div>
                    <div className={`col-lg-5 ${bannerStyle.AIbrian}`}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerAboutUs