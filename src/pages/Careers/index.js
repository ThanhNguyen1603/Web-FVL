import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import careerStyle from '../Careers/careers.module.scss';
import { CareersList } from '../../components/Careers';
import merryChristmas from "../../Image/Contact/FVL-TPL-Xmas.webp";
import DataProcess from "../../Image/Careers/Data Processing.webp"
import { NavLink } from "react-router-dom";
const Careers = () => {

    return (
        <>
            {/* <CareerBanner /> */}
            <div className={careerStyle.careerBackground}>
                <div className={careerStyle.title}>
                    <div className="container-fluid">
                        <div className={careerStyle.titleBackground}>
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6">
                                    <div className={careerStyle.workAH}>
                                        <img src={DataProcess} />
                                    </div>
                                </div>

                                <div className="col-lg-6 pt-3">
                                    <div className={careerStyle.workAH}>
                                        <h1>Here, the sky is the limit!</h1>
                                        <h4>Join us and be at the forefront of change. Make a positive impact by delivering exceptional value to our clients and contributing to a more connected, sustainable future. Embrace the opportunity to innovate, grow, and make a difference in a dynamic and supportive environment.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${careerStyle.title} ${careerStyle.title1}`}>
                    <div className="container-fluid">
                        <div className={careerStyle.titleBackground}>
                            <div className="row align-items-center flex-lg-row flex-md-row flex-column-reverse">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className={careerStyle.workAH}>
                                        <h1>Flex and Connect</h1>
                                        <h4>Flexibility extends beyond where you work - to what you do, when, and how you do it. At our company, making connections is a key part of flexible working. We believe in the power of these connections to build strong relationships and drive innovation, creating meaningful change. </h4>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className={careerStyle.workAH}>
                                        <img src={merryChristmas} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={careerStyle.titleContent}>
                                <h2>Join Us</h2>
                                <p>Welcome to our place where you can grow, learn, and connect. We celebrate everything that makes you unique.</p>
                                <p>Ready to explore open roles that match your interests and skills?</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {
                            CareersList.map((careerItem, index) => {
                                return (

                                    <div key={index} className={`col-lg-4 pt-3`}>
                                        <div className={careerStyle.careersListBackground}>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5>{careerItem.jobName}</h5>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h6>{careerItem.hashtag}</h6>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className={careerStyle.imageCareer}>
                                                        {careerItem.image}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <button className={`${careerStyle.btnapply}`} type="button">
                                                        <NavLink to='/CareerDetails' state={{
                                                            jobName: careerItem.jobName,
                                                        }}>Apply Now</NavLink>
                                                    </button>
                                                </div>
                                            </div>

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