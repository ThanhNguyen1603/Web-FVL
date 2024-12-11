import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import OurAchieve from '../OurAchievements/OurAchievements.module.scss'
import bangkhenthutuong from '../../../Image/AboutUs/Our_Achievements/Bang-Khen-Thu-Tuong-chi-hoi-Thien-Nhan.webp'
import dichCovid from '../../../Image/AboutUs/Our_Achievements/Giay-khen-phong-chong-covid-19.webp';
import fvlcup1 from '../../../Image/AboutUs/Our_Achievements/Doanh-nhan-tieu-bieu-chi-cuc-thue.webp';
import fvliso27001 from '../../../Image/AboutUs/Our_Achievements/FVL-ISO27001.webp';
import FVLCUP2 from "../../../Image/AboutUs/Our_Achievements/Chi-cuc-thue-tuyen-duong-hoan-thanh-tot-nghia-vu-thue-nam-2016.webp";
import hinhcongnghe from '../../../Image/AboutUs/Our_Achievements/Vinh-danh-hiep-hoi-doanh-nghiep-khoa-hoc-cong-nghe-Viet-Nam.webp';
import KHCN from '../../../Image/AboutUs/Our_Achievements/Cau-lac-bo-doanh-nghiep-khoa-hoc-&-cong-nghe.webp';
import thucamon from '../../../Image/AboutUs/Our_Achievements/thu-cam-on-chong-dich-cua-quan-Binh-Thanh.webp';
import bangKhenThue from "../../../Image/AboutUs/Our_Achievements/Bang-khen-thuc-hien-tot-cong-tac-ke-khai-nop-thue-nam-2016.webp"
import ubndtphcm2018 from '../../../Image/AboutUs/Our_Achievements/Bang-khen-UBND-TP. HCM-2018-ho-tro-benh-nhan-ngheo.webp';
import benhnhanngheo2015 from '../../../Image/AboutUs/Our_Achievements/Bang-khen-UBND-TP. HCM-Benh-nhan-ngheo-2015.webp';
import fvlcn2 from '../../../Image/AboutUs/Our_Achievements/giay-khen-hoat-dong-tu-thien-nhan-dao.webp';
import KHCN2 from "../../../Image/AboutUs/Our_Achievements/Doanh-nghiep-khoa-hoc-va-cong-nghe.webp";
import wethankyou from '../../../Image/AboutUs/Our_Achievements/WeThankYou.webp';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import carouselContainer from "../../../components/CarouselContainer/carouselContainer.module.scss";
import { useSwipeable } from 'react-swipeable';
const OurAchievements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { url: fvliso27001, nameImage: fvliso27001, title: 'ISO 27001' },
        { url: KHCN2, nameImage: KHCN2, title: 'KHCN2' },
        { url: bangkhenthutuong, nameImage: bangkhenthutuong, title: 'Bang khen thu tuong' },
        { url: benhnhanngheo2015, nameImage: benhnhanngheo2015, title: 'Benh nhan ngheo 2015' },
        { url: ubndtphcm2018, nameImage: ubndtphcm2018, title: 'Uy ban nhanh dan thanh pho HCM 2018' },
        { url: KHCN, nameImage: KHCN, title: 'Khoa hoc cong nghe' },
        { url: hinhcongnghe, nameImage: hinhcongnghe, title: 'Hinh cong nghe' },
        { url: thucamon, nameImage: thucamon, title: 'Thu Cam On' },
        { url: fvlcn2, nameImage: fvlcn2, title: 'FVL CN 02' },
        { url: dichCovid, nameImage: dichCovid, title: 'Dich Covid' },
        { url: wethankyou, nameImage: wethankyou, title: 'We thank you' },
        { url: fvlcup1, nameImage: fvlcup1, title: 'Cup 01' },
        { url: FVLCUP2, nameImage: FVLCUP2, title: 'FVLCUP2' },
        { url: bangKhenThue, nameImage: bangKhenThue, title: 'bangKhenThue' },
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
    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext, // Lướt trái chuyển tới mục tiếp theo
        onSwipedRight: handlePrev, // Lướt phải chuyển tới mục trước đó
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Hỗ trợ trên cả máy tính
    });
    return (
        <>
            <div className={OurAchieve.content}>
                <div className="container-fluid pt-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={OurAchieve.imgAchieve}>
                                <div className={home.titleContent}>
                                    <h2>Our Achievements</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`${carouselContainer.carouselContainer}`}  {...swipeHandlers}>
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