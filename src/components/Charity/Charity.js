import charityStyle from "./charity.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import carouselContainer from "../CarouselContainer/carouselContainer.module.scss";
import image1 from "../../Image/Charity/2.jpg"
import helppeople from "../../Image/Charity/HelpPeopleBinhDinh.jpg"
import yeuthuong from "../../Image/Charity/yeuthuonglachodi.jpg"
const Charity = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const newsBPOList = [
        {
            link: "https://www.facebook.com/FVLTPL/posts/1656452598039473",
            imgURL: image1,
            title: "TPL Nhan Thang & FVL Nhan Tri Company Accompanies Thien Nhan Association in Ho Chi Minh City",
            content: "The program has successfully completed its mission of sponsoring and assisting a struggling family with a solid home and a sturdy bridge, enabling people in remote areas to travel easily and ensuring children can safely attend school."
        },
        {
            link: "https://www.facebook.com/FVLTPL/posts/pfbid02cHNrmXZUeLxnW7wseguFjYELTwgduKnrEFZyVMSaqKxPEmdUyvnK6SeCNmkFuYy6l",
            imgURL: helppeople,
            title: "4 Day Charity Trip in Binh Dinh from August 11, 2022 - August 14, 2022",
            content: "We express our heartfelt gratitude and appreciation to Venerable Thich Dong Ngo - Abbot of Thien Hung Pagoda and Thien Hung Zen Monastery - Binh Dinh Province, along with the Buddhists of Thien Hung Pagoda, for creating connections and supporting us to successfully complete this meaningful charity trip..."
        },
        {
            link: "https://www.facebook.com/FVLTPL/posts/pfbid02tnbstPL71i26W7BQm1mnerw3SSzuqDBcnTgvEtwxCT3zryrNEr5rPSTsjsVj5rS6l",
            imgURL: yeuthuong,
            title: "LOVE GIVEN IS LOVE THAT LASTS FOREVER 💗",
            content: "Mid-July Lunar Month at Thien Hung Pagoda - Binh Dinh ❤️"
        },
    ]


    const getDisplayedItems = () => {
        const listLength = newsBPOList.length;

        // Kiểm tra kích thước màn hình để quyết định số lượng item
        const isMobile = window.innerWidth <= 768;

        const indices = isMobile
            ? [currentIndex % listLength] // Hiển thị 1 item trên mobile
            : [
                currentIndex % listLength,
                (currentIndex + 1) % listLength,
                (currentIndex + 2) % listLength,
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
            <div className={charityStyle.wrapper}>
                <div className="container-fluid pt-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={charityStyle.titleContent}>
                                <h1>Other Our Charity Events</h1>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className={`${carouselContainer.carouselContainer}`} {...swipeHandlers}>
                                <div className="row">
                                    {getDisplayedItems().map((charityItem, index) => (
                                        <div key={index} className="col-lg-4">
                                            <a className={charityStyle.contentItem} href={charityItem.link} target="_blank" rel="noopener noreferrer">
                                                <div className={charityStyle.newItem}>
                                                    <img src={charityItem.imgURL} alt={charityItem.alt} />
                                                    <div className={charityStyle.title}><h6>{charityItem.title}</h6></div>
                                                    <p>{charityItem.content}</p>
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

export default Charity;