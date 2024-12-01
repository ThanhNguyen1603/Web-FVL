import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../Home/home.module.scss';
import wfh from '../WorkFromHome/WFH.module.scss';
import WorkFromHomeBanner from '../../components/Banner/WorkFromHomeBanner'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faUserShield, faGraduationCap, faGlobe, faCreditCard, faCheck } from "@fortawesome/free-solid-svg-icons";
import MerryChrismateZoomImg from "../../Image/WorkFromHome/merrychrismatezoom.jpg";
const WorkFromHome = () => {
    const wfhList = [
        { icon: <FontAwesomeIcon icon={faCalendarCheck} />, content: 'Work from your home. At your convenient time.' },
        { icon: <FontAwesomeIcon icon={faUserShield} />, content: 'Avoid trafﬁc. Save Commuting time.' },
        { icon: <FontAwesomeIcon icon={faGraduationCap} />, content: 'No experience. Free training.' },
        { icon: <FontAwesomeIcon icon={faCreditCard} />, content: 'Guaranteed payment.' },
        { icon: <FontAwesomeIcon icon={faGlobe} />, content: 'All you need is commitment, a computer at home, and internet connection.' },

    ]
    const covidList = [
        { icon: <FontAwesomeIcon icon={faCheck} />, content: 'In the first week of Mar 2020, we set Plan of attack to prepare for Work From Home (WFH).' },
        { icon: <FontAwesomeIcon icon={faCheck} />, content: 'After 2 weeks of planning, we have deployed 100% of our production team as WFH-able.' },
        { icon: <FontAwesomeIcon icon={faCheck} />, content: 'During the deployment, Employees were given the option to borrow company equipment.' },
        { icon: <FontAwesomeIcon icon={faCheck} />, content: 'All Operators agreed and signed the WFH Service Level Agreement Form.' },
        { icon: <FontAwesomeIcon icon={faCheck} />, content: 'Despite of the pandemic, we received more projects from customers.' },
        { icon: <FontAwesomeIcon icon={faCheck} />, content: 'Adapt to the changes due to COVID-19 restrictions, recruitment was 100% online.' },
        { icon: <FontAwesomeIcon icon={faCheck} />, content: 'Company procured 100% vaccine shots for employees sooner than anyone else.' },
        { icon: <FontAwesomeIcon icon={faCheck} />, content: 'Provided Support to the community for Medical equipment, Food and Medicine in our fight with COVID-19.' },

    ]
    return (
        <>
            <div className={home.content}>
                <WorkFromHomeBanner />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={wfh.wfhContent}>
                                <h5>FIRST VIRTUE'S WORK FROM HOME IS A GREAT WAY FOR YOU TO EARN EXTRA INCOME</h5>
                                {
                                    wfhList.map((wfhItem, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="row">
                                                    <div className={`${wfh.iconWfh} ${"col-lg-1 col-sm-1 col-xs-1"}`}>
                                                        <i>
                                                            {wfhItem.icon}
                                                        </i>
                                                    </div>
                                                    <div className="col-md-11 col-sm-11 col-xs-11">
                                                        <p>
                                                            {wfhItem.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={wfh.wfhContent}>
                                <h5>COVID-19 - GLOBAL PANDEMIC - HOW DID OUR TEAM SURVIVE?</h5>
                                {
                                    covidList.map((covidItem, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="row">
                                                    <div className={`${wfh.iconWfh} ${"col-lg-1 col-sm-1 col-xs-1"}`}>
                                                        <i>
                                                            {covidItem.icon}
                                                        </i>
                                                    </div>
                                                    <div className="col-md-11 col-sm-11 col-xs-11">
                                                        <p>
                                                            {covidItem.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={wfh.wfhContent}>
                                <h5>APPLY YOUR CV TO OUR HR FOR A PROJECT SUITABLE FOR YOU</h5>
                                <button className={wfh.btnapply} type="button">
                                    <a href="https://forms.gle/61BoPx74zQTUhxRH6" target="_blank" rel="noopener noreferrer">Apply Now</a>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={wfh.imgWfh}>
                                <img src={MerryChrismateZoomImg} alt="MerryChrismate Zoom" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkFromHome;