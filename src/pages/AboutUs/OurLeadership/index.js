import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BannerAboutUs from "../../../components/Banner/AboutUsBanner";
import home from '../../Home/home.module.scss';
import LeadershipStyle from './OurLeadership.module.scss'
import HueNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Hue Nguyen.jpg'
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
import Header from "../../../components/Header";

const OurLeadership = () => {
    const directorList = [
        {
            url: KenTran,
            name: 'Ken Tran',
            jobTitle: 'Deputy Adviser & Co-Founder',
            decription: [
                "After completing his MBA and spending 12 years working in the US, Ken Tran returned to Vietnam in 1995 to start his entrepreneurial journey. He has founded seven companies and remains actively involved in three of them. He was instrumental in establishing TIGER Drylac Vietnam, dedicating 23 years of service. Currently, he focuses on his role as Deputy Adviser at FVL & TPL companies and on training Leadership courses.",
                "Ken has successfully organized numerous Leadership courses in various countries, including Vietnam, Thailand, Austria, the US, Canada, and Brazil. He finds joy and motivation in the development and success of the younger generation.",
                "In his free time, Ken enjoys cycling and paddleboarding."
            ],
        },
        {
            url: MichelleNgoImg,
            name: 'Michelle Ngo',
            jobTitle: 'CEO & Co-Founder',
            decription: [
                "Michelle Ngo is the CEO & Co-Founder of Transcend People LLC (2004) and First Virtue LLC (2013), pioneering BPO in Vietnam. An alumnus of the University of Houston with a degree in Information Technology and Business Administration, she previously worked as a Software Engineer and Financial Programming Project Manager for Dynegy - Natural Gas Clearinghouse and Enbridge Energy, Inc in the US.",
                "Michelle also founded the fashion brand Ma Belle in 2002, earning the title of Houston City’s Leading Stylist. As a philanthropist, she established Turkey Dash Vietnam, raising funds for surgeries for children with cleft palate, helping over 1,170 children from 2013 to 2018 and donating over 5 billion VND in 2019.",
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
            decription: ["Jing Lim is the COO of Transcend People and First Virtue LLC. She is a seasoned professional with 16 years of experience in the BPO industry, which includes extensive background on customer service and support,  implementation of ISO 27001, projects management and process improvements. Jing has a proven track record of leading multiple projects effectively showcasing strong leadership. Her dedication to continuous growth and teamwork defines her professional and personal pursuits.",
                "Outside of work, Jing enjoys quality time with her family, reading books, and participating in sports like volleyball and badminton."],
        },
        {
            url: HueNguyenImg, name: 'Hue Nguyen', jobTitle: 'CFO', decription: ["Hue Nguyen is an accomplished CFO with over 10 years of experience in financial leadership at FVL & TPL. Her expertise in financial strategy, budgeting, forecasting, and cost management drives our company’s profitability and business growth. She is a strong communicator and a strategic thinker, and her insights are instrumental to our senior leadership in making informed decisions. Her strategic vision and ability to implement innovative financial solutions have been key to the success of numerous projects.",
                "In her free time, Hue enjoys reading books and exploring new dishes to cook."],
        },
        {
            url: VinNguyenImg, name: 'Vin Nguyen', jobTitle: 'CIO', decription: ["With over 15 years of experience in IT Service Management (ITSM), Vin Nguyen brings a wealth of knowledge and expertise to the table. He holds certifications in ITIL, ISO 27001, and has been a MCSE with a specialization in Security since 2010. These credentials underscore his commitment to best practices and information security. At FVL & TPL, his focus is on driving digital transformation, aligning IT strategy with business objectives, and leading high-performing teams to deliver impactful solutions. Passionate about leveraging emerging technologies, he is dedicated to fostering a culture of continuous improvement and excellence.",
                "In his free time, Vin enjoys walking, running, and listening to music."]
        },
        {
            url: TungDoImg, name: 'Theodore Do', jobTitle: 'Operations Director', decription: ["Theodore Do is a results-driven executive with over 10 years of experience in the BPO industry. He has a proven track record of leading cross-functional teams and overseeing large-scale projects from inception to completion. His expertise lies in optimizing operational efficiency, and ensuring the highest standards of service delivery. Throughout his career at FVL & TPL, Theodore has demonstrated exceptional leadership skills, guiding his teams to achieve outstanding performance and exceed client expectations.",
                "In his free time, Theodore enjoys watching movies and listening to music, which helps him unwind and stay inspired."]
        },
        {
            url: SenNguyenImg, name: 'Lianna Nguyen', jobTitle: 'HR Director', decription: ["With 16 years of experience, Lianna Nguyen has been instrumental in driving the success of TPL and FVL. As an HR Manager, she excels in fostering a positive work culture, streamlining HR processes, and providing invaluable support to our leadership team with her extensive expertise.",
                "Outside of her professional role, Lianna cherishes spending quality time with her family and finds immense joy in gardening while listening to her favorite music. Her dedication to creating a balanced life not only enhances her personal well-being but also makes her an inspiring leader both at work and at home."]
        },

        {
            url: PhuongTranImg, name: 'Christa Tran', jobTitle: 'Senior Operations Manager', decription: ["Christa Tran is an Senior Operations Manager at Transcend People & First Virtue, with a decade of experience driving the company’s success. She has played a key role in fostering FV's positive culture and has made significant contributions on completing data and research projects. Christa earned her Bachelor’s degree in Corporate Finance from Customs Finance College in Ho Chi Minh City, Vietnam.",
                "Outside of work, Christa enjoys quality time with her children, listening to music, and reading stories.",]
        },
        { url: TruongNguyenImg, name: 'Steven Nguyen', jobTitle: 'Operations Manager ', decription: ["Steven Nguyen is an Operations Manager at First Virtue, bringing 6 years of experience to the role. He is skilled in Title Research and Data Entry, with expertise in team management, progress tracking, and overseeing special projects. Steven Nguyen holds a degree in Engineering from Ho Chi Minh City University of Technology in Vietnam.", "In his free time, Steven enjoys spending quality time with his family and embracing life’s moments.",] },
        { url: ChauNguyenImg, name: 'Chloe Nguyen', jobTitle: 'Operations Manager ', decription: ["Chloe Nguyen is an Operations Manager at First Virtue, bringing 5 years of experience.  She specializes in employee training and development but also boasts success records in completing multiple projects with tight deadlines. Her proficiency in English is notable, having earned her degree in English Major from Saigon University in Ho Chi Minh City, Vietnam.", "In her free time, Chloe enjoys playing video games and reading.",] },
        { url: KhanhTruongImg, name: 'Henry Truong', jobTitle: 'Operations Manager ', decription: ["Henry Truong is an Operations Manager at First Virtue.  His experience of four years was shaped out of his willingness and readiness and paved the way for the many process improvements our team has successfully implemented over the years. Known for his strong leadership, he excels at team management and progress tracking.", "With an engineering degree from Thu Duc College in Vietnam, Henry combines technical knowledge with a results-driven approach to his work. He enjoys music, cinema, and cooking outside of his professional life.",] },
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
                                <div className={`${LeadershipStyle.carouselContainer}`}>
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