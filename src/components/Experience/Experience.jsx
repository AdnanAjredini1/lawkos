import "../Experience/experience.scss";
import image1 from "./experience-assets/businessman.png";
import image2 from "./experience-assets/jean-philippe-delber.png";
import elipse from "../Experience/experience-assets/Ellipse 9.svg";
import { FormattedMessage } from "react-intl";

function Experience() {
  return (
    <div className="experience-wrapper">
      <div className="text-experience">
        <div className="disc">
          <p >15</p>
          <img src={elipse} />
        </div>
        <p className="discP"><FormattedMessage id="Years of experience">Years of experience</FormattedMessage></p>
        <p className="discPp">
        <FormattedMessage id="Founded in 2008, LawKos is committed to the pursuit of justice in our country and more. Our team of dedicated professionals works tirelessly to serve our community. We offer legal services and consultancy in different areas.">Founded in 2008, LawKos is committed to the pursuit of justice in our
          country and more. Our team of dedicated professionals works tirelessly
          to serve our community. We offer legal services and consultancy in
          different areas.</FormattedMessage>
          
        </p>
      </div>
      <div className="photo1">
        <img src={image1} />
      </div>
      <div className="photo2">
        <img src={image2} />
      </div>
    </div>
  );
}

export default Experience;
