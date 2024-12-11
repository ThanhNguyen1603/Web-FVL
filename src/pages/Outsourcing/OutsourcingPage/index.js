import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BPOIndustry from "../BPOIndustry";
import Advantage from "../AdvantageOutsourcing";
import Faqs from "../FaqsOutsourcing";
import NewsBPO from "../../../components/NewsBPO/NewsBPO";

const OutsourcingPage = () => {

    const functionList = [
        { content: ['Outsource Non-Core Functions', 'Reduce Management Burden of Day-to-Day Tasks', 'Reduce Costs Related to Labor and Operations', 'Reduce Process Inefficiencies'] },
        { content: ['Focus on Strategic Functions', 'Increase Capacity for Strategic Tasks', 'Focus Time and Resources on Customer Base', 'Improve Productivity and Quality'] },
        { content: ['Achieve Business Objectives', 'Increase Sales and Customer Satisfaction', 'Increase Revenues and Profit Margins', 'Achieve Stronger, More Flexible Market Position'] },
    ]

    return (
        <>

            <BPOIndustry />
            <Advantage />
            <Faqs />
            <NewsBPO />
        </>
    )

}

export default OutsourcingPage;