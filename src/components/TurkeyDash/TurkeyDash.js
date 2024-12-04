import turkeydashStyle from "./turkeydash.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import carouselContainer from "../CarouselContainer/carouselContainer.module.scss";
import image6 from '../../Image/TurkeyDash/1.jpg'
import image2 from '../../Image/TurkeyDash/turkey-dash-70-jpg-1510820448.jpg'
import image3 from "../../Image/TurkeyDash/BIL_3909.jpg";
import image4 from "../../Image/TurkeyDash/moitruong.net.vn-wp-content-uploads-2019-11-_quy-tu-thien-turkey-dash-2.png"
import image5 from "../../Image/TurkeyDash/turkey01-1573797942_750x0.jpg"
import image1 from "../../Image/TurkeyDash/turkeydash_HCMC_GOV_VN.jpg"

const TurkeyDash = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const turkeydashList = [{
        imgURL: image1,
    }, {
        imgURL: image2,
    }, {
        imgURL: image3,
    }, {
        imgURL: image4,
    },
    {
        imgURL: image5,
    }, {
        imgURL: image6,
    },]

    const getDisplayedItems = () => {
        const listLength = turkeydashList.length;

        // Kiểm tra kích thước màn hình để quyết định số lượng item
        const isMobile = window.innerWidth <= 768;

        const indices = isMobile
            ? [currentIndex % listLength] // Hiển thị 1 item trên mobile
            : [
                currentIndex % listLength,
                (currentIndex + 1) % listLength,
                (currentIndex + 2) % listLength,
            ]; // Hiển thị 3 item trên màn hình lớn

        return indices.map((i) => turkeydashList[i]);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : turkeydashList.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < turkeydashList.length - 1 ? prevIndex + 1 : 0));
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
            <div className={turkeydashStyle.wrapper}>
                <div className="container-fluid pt-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={turkeydashStyle.titleContent}>
                                <h1>Memories of Turkey Dash: Our Unforgettable Moments</h1>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className={`${carouselContainer.carouselContainer}`} {...swipeHandlers}>
                                <div className="row">
                                    {getDisplayedItems().map((turkeydashItem, index) => (
                                        <div key={index} className="col-lg-4">
                                            <div className={turkeydashStyle.contentItem}>
                                                <img className="d-block" src={turkeydashItem.imgURL} alt="url" />
                                            </div>
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
            </div >
        </>
    )

}

export default TurkeyDash;