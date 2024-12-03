import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import careerStyle from '../Careers/careers.module.scss';
import { CareersList } from '../../components/Careers';
import merryChristmas from "../../Image/Contact/Xmas WAH and WAO Opt2.jpg";
import DataProcess from "../../Image/Careers/Data Processing.png"
import { NavLink } from "react-router-dom";
const Careers = () => {

    return (
        <>
            {/* <CareerBanner /> */}
            <div className={careerStyle.careerBackground}>

                <div className={careerStyle.title}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className={careerStyle.titleBackground}>

                                <div className="col-lg-6">
                                    <div className={careerStyle.workAH}>
                                        <img src={DataProcess} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={careerStyle.workAH}>
                                        <h1>Here, the sky is the limit.</h1>
                                        <h2>Join us and work at the heart of change. Make a positive impact by bringing value to our clients and helping to shape a more connected, sustainable future.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className={careerStyle.titleBackground}>

                                <div className="col-lg-6">
                                    <div className={careerStyle.workAH}>
                                        <h1>Flex and connect.</h1>
                                        <h2>Flexibility extends beyond where you work—to what you do and when and how you do it. For all of us, making connections is a key part of flexible working. We believe in its power to build strong relationships and innovate to create change.</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={careerStyle.workAH}>
                                        <img src={merryChristmas} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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