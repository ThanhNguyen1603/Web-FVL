import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import outsourcingStyle from '../OutsourcingPage/outsourcing.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons'
import tipsStyle from './tips.module.scss'
const Tips = () => {
    <FontAwesomeIcon icon={fa1} />
    const contentList = [
        { icon: "1", title: "Define the processes and scope of your project.", content: "Before beginning discussions with a BPO provider, sit down and think about the business processes which you want to outsource. Consider scope, scale, and timeline so you know what you need to offload. When you request a proposal for services, you'll have a better idea of how a BPO provider can meet your business pressures." },
        { icon: "2", title: "Conduct a cost analysis of the proposed processes.", content: "Cost reduction is an important advantage of outsourcing. While it shouldn't be the only factor in choosing a BPO provider, you do need to have a benchmark to measure against. Consider expenditures related to human resources, operations, and the opportunity costs of keeping your processes in-house." },
        { icon: "3", title: "Choose a BPO provider as you'd choose an internal employee.", content: "A BPO provider should be considered an extension of your own business. You'll be working with them frequently in the beginning, and depending on your project scope, throughout implementation. Get to know the team that you'll be working with and ask yourself if you can see them working for you internally." },
        { icon: "4", title: "Develop measurables based on quantity and quality.", content: "Refer back to your initial goals and develop measurable objectives based on quantity and quality. Work closely with your BPO provider to make sure your team is on the same page. Quality control should be a continuous and frequent component of your service level agreement." },
        { icon: "5", title: "Ask for a flexible service level agreement.", content: "Your business pressures may change and require fine-tuning or a dramatic overhaul. Ask your BPO provider for a service level agreement that offers flexibility in anticipation of possible modifications." },
        { icon: "6", title: "Start small.", content: "It's always smart to start your outsourcing project small and grow from there. If your BPO provider is responsive, thorough, and successful in delivering results - you'll be able to trust your BPO provider with additional processes." },
    ]

    return (
        <>
            <div className={`${tipsStyle.title} ${home.titleContent}`}>
                <h2>Tips for Outsourcing</h2>
            </div>
            <div className="container">
                {
                    contentList.map((contentItem, index) => {
                        return (
                            <>
                                <div className="row" key={index}>
                                    <div className={`${tipsStyle.contOurS}`}>
                                        <div className="d-flex align-items-center">
                                            <div className={home.numberItem}>
                                                <h2>{contentItem.icon}</h2>
                                            </div>
                                            <div className={home.contentSub}>
                                                <h5>{contentItem.title}</h5>
                                                <p>
                                                    {contentItem.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Tips;