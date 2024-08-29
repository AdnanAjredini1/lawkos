import { FormattedMessage } from "react-intl";
import "../Services/services.scss";
import imageSer from "./services-assets/servicesImage.png";
function Services() {
  return (
    <div className="services-wrapper">
      <div className="bigTitleServices">
        <p>
          <FormattedMessage id="Services">Services</FormattedMessage>
        </p>
        <div className="line-services"></div>
      </div>
      <div className="middlePart-div">
        <div className="wraperr">
          <p className="title-serv">
            <FormattedMessage id="Personal">Personal</FormattedMessage>
          </p>
          <p className="description-serv">
            <FormattedMessage id="From family law to personal injury, we treat your case with the care it deserves. Lets's protect what matters most to you.">
              From family law to personal injury, we treat your case with the
              care it deserves. Lets's protect what matters most to you.
            </FormattedMessage>
          </p>
        </div>
        <div className="wraperr">
          <p className="title-serv">
            <FormattedMessage id="Bussines">Bussines</FormattedMessage>
          </p>
          <p className="description-serv">
          <FormattedMessage id="Achieve your business goals with LawKos comprehensive legal solutions, designed to mmitigate risks and fuel your growth.">Achieve your business goals with LawKos comprehensive legal
          solutions, designed to mmitigate risks and fuel your growth.</FormattedMessage>

           
          </p>
        </div>
      </div>

      <div className="image-services-div">
        <img src={imageSer} />
      </div>
    </div>
  );
}

export default Services;
