import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BannerAboutUs from "../../../components/Banner/AboutUsBanner";
import home from '../../Home/home.module.scss';
import LeadershipStyle from './OurLeadership.module.scss'
import HueNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/'
import JingHimImg from '../../../Image/AboutUs/Our_LeadershipTeam/Jing Him.jpg'
import KenTran from "../../../Image/AboutUs/Our_LeadershipTeam/Anh Ken.jpg"
import MichelleNgoImg from '../../../Image/AboutUs/Our_LeadershipTeam/Michelle Ngo.jpg'
import SenNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Sen Nguyen.jpg'
import TungDoImg from '../../../Image/AboutUs/Our_LeadershipTeam/Tung Do.jpg'
import VinNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Vin Nguyen.jpg'
import KhanhTruongImg from '../../../Image/AboutUs/Our_LeadershipTeam/KhanhTruong.jpg'
import PhuongTranImg from '../../../Image/AboutUs/Our_LeadershipTeam/PhuongTran.jpg'
import ChauNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/ChauNguyen.jpg'
import TruongNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Truong Nguyen.jpg'
import AIbrain from "../../../Image/Banner/Ai-brain-hallucinate-1024x683.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useSwipeable } from 'react-swipeable';
import Header from "../../../components/Header";

const OurLeadership = () => {
    const directorList = [
        {
            url: KenTran,
            name: 'Ken Tran',
            jobTitle: 'Deputy Adviser & Co-Founder',
            decription: [
                "After completing his MBA and spending 12 years working in the US, Ken Tran returned to Vietnam in 1995 to start his entrepreneurial journey. He has founded seven companies and remains actively involved in three of them. He was instrumental in establishing TIGER Drylac Vietnam, dedicating 23 years of service. Currently, he focuses on his role as Deputy Adviser at FVL & TPL companies and on training Leadership courses.",
                "In his free time, Ken enjoys cycling and paddleboarding."
            ],
        },
        {
            url: MichelleNgoImg,
            name: 'Michelle Ngo',
            jobTitle: 'CEO & Co-Founder',
            decription: [
                "Michelle Ngo is the CEO & Co-Founder of Transcend People LLC (2004) and First Virtue LLC (2013), pioneering BPO in Vietnam. An alumnus of the University of Houston with a degree in Information Technology and Business Administration, she previously worked as a Software Engineer and Financial Programming Project Manager for Dynegy - Natural Gas Clearinghouse and Enbridge Energy, Inc in the US.",
                "In her free time, Michelle loves spending quality moments with her family and enjoys staying active through running and walking."
            ],
        },

    ]
    const leadershipList = [

        // { url: ManiImg, name: 'Mani Chinna', jobTitle: 'Senior Operation Manager' },
        {
            url: JingHimImg,
            name: 'Jing Lim',
            jobTitle: 'COO',
            decription: ["Jing Lim is the COO of Transcend People and First Virtue LLC. She is a seasoned professional with 16 years of experience in the BPO industry, which includes extensive background on customer service and support,  implementation of ISO 27001, projects management and process improvements.",
                "Outside of work, Jing enjoys quality time with her family, reading books, and participating in sports like volleyball and badminton."],
        },
        {
            url: HueNguyenImg, name: 'LiLy Nguyen', jobTitle: 'CFO', decription: ["LiLy Nguyen is an accomplished CFO with over 10 years of experience in financial leadership at FVL & TPL. Her expertise in financial strategy, budgeting, forecasting, and cost management drives our company’s profitability and business growth.",
                "In her free time, LiLy enjoys reading books and exploring new dishes to cook."],
        },
        {
            url: VinNguyenImg, name: 'Vin Nguyen', jobTitle: 'CIO', decription: ["With over 15 years of experience in IT Service Management (ITSM) and certifications such as ITIL, ISO 27001, and MCSE Security, Vin Nguyen brings a wealth of knowledge and expertise to best practices and information security in his role as CIO at FVL & TPL.",
                "In his free time, Vin enjoys walking, running, and listening to music."]
        },
        {
            url: TungDoImg, name: 'Theodore Do', jobTitle: 'Operations Director', decription: ["Theodore Do is a results-driven executive with over 10 years of experience in leadership at FVL & TPL. He has a proven track record of leading cross-functional teams and overseeing large-scale projects from inception to completion.",
                "In his free time, Theodore enjoys watching movies and listening to music, which helps him unwind and stay inspired."]
        },
        {
            url: SenNguyenImg, name: 'Lianna Nguyen', jobTitle: 'HR Director', decription: ["With 16 years of experience, Lianna Nguyen has been instrumental in driving the success of TPL and FVL. As an HR Manager, she excels in fostering a positive work culture, streamlining HR processes, and providing invaluable support to our leadership team with her extensive expertise.",
                "In her free time, she loves to spend time with her family and enjoying music while gardening."]
        },

        {
            url: PhuongTranImg, name: 'Christa Tran', jobTitle: 'Senior Operations Manager', decription: ["Christa Tran is an Senior Operations Manager at FVL & TPL, with a decade of experience driving the company’s success. She has played a key role in fostering FV's positive culture and has made significant contributions on completing data and research projects.",
                "Outside of work, Christa enjoys quality time with her children, listening to music, and reading stories.",]
        },
        { url: TruongNguyenImg, name: 'Steven Nguyen', jobTitle: 'Operations Manager ', decription: ["Steven Nguyen is an Operations Manager at First Virtue, bringing 6 years of experience to the role. He is skilled in Title Research and Data Entry, with expertise in team management, progress tracking, and overseeing special projects.", "In his free time, Steven enjoys spending quality time with his family and embracing life’s moments.",] },
        { url: ChauNguyenImg, name: 'Chloe Nguyen', jobTitle: 'Operations Manager ', decription: ["Chloe Nguyen is an Operations Manager at First Virtue, bringing 5 years of experience.  She specializes in employee training and development but also boasts success records in completing multiple projects with tight deadlines.", "In her free time, Chloe enjoys playing video games and reading.",] },
        { url: KhanhTruongImg, name: 'Henry Truong', jobTitle: 'Operations Manager ', decription: ["Henry Truong is an Operations Manager at First Virtue.  His experience of 4 years was shaped out of his willingness and readiness and paved the way for the many process improvements our team has successfully implemented over the years.", "In his free time, Henry enjoys music, cinema, and cooking outside of his professional life.",] },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const getDisplayedItems = () => {
        const listLength = leadershipList.length;

        // Kiểm tra kích thước màn hình để quyết định số lượng item
        const isMobile = window.innerWidth <= 768;

        const indices = isMobile
            ? [currentIndex % listLength] // Hiển thị 1 item trên mobile
            : [
                currentIndex % listLength,
                (currentIndex + 1) % listLength,
                (currentIndex + 2) % listLength,
                (currentIndex + 3) % listLength,
            ]; // Hiển thị 3 item trên màn hình lớn

        return indices.map((i) => leadershipList[i]);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : leadershipList.length - 1));
        console.log(currentIndex)
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < leadershipList.length - 1 ? prevIndex + 1 : 0));
        console.log(currentIndex)
    };
    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext, // Lướt trái chuyển tới mục tiếp theo
        onSwipedRight: handlePrev, // Lướt phải chuyển tới mục trước đó
        preventDefaultTouchmoveEvent: false, // Không chặn sự kiện cuộn dọc
        trackMouse: true, // Hỗ trợ chuột
        delta: 10, // Ngưỡng vuốt (độ nhạy)
    });
    return (
        <>
            <div className={LeadershipStyle.content} >

                < div className={`container-fluid`}>
                    <div className={LeadershipStyle.backgroundcontent}>
                        <div className="row">
                            <div className={LeadershipStyle.contLead}>
                                <div className={LeadershipStyle.titleContent}>
                                    <div className={`${LeadershipStyle.OurLeaders}`}>Our Leaders</div>
                                </div>

                                <div className="row justify-content-center">
                                    {directorList.map((directorItem, index) => (
                                        <div key={index} className={`col-12 col-md-3`}>
                                            <div key={index} className={`${LeadershipStyle.ceo}`}>
                                                <img src={directorItem.url} alt={directorItem.name} className="img-fluid" />
                                                <h5 className={LeadershipStyle.name}>{directorItem.name}</h5>
                                                <h4 className={LeadershipStyle.jobTitle}>{directorItem.jobTitle}</h4>
                                                {directorItem.decription.map((decriptionItem, index) => (
                                                    <p className={LeadershipStyle.jobTitle}>{decriptionItem}</p>
                                                ))}


                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={`${LeadershipStyle.carouselContainer}`} {...swipeHandlers}>

                                    <div className="align-items-center position-relative">
                                        <div className="row justify-content-center">
                                            {getDisplayedItems().map((leadershipListItem, index) => (
                                                <div key={index} className={`col-12 col-md-4 col-lg-3 text-center`}>
                                                    <div className={`${LeadershipStyle.itemLead}`}>
                                                        <img src={leadershipListItem.url} alt={leadershipListItem.name} className="img-fluid" />
                                                        <h5 className={LeadershipStyle.name}>{leadershipListItem.name}</h5>
                                                        <h4 className={LeadershipStyle.jobTitle}>{leadershipListItem.jobTitle}</h4>
                                                        {leadershipListItem.decription.map((decriptionItem, index) => (
                                                            <p className={LeadershipStyle.jobTitle}>{decriptionItem}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <button onClick={handlePrev} className={`${LeadershipStyle.prevButton}`}>
                                            <FontAwesomeIcon icon={faArrowLeft} />
                                        </button>
                                        <button onClick={handleNext} className={`${LeadershipStyle.nextButton}`}>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurLeadership;