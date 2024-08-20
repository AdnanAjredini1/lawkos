import '../PracticArea/practic-area.scss'
import viewAll from '../PracticArea/practic-area-assets/VIEW-ALL-_1_.svg'
import viewAllDark from '../PracticArea/practic-area-assets/VIEW-ALL-DARK.svg'
import { useSelector } from 'react-redux';
import arrow from '../PracticArea/practic-area-assets/Group 34.svg'
import arrow1 from '../PracticArea/practic-area-assets/Group 34(1).svg'


function PracticArea({title}) {
    const isDark = useSelector(state => state.dark.isDark)
    return (
        <div className="practice-area">
        <div className='pr'>
            <p className='practice-title'>{title}</p>
            <div className="practice-line"></div>
        </div>
            <div className='circle-area'>
              { isDark ? <img className='img1' src={viewAllDark} /> : <img className='img1' src={viewAll}  /> 
              }  
              { isDark ? <img className='img2' src={arrow1} /> : <img className='img2' src={arrow}  /> 
              } 
            </div>
        </div>
    );
}

export default PracticArea;