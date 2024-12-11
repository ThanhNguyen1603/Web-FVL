import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OurLeadership from "../OurLeadership";
import OurActivities from "../OurActivities";
import OurAchievements from "../OurAchievements";
import OurCharity from "../OurCharity";
import Charity from "../../../components/Charity/Charity";
import TurkeyDash from "../../../components/TurkeyDash/TurkeyDash";

const OurCompanies = () => {

    return (
        <>
            <OurLeadership />
            <OurAchievements />
            <OurActivities />
            <OurCharity />
            <TurkeyDash />
            <Charity />
        </>
    )
}

export default OurCompanies;

