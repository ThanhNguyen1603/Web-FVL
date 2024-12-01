import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import sbOurS from '../SidebarOutsourcing/SidebarOutsourcing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots,faLightbulb, faBars, faBook} from '@fortawesome/free-solid-svg-icons'
import solutionImage from  "../../Image/Solution/solution-vector-colored-banner_104589-69.jpg"
import { NavLink } from 'react-router-dom';
const sidebarSolution = () => {
    const navlist = [
        {to: '',  name: 'Solutions', icon: faLightbulb },
        {to: 'Advantage',  name: 'The FVL & TPL Advantage', icon: faArrowUpRightDots },
        {to: 'Portfolio',  name: 'Portfolio',icon : faBars },
        {to: 'CaseStudies',  name: 'Case Studies', icon: faLightbulb},
        {to: '/contact', name: 'Contact', icon: faBook}
    ]
    return (
        <>
            
            <div className={sbOurS.navOurS}>
                <div className={sbOurS.oursImg}>
                <img src={solutionImage} alt='Solution' />
                </div>
                <div className={sbOurS.oursLink}>
                    {
                        navlist.map((navItem, index) => {
                            return (
                                <div className="col-lg-12">
                                    <div className="row" key={index}>
                                    <div className={sbOurS.sidebarlink}>
                                            <div className="col">
                                                <NavLink to={navItem.to}><FontAwesomeIcon icon={navItem.icon} className={sbOurS.sidebarIcon} /> {navItem.name}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default sidebarSolution;