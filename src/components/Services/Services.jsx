import { FormattedMessage } from "react-intl";
import "../Services/services.scss";
import imageSer from "./services-assets/servicesImage.png";
import { motion } from "framer-motion";

function Services() {
  return (
    <div className="services-wrapper">
      <div className="bigTitleServices">
        <motion.p
          initial={{ x: "-7vw" }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <FormattedMessage id="Services">Services</FormattedMessage>
        </motion.p>
        <div className="line-services"></div>
      </div>
      <div className="middlePart-div">
        <motion.div className="wraperr">
          <p className="title-serv">
            <FormattedMessage id="Personal">Personal</FormattedMessage>
          </p>
          <p className="description-serv">
            <FormattedMessage id="From family law to personal injury, we treat your case with the care it deserves. Lets's protect what matters most to you.">
              From family law to personal injury, we treat your case with the
              care it deserves. Lets's protect what matters most to you.
            </FormattedMessage>
          </p>
        </motion.div>
        <div className="wraperr">
          <p className="title-serv">
            <FormattedMessage id="Bussines">Bussines</FormattedMessage>
          </p>
          <p className="description-serv">
            <FormattedMessage id="Achieve your business goals with LawKos comprehensive legal solutions, designed to mmitigate risks and fuel your growth.">
              Achieve your business goals with LawKos comprehensive legal
              solutions, designed to mmitigate risks and fuel your growth.
            </FormattedMessage>
          </p>
        </div>
      </div>

      <motion.div
        initial={{ x: "7vw" }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
        className="image-services-div"
      >
        <img src={imageSer} />
      </motion.div>
    </div>
  );
}

export default Services;
