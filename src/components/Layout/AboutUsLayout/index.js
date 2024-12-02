import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet } from "react-router-dom";
import AboutUsNav from "../../AboutUsNav";
import BannerAboutUs from "../../Banner/AboutUsBanner";
import home from '../../../pages/Home/home.module.scss'
const AboutUsLayout = () => {
    return (
        <>
            {/* <div className={home.content}> */}
            <div className={home.content}>
                <BannerAboutUs />
                <div className='container-fluid'>
                    <div className="col-lg-12">
                        <div className="row">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            {/* </div > */}
            {/* <BannerAboutUs /> */}
            {/* <AboutUsNav /> */}

        </>
    )
}
export default AboutUsLayout;