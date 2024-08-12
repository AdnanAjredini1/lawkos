import "../Nav/resourcesMenu.scss";
import resourceItems from "./nav-assets/resources-assets/resourcesIcons";
import ServicesCard from "./ServicesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftIcon from "../Nav/nav-assets/resources-assets/carousel-assets/left-arrow-carousel.svg";
import rightIcon from "../Nav/nav-assets/resources-assets/carousel-assets/right-arrow-carousel.svg"
import img1 from "../Nav/nav-assets/resources-assets/carousel-assets/carousel-photo1.png"
import img2 from "../Nav/nav-assets/resources-assets/carousel-assets/carousel-photo2.png"




function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center",color:'rgba(255, 255, 255, 0)', background: "transparent",backgroundColor:'rgba(255, 255, 255, 0)' }}
        onClick={onClick}
      >
        <img src={rightIcon} alt="Next" />
      </div>
    );
  }
  
  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}
        onClick={onClick}
      >
        <img src={leftIcon} alt="Previous" />
      </div>
    );
  }

function ResourcesMenu() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="resources-container">
      <div className="nav-megamenu-resources">
        <div className="resources-left-part">
          <p className="titlep">Resources</p>
          <div className="resources-items">
            {resourceItems.map((item) => (
              <ServicesCard
                key={item.icon}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </div>
        </div>

        <div className="resources-right-part">
          <Slider {...settings}>
            <div className="carousel-img">
              <img src={img1} />
            </div>
            <div className="carousel-img">
            <img src={img2} />
            </div>

            <div className="carousel-img">
            <img src={img1} />
            </div>
           
            
            
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ResourcesMenu;
