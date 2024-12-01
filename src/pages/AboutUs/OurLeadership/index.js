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
import VinNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Vin Nguyen2.jpg'
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
        { url: MichelleNgoImg, name: 'Michelle Ngo', jobTitle: 'CEO & Co-Founder', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { url: JingHimImg, name: 'Jing Him', jobTitle: 'Operations Director', decription: 'Jing is the Operations Director of Transcend People and First Virtue Limited. She is a seasoned professional with 16 years of experience in the BPO industry, which includes extensive background on customer service and support,  implementation of ISO 27001, projects management and process improvements.Jing has a proven track record of leading multiple projects effectively showcasing strong leadership. Her dedication to continuous growth and teamwork defines her professional and personal pursuits.Outside of work, enjoys quality time with her family, reading books, and participating in sports like volleyball and badminton.' },
    ]
    const leadershipList = [

        // { url: ManiImg, name: 'Mani Chinna', jobTitle: 'Senior Operation Manager' },
        { url: HueNguyenImg, name: 'Hue Nguyen', jobTitle: 'Admin Controller', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { url: VinNguyenImg, name: 'Vin Nguyen', jobTitle: 'IT Manager', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { url: TungDoImg, name: 'Tung Do', jobTitle: 'Operations Manager', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { url: SenNguyenImg, name: 'Lianna Nguyen', jobTitle: 'HR Manager', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },

        { url: KhanhTruongImg, name: 'Khanh Truong', jobTitle: 'Senior Team Leader', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { url: PhuongTranImg, name: 'Phuong Tran', jobTitle: 'Senior Team Leader', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { url: TruongNguyenImg, name: 'Truong Nguyen', jobTitle: 'Senior Team Leader', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { url: ChauNguyenImg, name: 'Chau Nguyen', jobTitle: 'Senior Team Leader', decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
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
            {/* <Header /> */}
            <div className={home.content} >
                {/* <BannerAboutUs /> */}
                < div className={`container-fluid`}>
                    {/* <Header /> */}
                    <div className={LeadershipStyle.AIbrainBackground}>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className={LeadershipStyle.bannerWhoWeAre}>Who We Are</div>
                                <p>We are the western-managed Business Process Outsourcing business based in Ho Chi Minh City, Vietnam</p>
                                <p>Transcend People LLC (TPL) since 2004 & First Virtue LLC (FVL) since 2013 offer long-term, flexible outsourcing solutions to a broad range of clients to help drive operational cost efficiency and business growth.</p>
                                <p>FVL & TPL combine in-depth understanding of our clients' businesses and expertise in business process outsourcing, we take on clients' challenges and develop innovative solutions to address them.</p>
                                <p>Through our commitment to ease of integration, transparent communication, and superior customer service, we help to free up their time and resources, enabling them to focus on what they do best.</p>
                            </div>
                            <div className="col-lg-5">
                                <img className={LeadershipStyle.AIbrain} src={AIbrain} alt="AI Brain" />
                            </div>
                        </div>
                    </div>

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