import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import CompaniesStyle from './ourcompanies.module.scss'
import WhoWeAre from "../../../Image/AboutUs/Our_Companies/WhoWeAre_EN_updated20230704.jpg"
import fvlOffice1 from "../../../Image/AboutUs/Our_Companies/FVL-Office.jpg"
import fvlOffice2 from "../../../Image/AboutUs/Our_Companies/FVL-Office2.jpg"
import { Introduction } from "../../../components/EmbeddedGoogleDriveFile/DriveFilePage"
import OurLeadership from "../OurLeadership";
import OurActivities from "../OurActivities";
import OurAchievements from "../OurAchievements";
import OurCharity from "../OurCharity";

const OurCompanies = () => {

    return (
        <>
            <OurLeadership />
            <OurAchievements />
            <OurActivities />
            <OurCharity />
        </>
    )
}

export default OurCompanies;

