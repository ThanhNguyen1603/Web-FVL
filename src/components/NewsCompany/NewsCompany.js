import newscompanyStyle from "./newscompany.module.scss";
import { useSwipeable } from 'react-swipeable';
import { useState } from "react";
import { contentEvents } from "../News";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import carouselContainerStyle from "../CarouselContainer/carouselContainer.module.scss"
import { NavLink } from "react-router-dom";
const NewsCompany = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const getDisplayedItems = () => {
        const listLength = contentEvents.length;

        // Kiểm tra kích thước màn hình để quyết định số lượng item
        const isMobile = window.innerWidth <= 768;

        const indices = isMobile
            ? [currentIndex % listLength] // Hiển thị 1 item trên mobile
            : [
                currentIndex % listLength,
                (currentIndex + 1) % listLength,
                (currentIndex + 2) % listLength,
            ]; // Hiển thị 3 item trên màn hình lớn

        return indices.map((i) => contentEvents[i]);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : contentEvents.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < contentEvents.length - 1 ? prevIndex + 1 : 0));
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
            <div className={newscompanyStyle.wrapper}>
                <div className="container-fluid text-center d-flex flex-column">
                    <div className={newscompanyStyle.titleContent}>
                        <h1>Life at First Virtue & Transcend People</h1>
                    </div>
                    <div className="row">
                        <div className={`${carouselContainerStyle.carouselContainer}`} {...swipeHandlers}>

                            <div className="row">
                                {getDisplayedItems().map((contentItem, index) => (
                                    <div key={index} className="col-lg-4">
                                        <a className={newscompanyStyle.contentItem} href={contentItem.link} target="_blank" rel="noopener noreferrer">
                                            <div className={newscompanyStyle.newItem}>
                                                <img src={contentItem.urlImage} alt={contentItem.alt} />
                                                <div className={newscompanyStyle.title}><h6>{contentItem.title}</h6></div>
                                                {
                                                    contentItem.content.map((item, index) => (
                                                        <p key={index}>{item}</p>
                                                    ))
                                                }
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <button onClick={handlePrev} className={`${carouselContainerStyle.prevButton}`}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button onClick={handleNext} className={`${carouselContainerStyle.nextButton}`}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default NewsCompany;