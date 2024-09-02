import servicesItems from "./nav-assets/servicesIcons.jsx";
import ServicesCard from "./ServicesCard";
import "../Nav/servicesMenu.scss";
import { FormattedMessage } from "react-intl";

function ServicesMenu() {
  return (
    <div className="container">
      <div className="nav-megamenu services-megamenu">
        <div className="services-leftPart">
          <p
            style={{
              textAlign: "left",
              marginLeft: "20px",
              marginTop: "1%",
              width: "171px",
              height: "26px",
              fontSize: "clamp(10px,1.8vw,21px)",
              fontWeight: "normal",
              fontStyle: "normal",
            }}
          >
            <FormattedMessage id="Our practice area" defaultMessage="Our practice area" />
          </p>

          <div className="services-items">
            {servicesItems.map((item) => (
              <ServicesCard
                key={item.icon}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </div>
        </div>
        <div className="services-rightPart">
          <div className="wraper">
            <div className="line-services"></div>
            <p className="title">
              <FormattedMessage id="Personal" defaultMessage="Personal" />
            </p>
            <p className="description">
              <FormattedMessage
                id="From family law to personal injury, we treat your case with the care it deserves. Lets's protect what matters most to you."
                defaultMessage="From family law to personal injury, we treat your case with the care it deserves. Lets's protect what matters most to you."
              />
            </p>
          </div>
          <div className="wraper">
            <div className="line-services"></div>
            <p className="title">
              <FormattedMessage id="Bussines" defaultMessage="Bussines" />
            </p>
            <p className="description">
              <FormattedMessage
                id="Achieve your business goals with LawKos comprehensive legal solutions, designed to mmitigate risks and fuel your growth."
                defaultMessage="Achieve your business goals with LawKos comprehensive legal solutions, designed to mmitigate risks and fuel your growth."
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesMenu;
