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
        style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}
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
            <p className="carousel-text">Why LawKos is your ideal partner for legal solutions and services.</p>

            <div className="img-container">
            <img src={img1} />
            </div>
            </div>
            <div className="carousel-img">
            <p className="carousel-text">LawKos - 15 years of legal excellence</p>
            <div className="img-container">
            <img src={img2} />
            </div>
            </div>

            <div className="carousel-img">
            <p className="carousel-text">Why LawKos is your ideal partner for legal solutions and services.</p>
            <div className="img-container">
            <img src={img1} />
            </div>
           
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ResourcesMenu;
