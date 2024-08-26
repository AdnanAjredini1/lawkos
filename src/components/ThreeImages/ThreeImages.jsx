import "../ThreeImages/threeImages.scss"
import imageThree from "./threeImages-assets/threeImages.webp"
import circleImage from './threeImages-assets/circleLogo.png';



function ThreeImages() {
    return (
        <div className="threeImages">
          <img src={imageThree} />
          <img className="circleImage" src={circleImage}/>
          
        </div>
    );
}

export default ThreeImages;