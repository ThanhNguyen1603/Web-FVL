import { Outlet } from 'react-router-dom';
import Footer from '../../Footer';
import Header from '../../Header';
import BackToTop from '../../BackToTop';
const MainLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
         <BackToTop />
         <Footer />
      </>
   )
}

export default MainLayout;