import "../TeamCards/team-card.scss";
import plusIcon from "../TeamCards/plus.svg";
function TeamCard({ photo, name, position, onHover, onHoverClasses }) {
  return (
    <div className="cardsss-wrapper">
      <div className="imageDiv">
        <img src={photo} />
        <div className={` ${onHoverClasses}`}>
          <p className="textHover">{onHover}</p>
          <p className="readMore">Read more</p>
        </div>
      </div>
      <div className="text-div-card">
        <div>
          <p className="name">{name}</p>
          <p className="position">{position}</p>
        </div>
        <div className="imagePlusDiv">
          <img src={plusIcon} />
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
