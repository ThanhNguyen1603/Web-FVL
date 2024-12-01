import { Route, Routes } from "react-router-dom";
import SolutionLayout from '../../Layout/SolutionLayout';
import { SolutionRoutes} from "../../../routes";

const SolutionNavigation = () => {
        return (
            <Routes>
                <Route path='/' element={<SolutionLayout />}>
                    {
                        SolutionRoutes.map((route, index) => {
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
export default SolutionNavigation;