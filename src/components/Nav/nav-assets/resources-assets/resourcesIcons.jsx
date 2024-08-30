import networkIcon from '../resources-assets/network.svg';
import legalNoticesIcon from '../resources-assets/LegalNotices.svg';
import lawsIcon from "../resources-assets/law.svg";
import insightsIcon from "../resources-assets/insights.svg";
import contactUsIcon from "../resources-assets/contact-us.svg";
import podcastIcon from "../resources-assets/mic-outline.svg";
import { FormattedMessage } from 'react-intl';

const resourceItems = [
    {
      title: <FormattedMessage id='Network' defaultMessage="Network"/>,
      icon: networkIcon,
    },
    {
      title: <FormattedMessage id='Legal Notices' defaultMessage="Legal Notices"/>,
      icon: legalNoticesIcon,
    },
    {
      title: <FormattedMessage id='Laws of Kosova' defaultMessage="Laws of Kosova"/>,
      icon: lawsIcon,
    },
    {
      title: <FormattedMessage id='Insights' defaultMessage="Insights"/> ,
      icon: insightsIcon,
    },
    {
      title: <FormattedMessage id='Contact Us' defaultMessage="Contact Us"/> ,
      icon: contactUsIcon,
    },
    {
      title: "Podcast",
      icon: podcastIcon,
    }
  ];
  
  export default resourceItems;

