import { useLocation } from 'react-router-dom';
import { CareersList } from '../../../components/Careers';
import careerDetailStyle from "./careerDetails.module.scss"
import { NavLink } from 'react-router-dom';
const CareerDetails = () => {
    const location = useLocation();
    const { jobName } = location.state || {};
    const careerSelect = CareersList.find(c => c.jobName === jobName);

    return (
        <div className={careerDetailStyle.contentBackground}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className={careerDetailStyle.titleContent}>
                            <h2 >
                                {careerSelect.jobName}
                            </h2>
                            <p>{careerSelect.hashtag}</p>
                            <p>{careerSelect.address}</p>
                        </div>
                        <div className={careerDetailStyle.detailsContent}>
                            {
                                careerSelect.description.map((careerItem, index) => {
                                    return (
                                        <div key={index}>
                                            <h6>{index + 1}. {careerItem.title}</h6>
                                            {
                                                careerItem.content.map((contentItem, index) => <div key={index}><li>{contentItem}</li></div>)
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className='pt-5'>
                            <button className={`${careerDetailStyle.btnapply}`} type="button">
                                <NavLink to='/Careers'> Back </NavLink>
                            </button>
                            <button className={`${careerDetailStyle.btnapply}`} type="button">
                                <NavLink href="https://forms.gle/61BoPx74zQTUhxRH6" target="_blank" rel="noopener noreferrer"> Apply Now </NavLink>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CareerDetails;
