import '../AboutUs/about.scss';
import whiteArrow from '../AboutUs/about-us-assets/aboutUS-whiteArrow.svg'
import { FormattedMessage } from 'react-intl';

export default function AboutUs() {
  return (
    <div className='about-us-wrapper'>
      <div className='title-and-line'>
        <div className="line-aboutUs"></div>
        <p> <FormattedMessage id='ABOUT US'>ABOUT US</FormattedMessage></p>
      </div>
      <div className='right-part-aboutUs'>
        <p>
        <FormattedMessage id='Our team consist of well-coordinated lawyers that are able to solve most difficult tasks and casses.'>Our team consist of well-coordinated lawyers that are able to solve
        most difficult tasks and casses.</FormattedMessage>
           <button><FormattedMessage id='About us'>About us</FormattedMessage> <img src={whiteArrow}/></button>
        </p>
      </div>
    </div>
  );
}
