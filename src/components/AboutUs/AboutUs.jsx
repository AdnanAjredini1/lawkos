import '../AboutUs/about.scss';
import whiteArrow from '../AboutUs/about-us-assets/aboutUS-whiteArrow.svg'

export default function AboutUs() {
  return (
    <div className='about-us-wrapper'>
      <div className='title-and-line'>
        <div className="line-aboutUs"></div>
        <p>about us</p>
      </div>
      <div className='right-part-aboutUs'>
        <p>
          Our team consist of well-coordinated lawyers that are able to solve
          most difficult tasks and casses. <button>About us <img src={whiteArrow}/></button>
        </p>
      </div>
    </div>
  );
}
