import bigArrowIcon from './nav-assets/big-right-arrow-hover.svg'

function ServicesCard({title, icon}) {
    return (
        <div className='services-card resource-card'>
           <div className='service-card-div'>
             <img src={icon} />
             <p className='title'>{title}</p>
           </div>
           <img className='arrow-icon' src={bigArrowIcon} width={'22px'} height={'40px'}/>
        </div>
    );
}

export default ServicesCard;