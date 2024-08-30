import energyIcon from "../nav-assets/Energy&Infractructure.svg";
import realEstateIcon from "../nav-assets/real-estate.svg";
import procurementIcon from "../nav-assets/procurement.svg";
import laptopIcon from "../nav-assets/laptop.svg";
import employmentIcon from "../nav-assets/employment.svg";
import bankingIcon from "../nav-assets/banking.svg";
import taxIcon from "../nav-assets/tax.svg";
import insuranceIcon from "../nav-assets/insurance.svg";
import licenseIcon from "../nav-assets/license.svg";
import criminalLawIcon from "../nav-assets/criminal-law.svg";
import familyIcon from "../nav-assets/family.svg";
import corporateIcon from "../nav-assets/corporate.svg";
import { FormattedMessage } from "react-intl";

const servicesItems = [
  {
    icon: corporateIcon,
    title: <FormattedMessage id="Corporate Law" defaultMessage='Corporate Law' />,
  },

  {
    icon: realEstateIcon,
    title: <FormattedMessage id="Real Estate" defaultMessage='Real Estate' />,
  },
  {
    icon: taxIcon,
    title: <FormattedMessage id="Tax & Customs Laws " defaultMessage='Tax & Customs Laws' /> ,
  },
  {
    icon: procurementIcon,
    title:  <FormattedMessage id="Public Procurement" defaultMessage='Public Procurement' />,
  },

  {
    icon: bankingIcon,
    title: <FormattedMessage id="Banking & Finance" defaultMessage='Banking & Finance' />,
  },

  {
    icon: insuranceIcon,
    title:  <FormattedMessage id="Insurance" defaultMessage='Insurance' />,
  },

  {
    icon: energyIcon,
    title:<FormattedMessage id="Energy & Infrastructure" defaultMessage='Energy & Infrastructure' /> ,
  },

  {
    icon: familyIcon,
    title:<FormattedMessage id="Family Law" defaultMessage='Family Law' /> ,
  },
  {
    icon: laptopIcon,
    title: <FormattedMessage id="ICT Sector" defaultMessage='ICT Sector' />,
  },
  {
    icon: employmentIcon,
    title:<FormattedMessage id="Labor & Employment" defaultMessage='Labor & Employment' /> ,
  },

  {
    icon: licenseIcon,
    title: <FormattedMessage id="Intellectual Property Law" defaultMessage='Intellectual Property Law' /> ,
  },
  {
    icon: criminalLawIcon,
    title: <FormattedMessage id="Criminal Law" defaultMessage='Criminal Law' />,
  },
];

export default servicesItems;
