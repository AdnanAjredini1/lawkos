import bigArrowIcon from './nav-assets/big-right-arrow-hover.svg'

function ServicesCard({title, icon}) {
    return (
        <div className='services-card'>
           <div className='service-caed-div'>
             <img src={icon} />
             <p className='title'>{title}</p>
           </div>
           <img className='arrow-icon' src={bigArrowIcon} width={'20px'} height={'38px'}/>
        </div>
    );
}

export default ServicesCard;