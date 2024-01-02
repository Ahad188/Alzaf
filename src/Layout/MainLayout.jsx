import { Outlet } from "react-router-dom";
import Footer from "../Page/Footer/Footer";
import Navigation from "../Page/Header/Navigation/Navigation";

 

const MainLayout = () => {
     return (
          <div>
               <Navigation></Navigation>
               <Outlet></Outlet>
               <Footer></Footer>
               
          </div>
     );
};

export default MainLayout;