import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../../pages/Home/home.module.scss'
import SidebarSolution from "../../SidebarSolution";
import { Outlet } from "react-router-dom";
import SolutionBanner from '../../../components/Banner/SolutionBanner'
import osLayout from './../OutsourcLayout/OSLayout.module.scss'
import solutionStyle from "./solution.module.scss"
import FormSubmit from "../../FormSubmit/FormSubmit";
import FormSubmitSolutions from "../../FormSubmitSolutions/FormSubmit";

const SolutionLayout = () => {
    return (
        <>
            <div className={home.content}>
                <SolutionBanner />
                <div className='container-fluid'>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-8">

                                <Outlet />

                            </div>
                            <div className={`${solutionStyle.sideBarstyle} ${"col-lg-4"}`}>
                                <FormSubmitSolutions />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}

export default SolutionLayout;