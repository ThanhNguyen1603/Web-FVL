import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChartLine, faIdCard, faGlobe, faCalculator, faAnglesRight, faGears } from '@fortawesome/free-solid-svg-icons'
import SolutionsStyle from "./solutionStyle.module.scss"
import AdvantageSolution from "../AdvantageSolution";
import FormSubmitSolutions from "../../../components/FormSubmitSolutions/FormSubmitSolutions";
const SolutionPage = () => {
    const serviceList = [
        {
            icon: faCartShopping, title: 'Data Services - Big Data:', content: ['Title Plant', 'Title Search', 'Data Abstracting', 'Data Indexing']
        },
        {
            icon: faGlobe, title: 'Web Services:', content: ['Content Management', 'Photo Editing', 'Order Processing', 'SEO - Digital Marketing']
        },
        {
            icon: faChartLine, title: 'E-Commerce:', content: ['Business Intelligence', 'Market Research', 'Lead Generation', 'List Management']
        },
        {
            icon: faCalculator, title: 'Accounting:', content: ['Book Keeping', 'Journal Entries', 'Billing and Invoicing', 'Freight Management']
        },
        {
            icon: faIdCard, title: 'Human Resources:', content: ['Recruitment Support', 'Candidate Sourcing', 'Human Resources Administration']
        },
    ]


    return (
        <>
            <div className="row">
                <div className="col-lg-9">
                    <div className={SolutionsStyle.content}>
                        <div className={`${SolutionsStyle.titleContent}`}>
                            <h2>What We Can Do For You</h2>
                        </div>
                        <div className="row">
                            {
                                serviceList.map((serviceItem, index) => {
                                    return (
                                        <div className={`${SolutionsStyle.colmd5ths} ${SolutionsStyle.colsm5ths}`} key={index}>
                                            <div className={`${SolutionsStyle.contentSolution}`}>
                                                {/* <div className={SolutionsStyle.iconSolut}>
            <div className={SolutionsStyle.soluContent}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={SolutionsStyle.content}>
                            <div className={`${SolutionsStyle.titleContent}`}>
                                <h2>What we can do for you</h2>
                            </div>
                            <div className="row">
                                {
                                    serviceList.map((serviceItem, index) => {
                                        return (
                                            <div className={`${SolutionsStyle.colmd5ths} ${SolutionsStyle.colsm5ths}`} key={index}>
                                                <div className={`${SolutionsStyle.contentSolution}`}>
                                                    {/* <div className={SolutionsStyle.iconSolut}>
>>>>>>> c79a8869a5b27bea72189f540e41e3aaa7bcdbc0
                                                <FontAwesomeIcon icon={serviceItem.icon} />

                                            </div> */}
                                                <h6 className={SolutionsStyle.contentTitle}>{serviceItem.title}</h6>
                                                <div className={SolutionsStyle.contentSub}>
                                                    {
                                                        serviceItem.content.map((subcontent, subindex) => {
                                                            return (
                                                                <p key={subindex}>
                                                                    {subcontent}
                                                                </p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <AdvantageSolution />
                    </div>
                </div>
            </div>

        </>
    )
}


export default SolutionPage
