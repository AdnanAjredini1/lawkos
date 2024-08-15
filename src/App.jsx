import { useDispatch, useSelector } from "react-redux"
import Nav from "./components/Nav/Nav"
import { darkActions } from "./store/slice/darkModeSlice";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/MobileNav/MobileNav";
import Description from "./components/Description/Description";
import ThreeImages from "./components/ThreeImages/ThreeImages";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";


function App() {
  const isDark = useSelector(state => state.dark.isDark);
  const dispatch = useDispatch();

  return (
    <div className="appp" data-theme={isDark ? 'dark':""}>
      <Nav /> 
      <MobileNav />
      <Description />
      <ThreeImages />
      <Services />
      <AboutUs />
      <Footer />
      <div> 
        <Outlet />
      </div>
      <button onClick={() => dispatch(darkActions.switchToDark())} 
        style={{  marginTop:'100px' }}>
        Dark Mode
      </button>
    </div>
  );
}

export default App
