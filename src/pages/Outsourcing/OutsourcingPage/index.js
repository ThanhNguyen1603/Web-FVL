import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';

import outsourcingStyle from './outsourcing.module.scss'
import { faAnglesRight, faGears, faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const OutsourcingPage = () => {

    const functionList = [
        { content: ['Outsource Non-Core Functions', 'Reduce Management Burden of Day-to-Day Tasks', 'Reduce Costs Related to Labor and Operations', 'Reduce Process Inefficiencies'] },
        { content: ['Focus on Strategic Functions', 'Increase Capacity for Strategic Tasks', 'Focus Time and Resources on Customer Base', 'Improve Productivity and Quality'] },
        { content: ['Achieve Business Objectives', 'Increase Sales and Customer Satisfaction', 'Increase Revenues and Profit Margins', 'Achieve Stronger, More Flexible Market Position'] },
    ]

    return (
        <>
            <div className={`${outsourcingStyle.titleContent}`}>
                <h2>OUTSOURCING</h2>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                        <div className={`${outsourcingStyle.contOurS}`}>
                            <div className={`${"d-flex"} ${outsourcingStyle.contItem}`}>
                                <div className={outsourcingStyle.numberItem}>
                                    <h3>01</h3>
                                </div>
                                <div className={home.contentSub}>
                                    <p>
                                        Your business has many pressures. Staff recruitment and retention, costs related to labor and operations, and increasing administrative tasks that need to get done. With all this attention on the day-to-day, your capacity to focus on what's most important is limited.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${outsourcingStyle.contOurS}`}>
                            <div className={`${"d-flex"} ${outsourcingStyle.contItem}`}>
                                <div className={outsourcingStyle.numberItem}>
                                    <h3>02</h3>
                                </div>
                                <div className={outsourcingStyle.contentSub}>
                                    <p>
                                        Instead, outsource your business processes to FVL & TPL. Unload management burden and reduce costs with a dedicated team that we manage for you. Improve productivity through our expertise and economies of scale. Most importantly, drive your business forward by concentrating on what's really critical - increasing your customer base, sales revenues, and profit margins.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${outsourcingStyle.contOurS}`}>
                            <div className={`${"d-flex"} ${outsourcingStyle.contItem}`}>
                                <div className={outsourcingStyle.numberItem}>
                                    <h3>03</h3>
                                </div>
                                <div className={home.contentSub}>
                                    <p>
                                        How? Take a look at this process chart to understand how outsourcing can relieve your business pressures and allow you to achieve your maximum business objectives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={outsourcingStyle.function}>
                <div className="col-lg-12">
                    <div className="row">
                        {
                            functionList.map((functionItem, index) => {
                                return (
                                    // <div className="col-lg-4 d-flex" key={index}>
                                    //     {index > 0 && <img src={outsourcingImagebt} alt='Outsourcingbt' />}
                                    //     <div className={outsourcingStyle.contbottom}>
                                    //         <h6 className={home.titleContent}>{functionItem.title}</h6>
                                    //         <p>{functionItem.paragraph1}</p>
                                    //         <p>{functionItem.paragraph2}</p>
                                    //         <p>{functionItem.paragraph3}</p>
                                    //     </div>
                                    // </div>
                                    <>
                                        <div className="col-md-1 d-flex" key={index}>
                                            <div className={outsourcingStyle.iconStep}>

                                                {index > 0 ? <FontAwesomeIcon icon={faAnglesRight} /> : <FontAwesomeIcon icon={faGears} />}
                                            </div>
                                        </div>
                                        <div className={`col-md-3 d-flex ${outsourcingStyle.contStep}`} key={index}>
                                            <div>
                                                {functionItem.content.map((content, subindex) => <p key={subindex}> {subindex > 0 ? content : <h6>{content}</h6>}</p>)}
                                            </div>
                                        </div>

                                    </>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={outsourcingStyle.sayings}>
                <p><FontAwesomeIcon icon={faQuoteLeft} /> Do what you do best and outsource the rest <FontAwesomeIcon icon={faQuoteRight} /></p>
                <h6>Peter Drucker</h6>
            </div>
        </>
    )

}

export default OutsourcingPage;