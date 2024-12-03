import wegiveStyle from "./wegive.module.scss"
import binhdinh1 from '../../Image/AboutUs/Our_Activities/WeGive/binhdinh_1.jpg';
import binhdinh2 from '../../Image/AboutUs/Our_Activities/WeGive/binhdinh_2.jpg';
import wegive4 from '../../Image/AboutUs/Our_Activities/WeGive/4.jpg';
import wegive3 from '../../Image/AboutUs/Our_Activities/WeGive/3.jpg';
import wegive6new from '../../Image/AboutUs/Our_Activities/WeGive/6_new.jpg';
import carouselContainer from "../CarouselContainer/carouselContainer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { WeGiveVideo } from "../EmbeddedGoogleDriveFile/DriveFilePage";
import { useSwipeable } from 'react-swipeable';
const WeGive = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ImagesWeGive = [
        { url: binhdinh1, nameImage: binhdinh1, title: 'binhdinh1' },
        { url: binhdinh2, nameImage: binhdinh2, title: 'binhdinh1' },
        { url: wegive4, nameImage: wegive4, title: 'wegive4' },
        { url: wegive3, nameImage: wegive3, title: 'wegive3' },
        { url: wegive6new, nameImage: wegive6new, title: 'wegive6new' },
    ]
    const getDisplayedItems = () => {
        const listLength = ImagesWeGive.length;

        // Kiểm tra kích thước màn hình để quyết định số lượng item
        const isMobile = window.innerWidth <= 768;

        const indices = isMobile
            ? [currentIndex % listLength] // Hiển thị 1 item trên mobile
            : [
                currentIndex % listLength,
                (currentIndex + 1) % listLength,
                (currentIndex + 2) % listLength,
            ]; // Hiển thị 3 item trên màn hình lớn

        return indices.map((i) => ImagesWeGive[i]);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : ImagesWeGive.length - 1));
        console.log(currentIndex)
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < ImagesWeGive.length - 1 ? prevIndex + 1 : 0));
        console.log(currentIndex)
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
            <div className="container-fluid">
                <div className={wegiveStyle.titleContent}>
                    <h2>Give Generously</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`${carouselContainer.carouselContainer}`} {...swipeHandlers}>
                            <div className="row">
                                {getDisplayedItems().map((OurAchwegiveItem, index) => (
                                    <div className={"col-lg-4"}>
                                        <img className={`d-block ${wegiveStyle.imageStyle}`} src={OurAchwegiveItem.url} alt={OurAchwegiveItem.title} />
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
                <div className="container embed-responsive embed-responsive-21by9">
                    <WeGiveVideo />
                </div>
            </div>
        </>
    )
}
export default WeGive;