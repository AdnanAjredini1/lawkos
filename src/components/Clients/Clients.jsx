import { useSelector } from 'react-redux';
import '../Clients/clients.scss'

import ClientCard from "./ClientCard";
import clientsData from "./clients-data";
import { FormattedMessage } from 'react-intl';



function Clients() {
    const isDark = useSelector(state => state.dark.isDark)

    
    return (
        <div className="clients-wrapper">
           <p className='text'><FormattedMessage id='What our clients say about us'>What our clients say about us</FormattedMessage></p>
           <div className='cards-div'>
           {clientsData.map(item => (
                <ClientCard key={item.description}  img={item.img} description={item.description} name={item.name} position={item.position} />
            ))}
           </div>
           
        </div>
    );
}

export default Clients;