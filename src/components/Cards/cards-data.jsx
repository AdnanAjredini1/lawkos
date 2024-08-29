import realEstateIcon from "../Nav/nav-assets/real-estate.svg";
import laptopIcon from "../Nav/nav-assets/laptop.svg";
import employmentIcon from "../Nav/nav-assets/employment.svg";
import bankingIcon from "../Nav/nav-assets/banking.svg";
import insuranceIcon from "../Nav/nav-assets/insurance.svg";
import corporateIcon from "../Cards/cards-assets/corporate.svg";
import { FormattedMessage } from "react-intl";

const cardsData = [
  {
    icon: corporateIcon,
    title: <FormattedMessage id="Corporate Law"> Corporate Law</FormattedMessage>,
    description:
    <FormattedMessage id="Focusing on advising and representing corporations, their executives, and shareholders on various legal matters. This includes mergers and acquisitions, intellectual property rights, corporate governance, and securities law.">Focusing on advising and representing corporations, their executives, and shareholders on various legal matters. This includes mergers and acquisitions, intellectual property rights, corporate governance, and securities law. </FormattedMessage>
  },
  {
    icon: bankingIcon,
    title: <FormattedMessage id="Banking & Finance"> Banking & Finance</FormattedMessage> ,
    description:
    <FormattedMessage id="We are specialized in legal issues concerning the transaction and regulation of financial instruments and institutions. This involve issues like lending agreements, regulatory compliance, securitization, and capital markets."> We are specialized in legal issues concerning the transaction and regulation of financial instruments and institutions. This involve issues like lending agreements, regulatory compliance, securitization, and capital markets.</FormattedMessage> 
  },
  {
    icon: laptopIcon,
    title: <FormattedMessage id="ICT Sector"> ICT Sector</FormattedMessage> ,
    description:
    <FormattedMessage id="We help clients navigate through regulatory compliance, data protection, intellectual property issues, and e-commerce law. We also work on contracts involving software licenses, cloud computing agreements, and technology transfers. "> We help clients navigate through regulatory compliance, data protection, intellectual property issues, and e-commerce law. We also work on contracts involving software licenses, cloud computing agreements, and technology transfers. </FormattedMessage> ,
      
  },

  {
    icon: realEstateIcon,
    title: <FormattedMessage id="Real Estate"> Real Estate</FormattedMessage>,
    description:
    <FormattedMessage id="We guide our clients through property transactions, ensuring that all regulations are met and that contracts are legally sound. This can include zoning issues, title searches, and financing."> We guide our clients through property transactions, ensuring that all regulations are met and that contracts are legally sound. This can include zoning issues, title searches, and financing.</FormattedMessage>
      ,
  },

  {
    icon: insuranceIcon,
    title:  <FormattedMessage id="Insurance"> Insurance</FormattedMessage> ,
    description:
    <FormattedMessage id="We help our clients with legal issues concerning insurance policies and claims like policy interpretation, insurance fraud investigations, and litigation over denied claims."> We help our clients with legal issues concerning insurance policies and claims like policy interpretation, insurance fraud investigations, and litigation over denied claims.</FormattedMessage>
    
  },
  {
    icon: employmentIcon,
    title: <FormattedMessage id="Labor & Employment"> Labor & Employment</FormattedMessage>  ,
    description:
    <FormattedMessage id="We can help on matters involving employer-employee relationships. Including employment contracts, workplace discrimination, employee benefits, and collective bargaining agreements."> We can help on matters involving employer-employee relationships. Including employment contracts, workplace discrimination, employee benefits, and collective bargaining agreements.</FormattedMessage> 
  },
];

export default cardsData;
