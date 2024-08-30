import { FormattedMessage } from "react-intl";
import "../News&Events/news-events.scss";

function NewsEvents() {
  return (
    <div className="news-wrapper">
      <div className="img1 imagesClases">
        <div className="text-div">
          <p className="date"><FormattedMessage id="November" defaultMessage="November "/> 3, 2023</p>
          <p className="title"><FormattedMessage id="New law on Environmental Impact Assessment" defaultMessage="New law on Environmental Impact Assessment"/></p>
        </div>
      </div>
      <div className="img2 imagesClases">
        <div className="text-div">
          <p className="date"><FormattedMessage id="October" defaultMessage="October "/> 22, 2023</p>
          <p className="titleeee"><FormattedMessage id="Kosovo's first auction for solar energy park" defaultMessage="Kosovo's first auction for solar energy park"/></p>
        </div>
      </div>
      <div className="img3 imagesClases">
        <div className="text-div">
          <p className="date"><FormattedMessage id="October" defaultMessage="October "/> 22, 2023</p>
          <p className="titleeee"><FormattedMessage id="Labor Law in Kosovo: Explained in details" defaultMessage="Labor Law in Kosovo: Explained in details"/></p>
        </div>
      </div>
    </div>
  );
}

export default NewsEvents;
