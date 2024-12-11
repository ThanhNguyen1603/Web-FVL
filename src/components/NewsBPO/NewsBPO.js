import newsbpoStyle from "./newsbpo.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import carouselContainer from "../CarouselContainer/carouselContainer.module.scss";
import newsBPO from "../../Image/Outsourcing/BPO-Global.webp"
const NewsBPO = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const newsBPOList = [{
        link: "https://vietnamnews.vn/economy/1654051/viet-nam-has-opportunities-to-attract-develop-the-offshoring-market.html",
        imgURL: newsBPO,
        title: "Việt Nam has opportunities to attract, develop the offshoring market",
        content: "Việt Nam is an attractive choice for businesses who are looking for outsource solutions, given its affordable workforce, highly skilled human resources and the constantly developing infrastructure of information technology and the telecommunications industry."
    }]

    const getDisplayedItems = () => {
        const listLength = newsBPOList.length;

        // Kiểm tra kích thước màn hình để quyết định số lượng item
        const isMobile = window.innerWidth <= 768;

        const indices = isMobile
            ? [currentIndex % listLength] // Hiển thị 1 item trên mobile
            : [
                currentIndex % listLength,
                // (currentIndex + 1) % listLength,
                // (currentIndex + 2) % listLength,
            ]; // Hiển thị 3 item trên màn hình lớn

        return indices.map((i) => newsBPOList[i]);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : newsBPOList.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < newsBPOList.length - 1 ? prevIndex + 1 : 0));
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
            <div className={newsbpoStyle.wrapper}>
                <div className="container-fluid pt-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={newsbpoStyle.titleContent}>
                                <h1>Vietnam BPO Insights: Navigating the Future</h1>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className={`${carouselContainer.carouselContainer}`} {...swipeHandlers}>
                                <div className="row">
                                    {getDisplayedItems().map((newsbpoItem, index) => (
                                        <div key={index} className="col-lg-4">
                                            <a className={newsbpoStyle.contentItem} href={newsbpoItem.link} target="_blank" rel="noopener noreferrer">
                                                <div className={newsbpoStyle.detailClient}>
                                                    <div className="row">
                                                        <img src={newsbpoItem.imgURL} alt="News BPO" />
                                                        <div className={newsbpoStyle.title}><h6>{newsbpoItem.title}</h6></div>

                                                        <p className={newsbpoStyle.content}>{newsbpoItem.content}</p>
                                                    </div>
                                                </div>
                                            </a>
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

export default NewsBPO;