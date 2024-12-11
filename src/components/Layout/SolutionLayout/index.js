import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../../pages/Home/home.module.scss'
import { Outlet } from "react-router-dom";
import solutionStyle from "./solution.module.scss"
import FormSubmitSolutions from "../../FormSubmitSolutions/FormSubmitSolutions";

const SolutionLayout = () => {
    return (
        <>
            <div className={home.content}>
                {/* <SolutionBanner /> */}
                <div className={solutionStyle.Outlet}>
                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col-lg-9">
                                <Outlet />
                            </div>
                            <div className="col-lg-3">
                                <div className={`${solutionStyle.soluForm}`}>
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