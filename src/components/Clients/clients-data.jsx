import { FormattedMessage } from 'react-intl';
import manImg from '../Clients/clients-assets/pexels-jordan-bergen.png'
import girlImg from '../Clients/clients-assets/pexels-los-muertos-c.png'

const clientsData = [
    {
      name: "Drilon Krasniqi",
      description: <FormattedMessage id="LawKos is our trustworthy legal partner. Their team is professional, responsible and very supportive. The legal advices and services provided are always successful. We want to thank LawKos for being an important factor to the success of our company."> LawKos is our trustworthy legal partner. Their team is professional, responsible and very supportive. The legal advices and services provided are always successful. We want to thank LawKos for being an important factor to the success of our company</FormattedMessage> ,
      img: manImg,
      position: "Director, TravelKos",
    },
    {
      name: "Blinera Morina",
      description: <FormattedMessage id='Thank you LawKos for your amazing services. We want to express our gratitude for all the years we have been working together. Your team is very professional and talented. We would recommend LawKos to anyone who needs legal services and solutions.'>Thank you LawKos for your amazing services. We want to express our gratitude for all the years we have been working together. Your team is very professional and talented. We would recommend LawKos to anyone who needs legal services and solutions.</FormattedMessage> ,
      img: girlImg,
      position: "CEO, Jackal Agency",
    }
  ];
  
  export default clientsData;
  