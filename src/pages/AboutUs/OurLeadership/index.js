import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BannerAboutUs from "../../../components/Banner/AboutUsBanner";
import home from '../../Home/home.module.scss';
import LeadershipStyle from './OurLeadership.module.scss'
import HueNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Hue Nguyen.jpg'
import JingHimImg from '../../../Image/AboutUs/Our_LeadershipTeam/1.png'
import ManiImg from '../../../Image/AboutUs/Our_LeadershipTeam/Mani2.jpg'
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
            url: MichelleNgoImg,
            name: 'Michelle Ngo',
            jobTitle: 'CEO & Co-Founder',
            decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", decription2: "",
        },
        {
            url: JingHimImg,
            name: 'Jing Him',
            jobTitle: 'COO',
            decription: 'Jing is the Operations Director of Transcend People and First Virtue Limited. She is a seasoned professional with 16 years of experience in the BPO industry, which includes extensive background on customer service and support,  implementation of ISO 27001, projects management and process improvements. Jing has a proven track record of leading multiple projects effectively showcasing strong leadership. Her dedication to continuous growth and teamwork defines her professional and personal pursuits.Outside of work, enjoys quality time with her family, reading books, and participating in sports like volleyball and badminton.', decription2: "",
        },
    ]
    const leadershipList = [

        // { url: ManiImg, name: 'Mani Chinna', jobTitle: 'Senior Operation Manager' },
        { url: HueNguyenImg, name: 'Hue Nguyen', jobTitle: 'CFO', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", decription2: "", },
        { url: VinNguyenImg, name: 'Vin Nguyen', jobTitle: 'CIO', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", decription2: "", },
        { url: TungDoImg, name: 'Theodore Do', jobTitle: 'Operations Director', decription: "Theodore is a results driven executive bringing in 10 years of BPO experience. He has a proven track record of leading cross-funtional teams and overseeing large scale projects from inception to completion. ", decription2: "In his free time, he enjoys watching movies and listening to music.", },
        { url: SenNguyenImg, name: 'Lianna Nguyen', jobTitle: 'HR Director', decription: "Bringing in  16 years of experience, Lianna played a big role on both TPL and FVL operational success. As an HR Manager, her positive work culture is instrumental in achieving our business goals by streamlining our HR processes and supporting our leadership team.", decription2: "In her free time, she loves to spend time with her family and enjoying music while gardening.", },

        { url: PhuongTranImg, name: 'Christa Tran', jobTitle: 'Senior Operations Manager', decription: "Christa Tran is an Operations Manager at Transcend People & First Virtue, with a decade of experience driving the company’s success. She has played a key role in fostering FV's positive culture and has made significant contributions on completing data and research projects. Christa earned her Bachelor’s degree in Corporate Finance from Customs Finance College in Ho Chi Minh City, Vietnam.", decription2: "Outside of work, Christa enjoys quality time with her children, listening to music, and reading stories.", },
        { url: TruongNguyenImg, name: 'Steven Nguyen', jobTitle: 'Operations Manager ', decription: "Steven Nguyen is an Operations Manager at First Virtue, bringing 6 years of experience to the role. He is skilled in Title Research and Data Entry, with expertise in team management, progress tracking, and overseeing special projects. Truong holds a degree in Engineering from Ho Chi Minh City University of Technology in Vietnam.", decription2: "In his free time, Truong enjoys spending quality time with his family and embracing life’s moments.", },
        { url: ChauNguyenImg, name: 'Chloe Nguyen', jobTitle: 'Operations Manager ', decription: "Chloe Nguyen is an Operations Manager at First Virtue, bringing 5 years of experience.  She specializes in employee training and development but also boasts success records in completing multiple projects with tight deadlines. Her proficiency in English is notable, having earned her degree in English Major from Saigon University in Ho Chi Minh City, Vietnam.", decription2: "In her free time, Chloe enjoys playing video games and reading.", },
        { url: KhanhTruongImg, name: 'Henry Truong', jobTitle: 'Operations Manager ', decription: "Henry Truong is an Operations Manager at First Virtue.  His experience of four years was shaped out of his willingness and readiness and paved the way for the many process improvements our team has successfully implemented over the years. Known for his strong leadership, he excels at team management and progress tracking.", decription2: "With an engineering degree from Thu Duc College in Vietnam, Henry combines technical knowledge with a results-driven approach to his work. He enjoys music, cinema, and cooking outside of his professional life.", },
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
                                                <p className={LeadershipStyle.jobTitle}>{directorItem.decription}</p>
                                                <p className={LeadershipStyle.jobTitle}>{directorItem.decription2}</p>
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
                                                        <p className={LeadershipStyle.jobTitle}>{leadershipListItem.decription}</p>
                                                        <p className={LeadershipStyle.jobTitle}>{leadershipListItem.decription2}</p>
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