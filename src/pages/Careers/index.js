import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../Home/home.module.scss';
import wfh from '../WorkFromHome/WFH.module.scss';
import careerStyle from '../Careers/careers.module.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import { CareersList } from '../../components/Careers';
import CareerBanner from '../../components/Banner/CareerBanner';
import { NavLink } from "react-router-dom";
const Careers = () => {

    return (
        <>
            {/* <CareerBanner /> */}
            <div className={careerStyle.careerBackground}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={careerStyle.titleContent}>
                                <h2>Job Opportunities</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            CareersList.map((careerItem, index) => {
                                return (
                                    <div key={index} className={`col-lg-3`}>
                                        <div className={careerStyle.careersListBackground}>
                                            <h5>{careerItem.jobName}</h5>
                                            <h6>{careerItem.hashtag}</h6>
                                            <button className={`${careerStyle.btnapply}`} type="button">
                                                <NavLink to='/CareerDetails' state={{
                                                    jobName: careerItem.jobName,
                                                }}>Apply Now</NavLink>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Careers;