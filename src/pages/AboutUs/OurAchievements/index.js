import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import OurAchieve from '../OurAchievements/OurAchievements.module.scss'
import fvliso27001 from '../../../Image/AboutUs/Our_Achievements/FVL-ISO27001.png';
import bangkhenthutuong from '../../../Image/AboutUs/Our_Achievements/Bằng khen Thủ Tướng.jpg'
import dichCovid from '../../../Image/AboutUs/Our_Achievements/Dịch COVID 2.jpg';
import thucamon from '../../../Image/AboutUs/Our_Achievements/ThuCamOn_2.jpg';
import KHCN from '../../../Image/AboutUs/Our_Achievements/KHCN.jpg';
import wethankyou from '../../../Image/AboutUs/Our_Achievements/WeThankYou.png';
import fvlcup1 from '../../../Image/AboutUs/Our_Achievements/FVL cup1.jpg';
import fvlcn2 from '../../../Image/AboutUs/Our_Achievements/FVL-CN2.png';
import ubndtphcm2018 from '../../../Image/AboutUs/Our_Achievements/UBND TP. HCM 2018.jpg';
import benhnhanngheo2015 from '../../../Image/AboutUs/Our_Achievements/UBND TP. HCM Bệnh nhân nghèo 2015.jpg';
import hinhcongnghe from '../../../Image/AboutUs/Our_Achievements/Hình công nghệ.jpg';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import carouselContainer from "../../../components/CarouselContainer/carouselContainer.module.scss"
const OurAchievements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { url: fvliso27001, nameImage: fvliso27001, title: 'ISO 27001' },
        { url: fvlcup1, nameImage: fvlcup1, title: 'Cup 01' },
        { url: wethankyou, nameImage: wethankyou, title: 'We thank you' },
        { url: thucamon, nameImage: thucamon, title: 'Thu Cam On' },
        { url: KHCN, nameImage: KHCN, title: 'Khoa hoc cong nghe' },
        { url: hinhcongnghe, nameImage: hinhcongnghe, title: 'Hinh cong nghe' },
        { url: benhnhanngheo2015, nameImage: benhnhanngheo2015, title: 'Benh nhan ngheo 2015' },
        { url: ubndtphcm2018, nameImage: ubndtphcm2018, title: 'Uy ban nhanh dan thanh pho HCM 2018' },
        { url: fvlcn2, nameImage: fvlcn2, title: 'FVL CN 02' },
        { url: bangkhenthutuong, nameImage: bangkhenthutuong, title: 'Bang khen thu tuong' },
        { url: dichCovid, nameImage: dichCovid, title: 'Dich Covid' },
    ]


    const getDisplayedItems = () => {
        const listLength = images.length;

        // Kiểm tra kích thước màn hình để quyết định số lượng item
        const isMobile = window.innerWidth <= 768;

        const indices = isMobile
            ? [currentIndex % listLength] // Hiển thị 1 item trên mobile
            : [
                currentIndex % listLength,
                (currentIndex + 1) % listLength,
                (currentIndex + 2) % listLength,
            ]; // Hiển thị 3 item trên màn hình lớn

        return indices.map((i) => images[i]);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
        console.log(currentIndex)
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
        console.log(currentIndex)
    };

    return (
        <>
            <div className={OurAchieve.content}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={OurAchieve.imgAchieve}>
                                <div className={home.titleContent}>
                                    <h2>Our Achievements</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`${carouselContainer.carouselContainer}`}>
                                            <div className="row">
                                                {getDisplayedItems().map((OurAchieveItem, index) => (
                                                    <div key={index} className={"col-lg-4 d-flex align-items-center"}>
                                                        <img className="d-block " src={OurAchieveItem.url} alt={OurAchieveItem.title} />
                                                    </div>
                                                ))}

                                            </div>
                                            <button onClick={handlePrev} className={`${carouselContainer.prevButton}`}>
                                                <FontAwesomeIcon icon={faArrowLeft} />
                                            </button>
                                            <button onClick={handleNext} className={`${carouselContainer.nextButton}`}>
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </button>
                                        </div>
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

export default OurAchievements;