import { useDispatch, useSelector } from "react-redux";
import { darkActions } from "../../store/slice/darkModeSlice";

function SwitchModeButton({ wrapperClasses, switchIconClasses, switchButtonClasses, moonIcon, sunnyIcon }) {
  const isDark = useSelector((state) => state.dark.isDark);
  const dispatch = useDispatch();
  
  return (
    <div
      className={`${wrapperClasses} `}
      onClick={() => dispatch(darkActions.switchToDark())}
    >
      <div className={`${switchIconClasses} ${!isDark ? switchButtonClasses : ""}`}>
        <img width={"14px"} src={sunnyIcon} />
      </div>
      <div className={`${switchIconClasses} ${isDark ? switchButtonClasses : ""}`}>
        <img width={"13px"} height={"13px"} src={moonIcon} />
      </div>
    </div>
  );
}

export default SwitchModeButton;
