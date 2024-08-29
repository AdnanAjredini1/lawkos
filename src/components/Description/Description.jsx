import React from "react";
import "../Description/description.scss";
import arrowIcon from "./description-assets/description-arrow.svg";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
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
        <p className="big-title">
          {" "}
          <FormattedMessage id="Legal solutions to solve complex problems">
            Legal solutions to solve complex problems
          </FormattedMessage>
        </p>
      </motion.div>

      <div className="description-right-part">
        <p>
          <FormattedMessage
            id="We offer legal and consultancy services tailored to our clients needs. Wherever business takes you, we are here to help "
          >
            We offer legal and consultancy services tailored to our clients
            needs. Wherever business takes you, we are here to help .
          </FormattedMessage>
        </p>
        <motion.button
          initial={{ x: "7vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 65 }}
        >
          <FormattedMessage id="Get a free consultation">Get a free consultation</FormattedMessage> <img src={arrowIcon} />
        </motion.button>
      </div>
    </div>
  );
}

export default Description;
