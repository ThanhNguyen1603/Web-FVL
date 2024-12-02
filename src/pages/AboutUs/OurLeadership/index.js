import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BannerAboutUs from "../../../components/Banner/AboutUsBanner";
import home from '../../Home/home.module.scss';
import LeadershipStyle from './OurLeadership.module.scss'
import HueNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Hue Nguyen.jpg'
import JingHimImg from '../../../Image/AboutUs/Our_LeadershipTeam/Jing Him.jpg'
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
            jobTitle: 'Chief Executive Officer & Co-Founder',
            decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", decription2: "",
        },
        {
            url: JingHimImg,
            name: 'Jing Him',
            jobTitle: 'Chief Operating Officer',
            decription: 'Jing is the Operations Director of Transcend People and First Virtue Limited. She is a seasoned professional with 16 years of experience in the BPO industry, which includes extensive background on customer service and support,  implementation of ISO 27001, projects management and process improvements.Jing has a proven track record of leading multiple projects effectively showcasing strong leadership. Her dedication to continuous growth and teamwork defines her professional and personal pursuits.Outside of work, enjoys quality time with her family, reading books, and participating in sports like volleyball and badminton.', decription2: "",
        },
    ]
    const leadershipList = [

        // { url: ManiImg, name: 'Mani Chinna', jobTitle: 'Senior Operation Manager' },
        { url: HueNguyenImg, name: 'Hue Nguyen', jobTitle: 'Chief Finacial Officer', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", decription2: "", },
        { url: VinNguyenImg, name: 'Vin Nguyen', jobTitle: 'Chief Information Officer', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", decription2: "", },
        { url: TungDoImg, name: 'Tung Do', jobTitle: 'Operations Director', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", decription2: "", },
        { url: SenNguyenImg, name: 'Lianna Nguyen', jobTitle: 'HR Director', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", decription2: "", },

        { url: KhanhTruongImg, name: 'Khanh Truong', jobTitle: 'Senior Team Leader', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", decription2: "", },
        { url: PhuongTranImg, name: 'Phuong Tran', jobTitle: 'Senior Team Leader', decription: "Phuong Tran is the Senior Leader at First Virtue, bringing 10 years of experience. She has nurtured FV's positive culture, with notable achievements in onboarding FA projects. Phuong holds a BA in corporate finance from Customs Finance College in Ho Chi Minh City, Vietnam.", decription2: "In her free time, Phuong enjoys spending time with her kids, listening to music and reading stories.", },
        { url: TruongNguyenImg, name: 'Truong Nguyen', jobTitle: 'Senior Team Leader', decription: "Truong Nguyen is the Senior Leader at First Virtue, bringing 6 years of experience. He is an experienced professional in the field of Title Research and Data Entry, with skills in team management, tracking progress, and operating special projects. Truong holds a degree in engineering from Ho Chi Minh City University of Technology in Vietnam.", decription2: "In his free time, Truong enjoys taking care of and enjoying life with his family.", },
        { url: ChauNguyenImg, name: 'Chau Nguyen', jobTitle: 'Senior Team Leader', decription: "Chau Nguyen is the Senior Leader at First Virtue, bringing 5 years of experience. She has nurtured FV's positive culture, with notable achievements in onboarding FA projects. Chau holds a BA in the English Major from Saigon University in Ho Chi Minh City, Vietnam.", decription2: "In her free time, Chau enjoys playing video games and reading.", }
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
                                        <div key={index} className={`col-12 col-md-4`}>
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