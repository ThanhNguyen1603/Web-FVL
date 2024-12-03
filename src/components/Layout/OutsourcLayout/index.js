import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../../pages/Home/home.module.scss'
import osLayout from './OSLayout.module.scss'
import Sidebar from "../../SidebarOutsourcing";
import { Outlet } from "react-router-dom";
import OutsourcingBanner from '../../../components/Banner/OutsourcingBanner'
import solutionStyle from '../SolutionLayout/solution.module.scss'
import FormSubmitSolutions from "../../FormSubmitSolutions/FormSubmitSolutions";

const outsourcLayout = () => {
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

export default outsourcLayout;