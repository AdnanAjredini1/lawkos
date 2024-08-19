import React from "react";
import "../Description/description.scss";
import arrowIcon from "./description-assets/description-arrow.svg";
import { motion } from "framer-motion";
motion;

function Description() {
  return (
    <div className="descriptionn">
      <motion.div
        initial={{ x: "-7vw" }} 
        animate={{ x: 0 }} 
        transition={{ type: "spring", stiffness: 35 }}
        className="big-title-div"
      >
        <p className="big-title">Legal solutions to solve complex problems</p>
      </motion.div>

      <div className="description-right-part">
        <p>
          We offer legal and consultancy services tailored to our clients needs.
          Wherever business takes you, we are here to help .
        </p>
        <motion.button
          initial={{ x: "7vw" }} 
          animate={{ x: 0 }} 
          transition={{ type: "spring", stiffness: 65 }}
        >
          Get a free consultation <img src={arrowIcon} />
        </motion.button>
      </div>
    </div>
  );
}

export default Description;
