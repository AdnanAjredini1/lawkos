import "../Services/services.scss";
import imageSer from './services-assets/servicesImage.png';
function Services() {
  return (
    <div className="services-wrapper">
      <div className="bigTitleServices">
        <p>Services</p>
        <div className="line-services"></div>
      </div>
      <div className="middlePart-div">
        <div className="wraperr">
          <p className="title-serv">Personal</p>
          <p className="description-serv">
            From family law to personal injury, we treat your case with the care
            it deserves. Lets's protect what matters most to you.
          </p>
        </div>
        <div className="wraperr">
          <p className="title-serv">Bussines</p>
          <p className="description-serv">
            Achieve your business goals with LawKos comprehensive legal
            solutions, designed to mmitigate risks and fuel your growth.
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
