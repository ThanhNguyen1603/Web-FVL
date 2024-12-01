import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import advantageStyle from "./advantage.module.scss";
import communication from "../../../Image/Solution/licensed-image.jpg"
import quality from "../../../Image/Solution/quanlity.jpg"
import staffExcellence from "../../../Image/Solution/employee-excellence-award-slide.jpg"
import bpo from "../../../Image/Solution/bpo.jpg"
const AdvantageSolution = () => {
    const contentList = [
        {
            subtitle: "Building Trust through Communication",
            subcontent: "Building Trust through Communication Whether it's through email, chat, phone, VOIP, work flow platforms, or person-to-person, you'll receive proactive and personalized customer service when you need it. You'll notice the difference immediately - our seasoned management team will work hard to understand your business and your unique business pressures. Plus, our managers come from extensive and successful management backgrounds in the US, so the only communication barrier you may ever notice is the time difference. Find out who we are.",
            icon: communication
        },
        {
            subtitle: "Delivering Quality and Results",
            subcontent: "Get results. Identify goals and measurable objectives with our managers and gain a specialized team that understands your specific business processes inside out. Receive deliverables with a focus on quality, speed, and accuracy. And track results with daily reports from managers who approach quality control as a measure of continuous performance improvement. Read about our company and mission.",
            icon: quality
        },
        {
            subtitle: "Commitment to Staff Excellence",
            subcontent: "As an extension of your business, our team members become your team members. That's why we're committed to recruiting and retaining the best and the brightest talent. Our managers - who you'll work with directly - represent a diverse array of industries and management backgrounds from the US. Our team members are dedicated and hardworking graduates from top universities. Read more about our team and our unique staff development and retention programs.",
            icon: staffExcellence
        },
        {
            subtitle: "More than a BPO Provider",
            subcontent: "With FVL & TPL, you'll gain more than a BPO provider. You'll gain a world-class BPO leader dedicated to sustaining long-term and mutually enhancing partnerships. At FVL & TPL, we see ourselves as another line in your organizational chart - an extension of your business units. When you work with FVL & TPL, you're working with a strategic outsourcing partner committed to your business' mission and objectives.",
            icon: bpo
        },
    ];


    return (
        <>
            <div className={`${advantageStyle.title} ${advantageStyle.titleContent}`}>
                <h2>The FVL & TPL Advantage</h2>
            </div>
            <div className={advantageStyle.note}>
                <h4>At FVL & TPL, our mission is to do it better. How are we different?</h4>
            </div>
            {
                contentList.map((contentItem, index) => {
                    return (
                        <div className={`${advantageStyle.contSol} ${"row"}`} key={index}>
                            <div className="col-md-7">
                                <div className={`${advantageStyle.subtitle} ${advantageStyle.titleContent}`}>
                                    <h5>{contentItem.subtitle}</h5>
                                </div>
                                <div className={advantageStyle.subcontent}>
                                    <p>{contentItem.subcontent}</p>
                                </div>
                            </div>
                            <div className={`${advantageStyle.imgSol} ${"col-md-5"}`}>
                                <img src={contentItem.icon} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default AdvantageSolution;