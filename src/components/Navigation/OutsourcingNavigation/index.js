import { Route, Routes } from "react-router-dom";
import OutsourcLayout from '../../Layout/OutsourcLayout';
import { OutsourcingRoutes} from "../../../routes";

const OutsourcingNav = () => {
        return (
            <Routes>
                <Route path='/' element={<OutsourcLayout />}>
                    {
                        OutsourcingRoutes.map((route, index) => {
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
export default OutsourcingNav;