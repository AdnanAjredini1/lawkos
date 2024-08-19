
import '../Cards/card.scss'
function Card({ icon, title, description }) {
  return (
    <div className='carddd'>
      <img src={icon} width={70} height={70} />
      <p className='title'>{title}</p>
      <p className='description'>{description}</p>
    </div>
  );
}

export default Card;
