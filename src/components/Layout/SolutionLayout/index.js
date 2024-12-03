import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../../pages/Home/home.module.scss'
import SidebarSolution from "../../SidebarSolution";
import { Outlet } from "react-router-dom";
import SolutionBanner from '../../../components/Banner/SolutionBanner'
import osLayout from './../OutsourcLayout/OSLayout.module.scss'
import solutionStyle from "./solution.module.scss"
import FormSubmit from "../../FormSubmit/FormSubmit";
import FormSubmitSolutions from "../../FormSubmitSolutions/FormSubmitSolutions";

const SolutionLayout = () => {
    return (
        <>
            <div className={home.content}>
                {/* <SolutionBanner /> */}
                <div className={solutionStyle.Outlet}>
                    <div className='container-fluid pt-3'>
                        <div className="row">
                            <div className="col-lg-9">
                                <Outlet />
                            </div>
                            <div className="col-lg-3">
                                <div className={solutionStyle.soluForm}>
                                    <FormSubmitSolutions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )

}

export default SolutionLayout;