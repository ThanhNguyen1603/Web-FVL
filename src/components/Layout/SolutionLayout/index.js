import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../../pages/Home/home.module.scss'
import SidebarSolution from "../../SidebarSolution";
import { Outlet } from "react-router-dom";
import SolutionBanner from '../../../components/Banner/SolutionBanner'
import osLayout from './../OutsourcLayout/OSLayout.module.scss'

const SolutionLayout = () => {
    return (
        <>
        <div className={home.content}>
                <SolutionBanner />
                <div className='container-fluid'>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="container">
                                <Outlet />
                                </div>
                            </div>
                            <div className={`${osLayout.sideBarstyle} ${"col-lg-2"}`}>
                            <SidebarSolution />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}

export default SolutionLayout;