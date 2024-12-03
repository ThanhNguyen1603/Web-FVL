import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import outsourcingStyle from '../OutsourcingPage/outsourcing.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCommentDots, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import faqsStyle from './faqs.module.scss'

const Faqs = () => {
    const answerQuestionList = [
        {
            question: "I don't need to outsource because our business can manage our own processes.",
            answer: "Consider a new business paradigm. If you've never outsourced before, we'll help you identify and customize BPO solutions that allow you to focus on your core compentencies instead of managing processes. Contact us to request a proposal for services - and see what we mean."
        },
        {
            question: "I'm worried about the communication and cultural barriers.",
            answer: "Get to know our team. We're a unique BPO provider because our managers come from extensive management backgrounds in the US. From proposal to implementation to follow-up, you'll immediately notice the difference between FVL & TPL and other BPO providers."
        },
        {
            question: "I think transferring our business processes to an outside party will be too costly and difficult.",
            answer: "Experience seamless integration. Our knowledgeable and customer-oriented managers ensure ease of integration through superior communication and quality control. We're with you at every stage of the process to guarantee a smooth transition and superior follow-through."
        },
        {
            question: "I'm worried about reliability and accuracy.",
            answer: "Track on-time and accurate results through daily project reports. And, contact our managers any time you have a question or suggestion. With FVL & TPL, you'll gain a dedicated team with specialized knowledge of your requirements - and managers who conduct continuous quality control to ensure performance improvements."
        },
        {
            question: "My business is too small for outsourcing.",
            answer: "Read about our customized and flexible BPO solutions. We've worked with all sizes of businesses, from entrepreneurs and small enterprises to $10+ million medium-sized firms."
        },
    ]
    return (
        <>  <div className="container-fluid">
            <div className={faqsStyle.wrapper}>

                <div className={`${faqsStyle.title} ${faqsStyle.titleContent}`}>
                    <h2>FAQs: Have More Queries?</h2>
                </div>
                <div className={faqsStyle.faqs}>
                    {
                        answerQuestionList.map((aqItem, index) => {
                            return (
                                <div key={index}>
                                    <div className={faqsStyle.question}>
                                        <div className="row">
                                            <div className="col-md-6 d-flex">
                                                <div className={faqsStyle.contFaqs}>
                                                    <i><FontAwesomeIcon icon={faCircleQuestion} /></i>
                                                    <p>{aqItem.question}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6"></div>
                                        </div>
                                    </div>
                                    <div className={faqsStyle.answer}>
                                        <div className="row">
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6 d-flex">
                                                <div className={faqsStyle.contFaqs}>
                                                    <i><FontAwesomeIcon icon={faCommentDots} /></i>
                                                    <p>{aqItem.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Faqs;