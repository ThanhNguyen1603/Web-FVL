import WorkFromHome from "../pages/WorkFromHome";
import Home from "../pages/Home";
import AboutUsNav from "../components/Navigation/AboutUsNavigation";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import News from "../pages/News";
import OutsourcingNavigation from "../components/Navigation/OutsourcingNavigation";
import SolutionNavigation from "../components/Navigation/SolutionNavigation";
import PrivacyPolice from "../pages/PrivacyPolicy";
import OurCompanies from "../pages/AboutUs/OurCompanies";
import OurAchievements from "../pages/AboutUs/OurAchievements";
import OurActivities from "../pages/AboutUs/OurActivities";
import AdvantageOutsourcing from "../pages/Outsourcing/AdvantageOutsourcing";
import Faqs from "../pages/Outsourcing/FaqsOutsourcing"
import Tips from "../pages/Outsourcing/TipsOutsourcing"
import OutsourcingPage from "../pages/Outsourcing/OutsourcingPage"
import SolutionPage from "../pages/Solutions/SolutionsPage";
import AdvantageSolution from "../pages/Solutions/AdvantageSolution";
import CaseStudies from "../pages/Solutions/CaseStudies";
import Portfolio from "../pages/Solutions/Portfolio";
import Testimonials from "../pages/Solutions/Testimonials";
import CareerDetails from "../pages/Careers/CareerDetails";
import BPOIndustry from "../pages/Outsourcing/BPOIndustry";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Home', component: Home },
    { path: '/AboutUs/*', component: AboutUsNav },
    { path: '/Outsourcing/*', component: OutsourcingNavigation },
    { path: '/Solutions/*', component: SolutionNavigation },
    { path: '/WorkFromHome', component: WorkFromHome },
    { path: '/News', component: News },
    { path: '/Careers', component: Careers },
    { path: '/Contact', component: Contact },
    { path: '/PrivacyPolice', component: PrivacyPolice, },
    { path: '/CareerDetails', component: CareerDetails, },
];
const AboutUsRoutes = [
    { path: '/', component: OurCompanies, },
    { path: '/OurCompanies', component: OurCompanies, },
    { path: '/OurAchievements', component: OurAchievements, },
    { path: '/OurActivities', component: OurActivities, },

];
const OutsourcingRoutes = [
    { path: '/', component: OutsourcingPage, },
    { path: '/Outsourcing', component: OutsourcingPage, },
    { path: '/Advantage', component: AdvantageOutsourcing, },
    { path: '/Faqs', component: Faqs, },
    { path: '/Tips', component: Tips, },
    { path: '/BPOIndustry', component: BPOIndustry }
]

const SolutionRoutes = [
    { path: '/', component: SolutionPage, },
    { path: '/Solutions', component: SolutionPage, },
    { path: '/Advantage', component: AdvantageSolution, },
    { path: '/Portfolio', component: Portfolio, },
    { path: '/Testimonials', component: Testimonials, },
    { path: '/CaseStudies', component: CaseStudies, },
]

const CareerRoutes = [
    { path: '/', component: Careers, },
    { path: '/CareerDetails', component: CareerDetails, },
]

const privateRoutes = [

];

export { publicRoutes, privateRoutes, AboutUsRoutes, OutsourcingRoutes, SolutionRoutes, CareerRoutes }


