import { useDispatch, useSelector } from "react-redux"
import Nav from "./components/Nav/Nav"
import { darkActions } from "./store/slice/darkModeSlice";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/MobileNav/MobileNav";
import Description from "./components/Description/Description";


function App() {
  const isDark = useSelector(state => state.dark.isDark);
  const dispatch = useDispatch();

  return (
    <div className="appp" data-theme={isDark ? 'dark':""}>
      <Nav /> 
      <MobileNav />
      <Description />
      <div> 
        <Outlet />
      </div>
      <button onClick={() => dispatch(darkActions.switchToDark())} 
        style={{  position: 'absolute', bottom: '0',zIndex:'100' }}>
        Dark Mode
      </button>
    </div>
  );
}

export default App
