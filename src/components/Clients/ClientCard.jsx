import "../Clients/client-card.scss";
import quotes from "../Clients/clients-assets/quote.svg";

function ClientCard({ img, description, name, position }) {
  return (
    <div className="card-wrapper">
      <div className="quotes-div">
        <img className="profile-pic" src={img} />
        <img className="quotes" src={quotes} />
      </div>
      <p className="description">{description}</p>
      <div className="clients-line"></div>
      <div>
        <p className="name">{name}</p>
        <p className="position">{position}</p>
      </div>
    </div>
  );
}

export default ClientCard;
