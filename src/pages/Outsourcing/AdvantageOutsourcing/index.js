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
            title2: 'How Outsourcing Helps:',
            paragraph5: "Focus on strategic positioning and maintaining your competitive advantage. Offload the repetitive tasks that divert your attention from your customers and core business.",
            paragraph6: "Accomplish more with less people, time, and resources through streamlining and outsourcing your back-office processes. Let your managers focus on increasing sales margins and customer satisfaction to drive your business forward.",
            paragraph7: "Rely on an integrated, specialized team that will learn your business processes inside out and provide after-hours coverage.",
            paragraph8: "Focus on strategic positioning and maintaining your competitive advantage. Offload the repetitive tasks that divert your attention from your customers and core business.",
        }

    ]


    return (
        <>
            <div className="container-fluid">
                <div className={`${advantageStyle.titleContent}`}>
                    <h2>Advantages of Outsourcing</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        {
                            functionList.map((functionItem, index) => {
                                return (
                                    <div key={index}>
                                        <div className={advantageStyle.titleContent}>
                                            <h3>{functionItem.title1}</h3>
                                        </div>
                                        <div className={`${advantageStyle.contOurS} ${"d-flex align-items-center"}`}>
                                            <div className={home.numberItem}>
                                                <h2>01</h2>
                                            </div>
                                            <div className={home.contentSub}>
                                                {functionItem.paragraph1}
                                            </div>
                                        </div>
                                        <div className={`${advantageStyle.contOurS} ${"d-flex align-items-center"}`}>
                                            <div className={home.numberItem}>
                                                <h2>02</h2>
                                            </div>

                                            <div className={home.contentSub}>
                                                {functionItem.paragraph2}
                                            </div>
                                        </div>
                                        <div className={`${advantageStyle.contOurS} ${"d-flex align-items-center"}`}>
                                            <div className={home.numberItem}>
                                                <h2>03</h2>
                                            </div>
                                            <div className={home.contentSub}>
                                                {functionItem.paragraph3}
                                            </div>
                                        </div>
                                        <div className={`${advantageStyle.contOurS} ${"d-flex align-items-center"}`}>
                                            <div className={home.numberItem}>
                                                <h2>04</h2>
                                            </div>
                                            <div className={home.contentSub}>
                                                {functionItem.paragraph4}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-6">
                        {
                            functionList2.map((functionItem, index) => {
                                return (
                                    <div key={index}>
                                        <div className={advantageStyle.titleContent}>
                                            <h3>{functionItem.title2}</h3>
                                        </div>
                                        <div className={`${advantageStyle.contOurS} ${"d-flex align-items-center"}`}>
                                            <div className={home.numberItem}>
                                                <h2>01</h2>
                                            </div>
                                            <div className={home.contentSub}>
                                                {functionItem.paragraph5}
                                            </div>
                                        </div>
                                        <div className={`${advantageStyle.contOurS} ${"d-flex align-items-center"}`}>
                                            <div className={home.numberItem}>
                                                <h2>02</h2>
                                            </div>
                                            <div className={home.contentSub}>
                                                {functionItem.paragraph6}
                                            </div>
                                        </div>
                                        <div className={`${advantageStyle.contOurS} ${"d-flex align-items-center"}`}>
                                            <div className={home.numberItem}>
                                                <h2>03</h2>
                                            </div>
                                            <div className={home.contentSub}>
                                                {functionItem.paragraph7}
                                            </div>
                                        </div>
                                        <div className={`${advantageStyle.contOurS} ${"d-flex align-items-center"}`}>
                                            <div className={home.numberItem}>
                                                <h2>04</h2>
                                            </div>
                                            <div className={home.contentSub}>
                                                {functionItem.paragraph8}
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

export default Advantage;