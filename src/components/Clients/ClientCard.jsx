import "../Clients/client-card.scss";
import quotes from "../Clients/clients-assets/quote.svg";

function ClientCard({ img, description, name, position }) {
  return (
    <div className="card-wrapper">
      <div className="quotes-div">
        <img src={img} />
        <img className="quotes" src={quotes} />
      </div>
      <p>{description}</p>
      <div className="clients-line"></div>
      <div>
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default ClientCard;
