import "../ThreeImages2/three-images1.scss";
import circleLogo from "../ThreeImages2/three-images1-assets/circleLogo.png";

function ThreeImages1() {
  return (
    <div className="threeImages1">
      <div className="image1111Div"></div>
      <div className="image2222Div"></div>
      <div className="image3333Div"></div>
      <img src={circleLogo} className="circleLogoLogo" />
    </div>
  );
}

export default ThreeImages1;
