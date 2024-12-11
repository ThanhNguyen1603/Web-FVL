import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import footer from './footer.module.scss'
import { Link, NavLink } from 'react-router-dom'
import turkeydash from '../../Image/Footer/turkeydash_result.webp'
import spotlightImage from '../../Image/AboutUs/Our_Achievements/FVL-ISO27001.webp'
import isoLogo from '../../Image/Footer/ISO27001.webp'
import bvLogo from '../../Image/Footer/Logo_Bureau_Veritas_result.webp'
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
const Footer = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <>
            <div className={footer.inforfooter} >
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-lg-5'>
                            <div className={footer.namesubject}>First Virtue LLC & Transcend People LLC</div>
                            <div className={footer.infodetail}><a href="https://maps.app.goo.gl/5rwZTfwYciDf5qSe8" target="_blank"><FontAwesomeIcon icon={faLocationDot} /> 78/2A Binh Loi, Ward 13, Binh Thanh District, HCMC, Vietnam.</a></div>
                            <div className={footer.infodetail}><FontAwesomeIcon icon={faPhoneVolume} className={footer.inforIcon} />VoIP: +1 (650) 472 2233 (USA)</div>
                            <div className={footer.infodetail}><FontAwesomeIcon icon={faPhone} className={footer.inforIcon} />Phone: +84 (28) 3948 4086 (Vietnam)</div>
                        </div>
                        <div className='col-lg-2'>
                            <div className={footer.namesubject}>Compliance</div>
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* viet ham onclick here */}
                                    <div className={`${footer.isoModal}`} onClick={handleShow}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={footer.isoLogo}>
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                            <img src={isoLogo} alt="ISO 27001" />
                                                        </div>
                                                        <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                                                            <img src={bvLogo} alt="BV" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className={`col-lg-12 ${footer.isoIEC}`}>
                                                <div>
                                                    <p>
                                                        ISO/IEC 27001:2013
                                                    </p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <Modal show={showModal} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>ISO 27001 Image</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <img src={spotlightImage} alt="ISO 27001 Image" className="img-fluid" />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>


                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className={footer.namesubject}>Connect with us</div>
                            <div className={footer.linkcompany}>
                                <a href="https://www.facebook.com/1stvirtue.company/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className={footer.inforIcon} />First Virtue Limited
                                </a>
                            </div>
                            <div className={footer.linkcompany}>
                                <a href="https://www.facebook.com/FVLTPL" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className={footer.inforIcon} />Transcend People Limited
                                </a>
                            </div>
                            <div className={footer.turkeyDashLink}><a href="https://www.facebook.com/turkeydashvietnam" target="_blank" rel="noopener noreferrer"><img src={turkeydash} alt="turkeydash" />Turkey Dash VietNam</a></div>
                        </div>
                        <div className='col-lg-3'>
                            <div className={footer.namesubject}>Our Careers</div>
                            <div className={footer.infodetail}>You can click button to apply your information for our jobs</div>
                            <button className={footer.btnapply} type="button">
                                <Link to='/careers' className={footer.linkApplyJob} >Apply Now</Link>
                            </button>
                        </div>


                    </div>
                </div>
                <div className='container-fluid'>
                    <div className={footer.copyRight}>
                        <span>First Virtue Limited Liability Company & Transcend People Limited Liability Company Copyright © 2008 - 2024 •</span><Link to='/PrivacyPolicy'><span>Privacy Policy</span></Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer