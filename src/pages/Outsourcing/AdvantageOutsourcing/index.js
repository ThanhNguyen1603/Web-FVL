import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import advantageStyle from './advantage.module.scss'
import outsourcingStyle from '../OutsourcingPage/outsourcing.module.scss'
const Advantage = () => {

    const functionList = [
        {
            title1: 'Your Business Pressure:',
            paragraph1: "As my business grows, I'm spending more time on tedious, day-to-day business activities than thinking about long-term growth strategies.",
            paragraph2: "I really want to grow my business but we're too small and just don't have the capacity to do so right now to take on such a huge endeavor.",
            paragraph3: "I'm constantly dealing with staff turnover and the resource expenditures related to hiring, training, and lost productivity.",
            paragraph4: "The costs of hiring, training, and employing additional staff are getting more expensive every day and cutting into my profit margins.",
        }

    ]
    const functionList2 = [
        {
            title2: 'How We Help:',
            paragraph5: "Focus on strategic positioning and maintaining your competitive advantage. Offload the repetitive tasks that divert your attention from your customers and core business.",
            paragraph6: "Accomplish more with less people, time, and resources through streamlining and outsourcing your back-office processes. Let your managers focus on increasing sales margins and customer satisfaction to drive your business forward.",
            paragraph7: "Rely on an integrated, specialized team that will learn your business processes inside out and provide after-hours coverage.",
            paragraph8: "Focus on strategic positioning and maintaining your competitive advantage. Offload the repetitive tasks that divert your attention from your customers and core business.",
        }

    ]


    return (
        <>
            <div className={`${advantageStyle.wrapper}`}>
                <div className="container-fluid">
                    <div className={`${outsourcingStyle.titleContent}`}>
                        <h2>Your Business Can Do More</h2>
                    </div>

                    <div className={advantageStyle.detailsContent}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        Your business faces numerous pressures, from staff recruitment and retention to labor and operational costs, and the increasing administrative tasks that demand attention. These day-to-day challenges can limit your capacity to focus on what truly matters.
                                    </p>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Outsource your business processes to FVL & TPL and alleviate these burdens. With a dedicated team managed by us, you can reduce costs and improve productivity through our expertise and economies of scale. Most importantly, you can drive your business forward by concentrating on what's critical - increasing your customer base, sales revenues, and profit margins.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-4">
                            {
                                functionList.map((functionItem, index) => {
                                    return (
                                        <div key={index}>
                                            <div className={advantageStyle.titleContent}>
                                                <h3>{functionItem.title1}</h3>
                                            </div>
                                            <div className={`${advantageStyle.contOurS} ${"d-flex flex-column"}`}>
                                                <div className={advantageStyle.numberItem}>
                                                    <h2>01</h2>
                                                </div>
                                                <div className={advantageStyle.contentSub}>
                                                    <p> {functionItem.paragraph1}</p>
                                                </div>
                                            </div>
                                            <div className={`${advantageStyle.contOurS} ${"d-flex flex-column"}`}>
                                                <div className={advantageStyle.numberItem}>
                                                    <h2>02</h2>
                                                </div>

                                                <div className={advantageStyle.contentSub}>
                                                    <p> {functionItem.paragraph2}</p>
                                                </div>
                                            </div>
                                            <div className={`${advantageStyle.contOurS} ${"d-flex flex-column"}`}>
                                                <div className={advantageStyle.numberItem}>
                                                    <h2>03</h2>
                                                </div>
                                                <div className={advantageStyle.contentSub}>
                                                    <p> {functionItem.paragraph3}</p>
                                                </div>
                                            </div>
                                            <div className={`${advantageStyle.contOurS} ${"d-flex flex-column"}`}>
                                                <div className={advantageStyle.numberItem}>
                                                    <h2>04</h2>
                                                </div>
                                                <div className={advantageStyle.contentSub}>
                                                    <p>  {functionItem.paragraph4}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* <div className="col-lg-2"></div> */}
                        <div className="col-lg-4">
                            {
                                functionList2.map((functionItem, index) => {
                                    return (
                                        <div key={index}>
                                            <div className={advantageStyle.titleContent}>
                                                <h3>{functionItem.title2}</h3>
                                            </div>
                                            <div className={`${advantageStyle.contOurS} ${"d-flex flex-column"}`}>
                                                <div className={advantageStyle.numberItem}>
                                                    <h2>01</h2>
                                                </div>
                                                <div className={advantageStyle.contentSub}>
                                                    <p>{functionItem.paragraph5}</p>
                                                </div>
                                            </div>
                                            <div className={`${advantageStyle.contOurS} ${"d-flex flex-column"}`}>
                                                <div className={advantageStyle.numberItem}>
                                                    <h2>02</h2>
                                                </div>
                                                <div className={advantageStyle.contentSub}>
                                                    <p> {functionItem.paragraph6}</p>
                                                </div>
                                            </div>
                                            <div className={`${advantageStyle.contOurS} ${"d-flex flex-column"}`}>
                                                <div className={advantageStyle.numberItem}>
                                                    <h2>03</h2>
                                                </div>
                                                <div className={advantageStyle.contentSub}>
                                                    <p> {functionItem.paragraph7}</p>
                                                </div>
                                            </div>
                                            <div className={`${advantageStyle.contOurS} ${"d-flex flex-column"}`}>
                                                <div className={advantageStyle.numberItem}>
                                                    <h2>04</h2>
                                                </div>
                                                <div className={advantageStyle.contentSub}>
                                                    <p> {functionItem.paragraph8}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Advantage;