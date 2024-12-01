import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import CaseStudiesStyle from './casestudies.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCartShopping, faFolderOpen, faChartSimple } from '@fortawesome/free-solid-svg-icons'

const CaseStudies = () => {
    const caseList = [
        { icon: faDesktop, title: "Data Entry:", content: "How FVL & TPL helped a U.S.-based internet advertising firm strengthen data entry operations to accommodate a business expansion.", },
        { icon: faFolderOpen, title: "Document Coding and Research:", content: "How FVL & TPL helped an industry specific consulting company execute a successful changover plan and expand to new markets by outsourcing non-core tasks.", },
        { icon: faChartSimple, title: "Lead Generation:", content: "How FVL & TPL helped an industry leader of specialty education and content solutions streamline contact database management and lead generation.", },
        { icon: faCartShopping, title: "e-Commerce Auction:", content: "How FVL & TPL helped an online merchant prepare for increased volume during the holiday season.", },
    ]
    return (
        <>
            <div className={`${CaseStudiesStyle.title} ${CaseStudiesStyle.titleContent}`}>
                <h2>Case Studies</h2>
            </div>
            <div className="container">
                {
                    caseList.map((caseItem, index) => {
                        return (
                            <div className={`${CaseStudiesStyle.content} ${"row"}`} key={index}>
                                <div className="col-md-1">
                                    <i><FontAwesomeIcon icon={caseItem.icon} /></i>
                                </div>
                                <div className="col-md-11">
                                    <div className={`${CaseStudiesStyle.subcontent}`}>
                                        <h6>{caseItem.title}</h6>
                                        <p>{caseItem.content}</p>
                                    </div>
                                    <button className={home.btnapply} type="button"><a>Read more</a></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CaseStudies