import weworkStyle from "./wework.module.scss"
import d5166 from '../../Image/AboutUs/Our_Activities/WeWork/5d_116.jpg';
import wework1 from '../../Image/AboutUs/Our_Activities/WeWork/1.jpg';
import lekyketcty2 from '../../Image/AboutUs/Our_Activities/WeWork/le-ky-ket-cty-2.jpg';
import training from '../../Image/AboutUs/Our_Activities/WeWork/training.jpg';
import wework6 from '../../Image/AboutUs/Our_Activities/WeWork/6.jpg';
import carouselContainer from "../CarouselContainer/carouselContainer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { WeWorkVideo } from "../EmbeddedGoogleDriveFile/DriveFilePage";
import { useSwipeable } from 'react-swipeable';
const WeWork = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ImagesWeWork = [
        { url: d5166, nameImage: d5166, title: 'd5166' },
        { url: wework1, nameImage: wework1, title: 'We work image 1' },
        { url: lekyketcty2, nameImage: lekyketcty2, title: 'Le ky ket cong ty 2' },
        { url: training, nameImage: training, title: 'Training' },
        { url: wework6, nameImage: wework6, title: 'We Work 6' },
    ]
    const getDisplayedItems = () => {
        const listLength = ImagesWeWork.length;

        // Kiểm tra kích thước màn hình để quyết định số lượng item
        const isMobile = window.innerWidth <= 768;

        const indices = isMobile
            ? [currentIndex % listLength] // Hiển thị 1 item trên mobile
            : [
                currentIndex % listLength,
                (currentIndex + 1) % listLength,
                (currentIndex + 2) % listLength,
            ]; // Hiển thị 3 item trên màn hình lớn

        return indices.map((i) => ImagesWeWork[i]);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : ImagesWeWork.length - 1));
        console.log(currentIndex)
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < ImagesWeWork.length - 1 ? prevIndex + 1 : 0));
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
            <div className="container-fluid">
                <div className={weworkStyle.titleContent}>
                    <h2>Work Smart</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`${carouselContainer.carouselContainer}`} {...swipeHandlers}>
                            <div className="row">
                                {getDisplayedItems().map((OurAchweplayItem, index) => (
                                    <div className={"col-lg-4"}>
                                        <img className={`d-block ${weworkStyle.imageStyle}`} src={OurAchweplayItem.url} alt={OurAchweplayItem.title} />
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
                <div className={`container-fluid embed-responsive embed-responsive-16by9 d-block ${weworkStyle.embedResponsive}`}>
                    <WeWorkVideo />
                </div>

            </div>
        </>
    )
}
export default WeWork;