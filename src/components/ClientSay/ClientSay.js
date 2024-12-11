import clientSayStyle from './clientsay.module.scss'
import FAlogo from '../../Image/Home/FA-Logo.webp';
import AccessNurses from '../../Image/Home/AccessNurses.webp'
import logoBuilderdepot from "../../Image/AboutUs/Our_Customers/logo_client_builderdepot.webp"
import logoDebnroo from "../../Image/AboutUs/Our_Customers/logo_client_debnroo.webp"
import logoerei from "../../Image/AboutUs/Our_Customers/logo_client_erei.webp"
import logoSfile from "../../Image/AboutUs/Our_Customers/logo_client_sfile.webp"
import logoTherabreath from "../../Image/AboutUs/Our_Customers/logo_client_therabreath.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import InternationalPartnerSpotlightFVL from "../../Image/Home/International-partner-spotlight-First-Virtue.webp";
import FirstAmericanThankyouPartner from "../../Image/Home/First-American-thank-you-partner.webp";
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const ClientSay = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const OurCustomersSayList = [
        {
            content: "We are building relationships with the First Virtue team through training sessions, conference calls and emails. Their continuous professionalism and high quality standards have prompted the inclusion of additional counties to their range of knowledge.",
            author: "Cathy Bremer, DBS International Operations",
            urlImage: FAlogo,
        },
        {
            content: "By utilizing First Virtue & Transcend People, we were able to scale portions of our business much faster than if we were to have attempted the support work on our own. The First Virtue & Transcend People team provides efficient, consistent, and high-quality work. No matter what project we have thrown at them, the deliverable has always met the highest standards and results were produced in an exceedingly timely manner.",
            author: "Collin J. Tyler, Corporate Development Access Nurses, Inc.",
            urlImage: AccessNurses,
        },
        {
            content: "As much as our data processing work requires a fair degree of analysis beyond rudimentary data processing and is document intensive, we are pleased that your highly educated team could manage the high level analytics required of them in comprehending, summarizing, and categorizing the data that they had to process. Together, we are delivering quality professional legal services while facilitating the demanding needs of our clients and economic value on a global scale.",
            author: "Frank D. Perez, President and CEO Sfile LLC",
            urlImage: logoSfile,
        },
        {
            content: "The work that your team is working on for us is not an easy task. They were able to overcome the many challenges of comprehending the commercial real estate industry and read through hundreds of commercial real estate articles published worldwide and still deliver high quality data each and every time. Their determination, hard-work and research skills have shined through the quality of their work.",
            author: "Institutional Real Estate, Inc.",
            urlImage: logoerei,
        },
        {
            content: "At first thought, it seems sort of strange to mail all our inbound printed leads to Vietnam, but it has turned out to be a HUGE benefit! Honestly, data entry is something that I don't even think about anymore, it just happens automatically, and that is a sure sign that you are doing something right!",
            author: "Mark Fiala, VP Operations Therabreath",
            urlImage: logoTherabreath,
        },
        {
            content: "Interactions are friendly and professional, and we have access to those at FVL & TPL via Skype, AIM, email, and landline phone. We never have trouble reaching our partners at FVL & TPL, and they are available at hours convenient to us. But, the most important aspect of their services we value is their reliability. We can count on our tasks and projects to be completed on time, and for the results to be accurately checked for error.",
            author: "Andrew Mowery, Presidentdebnroo, inc.",
            urlImage: logoDebnroo,
        },
        {
            content: "BuilderDepot is an online retailer selling over 200,000 products. We needed additional help to manage the ever growing demands to update products, inventory, pricing, and images. We selected First Virtue LLC and Transcend People LLC as they offered us an excellent value, robust performance and professional work ethics.",
            author: "Zak Zacharia, President BuilderDepot, Inc.",
            urlImage: logoBuilderdepot,
        },
    ]

    const getDisplayedItems = () => {
        const listLength = OurCustomersSayList.length;

        // Kiểm tra kích thước màn hình để quyết định số lượng item
        const isMobile = window.innerWidth <= 768;

        const indices = isMobile
            ? [currentIndex % listLength] // Hiển thị 1 item trên mobile
            : [
                currentIndex % listLength,
                (currentIndex + 1) % listLength,
                (currentIndex + 2) % listLength,
            ]; // Hiển thị 3 item trên màn hình lớn

        return indices.map((i) => OurCustomersSayList[i]);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : OurCustomersSayList.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < OurCustomersSayList.length - 1 ? prevIndex + 1 : 0));
    };
    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext, // Lướt trái chuyển tới mục tiếp theo
        onSwipedRight: handlePrev, // Lướt phải chuyển tới mục trước đó
        preventDefaultTouchmoveEvent: false, // Không chặn sự kiện cuộn dọc
        trackMouse: true, // Hỗ trợ chuột
        delta: 10, // Ngưỡng vuốt (độ nhạy)// Hỗ trợ trên cả máy tính
    });

    return (
        <>
            <div className={clientSayStyle.clientSay}>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className={clientSayStyle.titleContent}>
                                <h1 className={clientSayStyle.titleclientSay}>
                                    Success Stories from our Clients:
                                </h1>
                                <h2>
                                    Having experienced the outstanding advantages of FVL and TPL, our clients have plenty of success stories to share. Here are some of their testimonials:
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-2'>

                        </div>
                        <div className='col-lg-4'>
                            <img className={clientSayStyle.spotlightImage} src={InternationalPartnerSpotlightFVL} alt='International-partner-spotlight-First-Virtue' />
                        </div>
                        <div className='col-lg-4'>
                            <img className={clientSayStyle.spotlightImage} src={FirstAmericanThankyouPartner} alt='First American thank you partner' />
                        </div>
                        <div className='col-lg-2'>

                        </div>
                    </div>
                    <div className="row">
                        <div className={`${clientSayStyle.carouselContainer}`} {...swipeHandlers}>

                            <div className="row">
                                {getDisplayedItems().map((clientSayItem, index) => (
                                    <div key={index} className="col-lg-4">
                                        <div className={clientSayStyle.detailClient}>
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className={clientSayStyle.imgClient}>
                                                        <img className="rounded mx-auto d-block" src={clientSayItem.urlImage} alt={clientSayItem.urlImage} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-9 d-flex align-items-center">
                                                    <div className={clientSayStyle.detailSay}>
                                                        <p>{clientSayItem.content}</p>
                                                        <h6 className={clientSayStyle.author}>{clientSayItem.author}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <button onClick={handlePrev} className={`${clientSayStyle.prevButton}`}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button onClick={handleNext} className={`${clientSayStyle.nextButton}`}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ClientSay;