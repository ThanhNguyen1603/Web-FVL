import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../Home/home.module.scss';
import wfh from '../WorkFromHome/WFH.module.scss';
import careerScss from '../Careers/careers.module.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import { CareersList } from '../../components/Careers';
import CareerBanner from '../../components/Banner/CareerBanner';
const Careers = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalID, setModalID] = useState(0);

    const openModal = (ID) => {
        setModalIsOpen(true);
        setModalID(ID);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }
    return (
        <>
            <CareerBanner />
            <div className={home.content}>
                <div className="container">
                    {
                        CareersList.map((career, index) => {
                            return (
                                <>
                                    <div className="row" key={index}>
                                        <div className={careerScss.detailCareer}>
                                            <div className="col-lg-3">
                                                <div className={careerScss.image}>{career.image}</div>
                                            </div>
                                            <div className="col-lg-9">
                                                <h5>{career.jobName}</h5>
                                                <div className="d-flex">
                                                    <i>{career.iconCalendar}</i>
                                                    <p>{career.datePublish}</p>
                                                </div>
                                                {
                                                    career.description.map((descItem, index) => {
                                                        return (
                                                            index === 0 && <div key={index} >
                                                                <div className="d-flex">
                                                                    <i>{career.icontitle}</i>
                                                                    <h6>{descItem.title}</h6>
                                                                </div>
                                                                {
                                                                    descItem.content.map((contentItem, index) => <div key={index}><li>{contentItem}</li></div>)
                                                                }

                                                            </div>
                                                        )
                                                    })
                                                }
                                                <button className={wfh.btnapply} type="button">
                                                    <a href="https://forms.gle/61BoPx74zQTUhxRH6" target="_blank" rel="noopener noreferrer">Apply Now</a>
                                                </button>
                                                <button className={wfh.btnapply} type="button" onClick={() => openModal(index)}>
                                                    Job Detail
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </>
                            )
                        })
                    }

                </div>
                <Modal isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel='MOdal Example'
                    style={
                        {
                            overlay: {
                                zIndex: 1020,
                            }
                        }
                    }

                >
                    <div className="container">
                        <div className={careerScss.modalDet}>
                            {
                                CareersList.map((career, index) => {
                                    return (
                                        index === modalID && <div>
                                            <div key={index}>
                                                <h4>{career.jobName}</h4>
                                                <div className="d-flex">
                                                    <i>{career.iconCalendar}</i>
                                                    <p>{career.datePublish}</p>
                                                </div>
                                                {
                                                    career.description.map((descItem, index) => {
                                                        return (
                                                            <div key={index} >
                                                                <div className="d-flex">
                                                                    <i>{career.icontitle}</i>
                                                                    <h5>{descItem.title}</h5>
                                                                </div>
                                                                {
                                                                    descItem.content.map((contentItem, index) =>
                                                                        <div key={index}>
                                                                            <div className="row">
                                                                                <li>
                                                                                    {contentItem}
                                                                                </li>
                                                                            </div>
                                                                        </div>)
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <button className={wfh.btnapply} type="button" onClick={closeModal}>
                                Close
                            </button>
                            <button className={wfh.btnapply} type="button">
                                <a href="https://forms.gle/61BoPx74zQTUhxRH6" target="_blank" rel="noopener noreferrer">Apply Now</a>
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Careers;