import { Route, Routes } from "react-router-dom";
import AboutUsLayout from '../../Layout/AboutUsLayout';
import { AboutUsRoutes} from "../../../routes";

const AboutUsRouter = () => {
        return (
            <Routes>
                <Route path='/' element={<AboutUsLayout/>}>
                    {
                        AboutUsRoutes.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route key={index} path={route.path} element={<Page />} />
                            )
                        })
                    }
                </Route>
            </Routes>
        )
}
export default AboutUsRouter;