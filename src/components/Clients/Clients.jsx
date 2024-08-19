import { useSelector } from 'react-redux';
import '../Clients/clients.scss'

import ClientCard from "./ClientCard";
import clientsData from "./clients-data";
import white from '../Clients/clients-assets/white.svg'
import dark from '../Clients/clients-assets/dark.svg'


function Clients() {
    const isDark = useSelector(state => state.dark.isDark)

    
    return (
        <div className="clients-wrapper">
         
          {/* {isDark ? <img src={white} className='image' /> :<img src={dark} className='image' />} */}
           <div className='cards-div'>
           {clientsData.map(item => (
                <ClientCard key={item.description}  img={item.img} description={item.description} name={item.name} position={item.position} />
            ))}
           </div>
           
        </div>
    );
}

export default Clients;