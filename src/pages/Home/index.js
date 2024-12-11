import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from './home.module.scss';
import { NavLink } from 'react-router-dom';
import HomeBanner from "../../components/Banner/HomeBanner";
import image from "../../Image/Home/FVL-TPL-Background.webp";
import fast from "../../Image/../Image/Home/fast-icon.webp";
import effective from "../../Image/../Image/Home/effective-icon.webp";
import professional from "../../Image/../Image/Home/professional-icon.webp";
import bpoImage from "../../Image/Home/The-power-of-outsourcing.webp";
import ClientSay from "../../components/ClientSay/ClientSay";
import FormSubmit from "../../components/FormSubmit/FormSubmit";
import NewsCompany from "../../components/NewsCompany/NewsCompany";


const Home = () => {
    return (
        <>

            {/* <HomeBanner /> */}

            <div className={home.content}>
                {/* <Header /> */}
                <HomeBanner />
                <div className='container-fluid'>
                    <div className="col-lg-12">

                        <div className='row'>
                            <div className={`col-lg-12 ${home.bodycontent}`}>
                                <div className={`${home.titleContent}`}>
                                    <h1>Think Smart. Work Smarter. Count on Us.</h1>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-6">
                                        <div className={home.contentdetail}>
                                            <img className={home.imageBPO} src={bpoImage} alt="The power of outsourcing" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={home.contentdetail}>
                                            <div className="">
                                                {/* <div className={home.numberItem}>
                                            <div>01</div>
                                        </div> */}
                                                <div className={home.contentSub}>
                                                    <p>
                                                        Boost your business efficiency with our tailored outsourcing solutions. Save time, reduce costs, and eliminate inefficiencies, allowing you to focus on growth.
                                                        Outsourcing is no longer just an option - it's a smart strategy.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={home.contentdetail}>
                                            <div className="">
                                                <div className={home.contentSub}>
                                                    <p>
                                                        First Virtue & Transcend People offers a range of customized services to help businesses streamline operations and cut expenses.
                                                        We specialize in services like data entry, e-commerce support, document organization, market research, and more, all while ensuring integrity, innovation, and client satisfaction.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={home.contentdetail}>
                                            <div className="row">
                                                {/* <div className={home.numberItem}>
                                            <div>03</div>
                                        </div> */}
                                                <div className={home.contentSub}>
                                                    <p>
                                                        Learn how our BPO solutions can help take your business to the next level.
                                                    </p>
                                                </div>
                                                <button className={`${home.btnapply} pt-5`} type="button">
                                                    <NavLink to='/Solutions'>Learn More</NavLink>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className={home.experience}>
                    <div className="container-fluid text-center d-flex flex-column">
                        <div className={home.titleContent}>
                            <h1>
                                Delivering Excellence: Our Unique Advantage
                            </h1>
                        </div>
                        <div className={home.desktop}>
                            <div className="row">
                                <div className={`col-lg-6 ${home.bodycontent}`}>
                                    <div className={home.contentSub2}>
                                        <p>We are the dynamic company pioneering in the Global Outsourcing Industry, and have 20+ years of experience in BPO Services.</p>
                                        <div className="container-fluid">
                                            <div className='row'>
                                            </div>
                                        </div>
                                        <p>When you get in touch with us, you'll notice the difference immediately. At First Virtue & Transcend People, we provide professional, personalized, and responsive customer service. Our experienced executives ensure seamless integration and consistent, high-quality deliverables every step of the way.</p>
                                        <p>Get to know the dedicated professionals you'll be collaborating with, and you'll quickly see why we consistently outperform the competition.</p>
                                    </div>
                                    <div className={`${home.btnapply} ${home.btnapplyAdvantage} pt-4`}><NavLink to='/AboutUs/OurCompanies'>Explore Who We Are</NavLink></div>
                                </div>
                                <div className="col-lg-6">
                                    <img className={home.image} src={image} alt="Video FVL TPL" />
                                </div>
                            </div>
                        </div>
                        <div className={home.mobile}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className={home.image} src={image} alt="Video FVL TPL" />
                                </div>
                                <div className={`col-lg-6 ${home.bodycontent} pt-4`}>
                                    <div className={home.contentSub2}>
                                        <p>We are the dynamic company pioneering in the Global Outsourcing Industry, and have 20+ years of experience in BPO Services.</p>
                                        <div className="container-fluid">
                                            <div className='row'>
                                            </div>
                                        </div>
                                        <p>When you get in touch with us, you'll notice the difference immediately. At First Virtue & Transcend People, we provide professional, personalized, and responsive customer service. Our experienced executives ensure seamless integration and consistent, high-quality deliverables every step of the way.</p>
                                        <p>Get to know the dedicated professionals you'll be collaborating with, and you'll quickly see why we consistently outperform the competition.</p>
                                    </div>
                                    <div className={`${home.btnapply} ${home.btnapplyAdvantage} pt-4`}><NavLink to='/AboutUs/OurCompanies'>Explore Who We Are</NavLink></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={home.fepBackground}>
                    <div className="container">
                        <div className="row">
                            <div className={`col-lg-12 ${home.bodycontent} ${home.fepContent}`}>
                                <div className={home.titleContent}>
                                    <h1>Our Key Elements To Business Success:</h1>
                                </div>
                            </div>

                            <div className="col-lg-12 col-12">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <div className="d-flex flex-column align-items-center mb-3">
                                                <div className="col-lg-12 col-12 d-flex justify-content-center ">
                                                    <img className={`${home.imagefep} ${home.fast}`} src={fast} alt="Fast" />
                                                </div>
                                                <div className="col-lg-12 col-12">
                                                    <h2><span>F</span>ast</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <div className="d-flex flex-column align-items-center mb-3">
                                                <div className="col-lg-12 col-12 d-flex justify-content-center ">
                                                    <img className={home.imagefep} src={effective} alt="Effective" />
                                                </div>
                                                <div className="col-lg-12 col-12">
                                                    <h2><span>E</span>ffective</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <div className="d-flex flex-column align-items-center mb-3">
                                                <div className="col-lg-12 col-12 d-flex justify-content-center ">
                                                    <img className={home.imagefep} src={professional} alt="Professional" />
                                                </div>
                                                <div className="col-lg-12 col-12">
                                                    <h2><span>P</span>rofessional</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-3">
                            </div>
                        </div>
                    </div>
                </div>

                <ClientSay />
                <NewsCompany />
                <FormSubmit />

            </div>
        </>
    );
}

export default Home; 