import weplayStyle from "./weplay.module.scss"
import weplay2 from '../../Image/AboutUs/Our_Activities/WePlay/2.jpg';
import weplay3 from '../../Image/AboutUs/Our_Activities/WePlay/3.jpg';
import hpbd1 from '../../Image/AboutUs/Our_Activities/WePlay/hbpd_1.jpg';
import congra1 from '../../Image/AboutUs/Our_Activities/WePlay/congra_1.jpg';
import hpbd2 from '../../Image/AboutUs/Our_Activities/WePlay/hpbd_2.jpg';
import carouselContainer from "../CarouselContainer/carouselContainer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { WePlayVideo } from "../EmbeddedGoogleDriveFile/DriveFilePage"
const WePlay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ImagesWePlay = [
        { url: weplay2, nameImage: weplay2, title: 'weplay2' },
        { url: weplay3, nameImage: weplay3, title: 'weplay2' },
        { url: hpbd1, nameImage: hpbd1, title: 'hpbd1' },
        { url: congra1, nameImage: congra1, title: 'congra1' },
        { url: hpbd2, nameImage: hpbd2, title: 'hpbd2' },
    ]
    const getDisplayedItems = () => {
        const listLength = ImagesWePlay.length;

        // Kiểm tra kích thước màn hình để quyết định số lượng item
        const isMobile = window.innerWidth <= 768;

        const indices = isMobile
            ? [currentIndex % listLength] // Hiển thị 1 item trên mobile
            : [
                currentIndex % listLength,
                (currentIndex + 1) % listLength,
                (currentIndex + 2) % listLength,
            ]; // Hiển thị 3 item trên màn hình lớn

        return indices.map((i) => ImagesWePlay[i]);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : ImagesWePlay.length - 1));
        console.log(currentIndex)
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < ImagesWePlay.length - 1 ? prevIndex + 1 : 0));
        console.log(currentIndex)
    };

    return (
        <>
            <div className="container-fluid">
                <div className={weplayStyle.titleContent}>
                    <h2>Play Hard</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`${carouselContainer.carouselContainer}`}>
                            <div className="row">
                                {getDisplayedItems().map((OurAchweplayItem, index) => (
                                    <div className={"col-lg-4"}>
                                        <img className={`d-block ${weplayStyle.imageStyle}`} src={OurAchweplayItem.url} alt={OurAchweplayItem.title} />
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
                    <WePlayVideo />
                </div>
            </div>
        </>
    )
}
export default WePlay;