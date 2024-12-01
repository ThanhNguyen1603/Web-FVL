import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import backtotopStyle from './backtotop.module.scss'
import { useState, useEffect } from 'react';
const BackToTop = () => {
    const [IsVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts.
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    const handleScroll = () => {
        // Check the user's scroll position and decide whether to show the button.
        if (window.pageYOffset > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
    return (
        <>
          {
             IsVisible  && (
                <button className={backtotopStyle.buttonStyle} onClick={scrollToTop}>
                <FontAwesomeIcon icon={faChevronUp} />
            </button>
             )
          }
        </> 
    )
}

export default BackToTop;