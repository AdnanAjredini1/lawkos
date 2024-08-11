import { useDispatch, useSelector } from "react-redux"
import Nav from "./components/Nav/Nav"
import { darkActions } from "./store/slice/darkModeSlice";
import { Outlet } from "react-router-dom";


function App() {
  const isDark = useSelector(state => state.dark.isDark);
  const dispatch = useDispatch();

  return (
    <div className="app" data-theme={isDark ? 'dark':""}>
      <Nav /> 
      <div> 
        <Outlet />
      </div>
      <button onClick={() => dispatch(darkActions.switchToDark())} 
        style={{ width: '100px', position: 'absolute', bottom: '0' }}>
        Dark Mode
      </button>
    </div>
  );
}

export default App
