import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../../pages/Home/home.module.scss'
import osLayout from './OSLayout.module.scss'
import Sidebar from "../../SidebarOutsourcing";
import { Outlet } from "react-router-dom";
import OutsourcingBanner from '../../../components/Banner/OutsourcingBanner'


const outsourcLayout = () => {
    return (
        <>
            <div className={home.content}>
                <OutsourcingBanner />
                <div className='container-fluid'>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="container">
                                    <Outlet />
                                </div>
                            </div>
                            <div className={`${osLayout.sideBarstyle} ${"col-lg-2"}`}>
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}

export default outsourcLayout;