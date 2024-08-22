import "../Slider/slider.scss";
import { useSelector } from "react-redux";

import Slider from "react-slick";
import leftDark from "../team-assets/left-dark.svg";
import rightDark from "../team-assets/right-dark.svg";
import leftWhite from "../team-assets/left-white.svg";
import rightWhite from "../team-assets/right-white.svg";
import TeamCard from "./TeamCards/TeamCard";
import img1 from "../team-assets/nussbaum-law-1qJPdNW.png";
import img2 from "../team-assets/nussbaum-law-ea3STzN7Lw8-unsplash.png";
import img3 from "../team-assets/nussbaum-law-IOvsEAEjnDE-unsplash.png";

function CustomNextArrow(props) {
  const { className, style, onClick, isDark } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        zIndex: "100",
      }}
      onClick={onClick}
    >
      {isDark ? (
        <img src={rightDark} alt="next" />
      ) : (
        <img src={rightWhite} alt="next" />
      )}
    </div>
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick, isDark } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        zIndex: "100",
      }}
      onClick={onClick}
    >
      {isDark ? (
        <img src={leftDark} alt="prev" />
      ) : (
        <img src={leftWhite} alt="prev" />
      )}
    </div>
  );
}

function Carousel() {
  const isDark = useSelector((state) => state.dark.isDark);
  var settings = {
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow isDark={isDark} />,
    prevArrow: <CustomPrevArrow isDark={isDark} />,
    initialSlide: 0,
    responsive:[
      {
        breakpoint:1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
         
        }
      }
    ]
  
  };
  return (
    <>
      <Slider {...settings} >
        <div>
          <TeamCard
            name="Labinot Halimi"
            position="Managing Partner"
            onHover="Labinot has been working with LawKos for over 10 
              years. He has helped a lot of our clients achieve their
              goals with their cases..."
            onHoverClasses="onHoverText"
            photo={img1}
          />
        </div>

        <div>
          <TeamCard
            name="Arbenita Jashari"
            position="Attorney at law, Partner"
            photo={img2}
          />
        </div>

        <div>
          <TeamCard
            name="Festina Murati"
            position="Attorney at law"
            photo={img3}
          />
        </div>
      </Slider>
    </>
  );
}

export default Carousel;
