import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChartLine, faIdCard, faGlobe, faCalculator, faAnglesRight, faGears } from '@fortawesome/free-solid-svg-icons'
import SolutionsStyle from "./solutionStyle.module.scss"
import AdvantageSolution from "../AdvantageSolution";
const SolutionPage = () => {
    const serviceList = [
        {
            icon: faCartShopping, title: 'Data Services:', content: ['Data Entry', 'Data Processing', 'Data Abstracting', 'Document Coding', 'List Management']
        },
        {
            icon: faChartLine, title: 'Sales and Marketing:', content: ['Lead Generation', 'Market Research', 'Business Intelligence']
        },
        {
            icon: faIdCard, title: 'Human Resources:', content: ['Recruitment Support', 'Candidate Sourcing', 'Human Resources Administration']
        },
        {
            icon: faGlobe, title: 'Web Services:', content: ['Content Management', 'Photo Editing', 'Order Processing', 'Search Engine Marketing (SEM)', 'Link Building']
        },
        {
            icon: faCalculator, title: 'Accounting:', content: ['Book Keeping', 'Journal Entries', 'Billing and Invoicing']
        },
    ]

    const stepList = [
        { content: ['Step 1: Project Proposal', 'Identify Objectives and Deliverables', 'Map Procedures and Metrics', 'Project Review and Education'] },
        { content: ['Step 2: Project Launch', 'Environmental Set-Up', 'Resource Allocation', 'Client-Team Training'] },
        { content: ['Step 3: Project Implementation', 'Service and Performance Monitoring', 'Quality Control', 'Time and Production Reporting'] },

    ]


    return (
        <>
            <div>

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
            </div>
            <div>
                <AdvantageSolution />
            </div>
        </>
    )
}


export default SolutionPage
