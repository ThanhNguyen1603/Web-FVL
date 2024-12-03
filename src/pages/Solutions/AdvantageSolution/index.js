import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import advantageStyle from "./advantage.module.scss";
import communication from "../../../Image/Solution/licensed-image1.png"
import quality from "../../../Image/Solution/quanlity.jpg"
import staffExcellence from "../../../Image/Solution/employee-excellence-award-slide.jpg"
import bpo from "../../../Image/Solution/bponew.jpg"
import award from "../../../Image/Solution/award.png"
const AdvantageSolution = () => {
    const contentList = [
        {
            subtitle: "Building Trust through Communication",
            subcontent: "At FVL & TPL, we prioritize building trust through effective communication. Whether it’s via email, chat, phone, VOIP, workflow platforms, or face-to-face interactions, you can expect proactive and personalized customer service whenever you need it. You’ll notice the difference immediately-our seasoned management team is dedicated to understanding your business and its unique pressures. With extensive and successful management backgrounds in the US, our managers ensure that the only communication barrier you might encounter is the time difference. Discover who we are and experience the FVL & TPL difference.",
            icon: communication
        },
        {
            subtitle: "Delivering Quality and Results",
            subcontent: "Achieve outstanding results by partnering with our expert managers to identify clear goals and measurable objectives. Our specialized team will gain a deep understanding of your specific business processes, ensuring deliverables are met with exceptional quality, speed, and accuracy. Track your progress with daily reports from managers who view quality control as an ongoing measure of performance improvement. Learn more about our company and mission.",
            icon: quality
        },
        {
            subtitle: "Commitment to Staff Excellence",
            subcontent: "As an extension of your business, our team members seamlessly integrate into your operations, becoming your team members. We are dedicated to recruiting and retaining the best and brightest talent. Our managers, with diverse industry and management backgrounds from the US, will work directly with you. Our team members are dedicated, hardworking graduates from top universities. Discover more about our team and our unique staff development and retention programs.",
            icon: award
        },
        {
            subtitle: "More than a BPO Provider",
            subcontent: "At FVL & TPL, you’re not just gaining a BPO provider; you’re partnering with a world-class leader dedicated to fostering long-term, mutually beneficial relationships. We integrate seamlessly into your organizational structure, acting as an extension of your business units. When you collaborate with us, you’re engaging with a strategic outsourcing partner committed to aligning with and advancing your business’s mission and objectives.",
            icon: bpo
        },
    ];


    return (
        <div className={`${advantageStyle.wrapper} pt-3`}>
            <div className={`${advantageStyle.title} ${advantageStyle.titleContent}`}>
                <h2>Our Mission Is To Do It Better</h2>
            </div>
            {
                contentList.map((contentItem, index) => {
                    return (
                        <>

                            {index % 2 === 1 && <div className={`${advantageStyle.contSol} ${"row"} d-flex align-items-center`} key={index}>
                                <div className="col-md-7">
                                    <div className={`${advantageStyle.subtitle} ${advantageStyle.titleContent}`}>
                                        <h5>{contentItem.subtitle}</h5>
                                    </div>
                                    <div className={advantageStyle.subcontent}>
                                        <p>{contentItem.subcontent}</p>
                                    </div>
                                </div>
                                <div className={`${advantageStyle.imgSol1} ${"col-md-5"}`}>
                                    <img src={contentItem.icon} alt="" />
                                </div>
                            </div>}
                            {index % 2 === 0 && <div className={`${advantageStyle.contSol} ${"row"} d-flex align-items-center`} key={index}>
                                <div className={`${advantageStyle.imgSol2} ${"col-md-5"}`}>
                                    <img src={contentItem.icon} alt="" />
                                </div>
                                <div className="col-md-7">
                                    <div className={`${advantageStyle.subtitle} ${advantageStyle.titleContent}`}>
                                        <h5>{contentItem.subtitle}</h5>
                                    </div>
                                    <div className={advantageStyle.subcontent}>
                                        <p>{contentItem.subcontent}</p>
                                    </div>
                                </div>

                            </div>}
                        </>
                    )
                })
            }
        </div>
    )
}
export default AdvantageSolution;