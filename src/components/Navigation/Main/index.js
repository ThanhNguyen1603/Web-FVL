import { publicRoutes } from "../../../routes";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
const Main = () => {
    return (

        <Routes>
            <Route path='/' element={<MainLayout />}>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route key={index} path={route.path} element={<Page />} />
                    );
                })}
            </Route>
        </Routes>
    )
    /*
        Header
            
        Footer
    
    */

}
export default Main;

