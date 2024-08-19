import "../Cards/cards.scss";
import Card from "./Card";
import cardsData from "./cards-data";
function Cards() {
  return (
    <div className="cards-wrapper">
      {cardsData.map((item) => (
        <Card
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Cards;
