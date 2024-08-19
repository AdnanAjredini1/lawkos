import {  useSelector } from "react-redux"
import Nav from "./components/Nav/Nav"
import { Outlet } from "react-router-dom";
import MobileNav from "./components/MobileNav/MobileNav";
import Description from "./components/Description/Description";
import ThreeImages from "./components/ThreeImages/ThreeImages";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import PracticArea from "./components/PracticArea/PracticArea";
import Cards from "./components/Cards/Cards";
import BigImage from "./components/BigImage/BigImage";


function App() {
  const isDark = useSelector(state => state.dark.isDark);


  return (
    <div className="appp" data-theme={isDark ? 'dark':""}>
      <Nav /> 
      <MobileNav />
      <Description />
      <ThreeImages />
      <Services />
      <AboutUs />
      <Experience />
      <PracticArea />
      <Cards />
      <BigImage />
      <Footer />
    
      {/* <div> 
        <Outlet />
      </div> */}
    </div>
  );
}

export default App
