import React from "react";
import "../Description/description.scss";
import arrowIcon from "./description-assets/description-arrow.svg";

function Description() {
  return (
    <div className="descriptionn">
      <div className="big-title-div">
      <p className="big-title">Legal solutions to solve complex problems</p>

      </div>
      
      <div className="description-right-part">
        <p>
          We offer legal and consultancy services tailored to our clients needs.
          Wherever business takes you, we are here to help .
        </p>
        <button>
          Get a free consultation <img src={arrowIcon} />
        </button>
      </div>
    </div>
  );
}

export default Description;
