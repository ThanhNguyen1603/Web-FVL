import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import ouractiv from "../OurActivities/OurActivities.module.scss";
import WeWork from "../../../components/WeWork/WeWork";
import WePlay from "../../../components/WePlay/WePlay";
import WeGive from "../../../components/WeGive/WeGive";


const OurActivities = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className={ouractiv.content}>
                        <div className={ouractiv.titleContent}>
                            <h2>Engage & Explore: Our Journey Together</h2>
                        </div>
                        <div className={ouractiv.weWork}>
                            <WeWork />
                        </div>
                        <div className={ouractiv.wePlay}>
                            <WePlay />
                        </div>
                        <div className={ouractiv.weGive}>
                            <WeGive />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurActivities;