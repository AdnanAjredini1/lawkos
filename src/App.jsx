import { useSelector } from "react-redux";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/MobileNav/MobileNav";
import Description from "./components/Description/Description";
import ThreeImages from "./components/ThreeImages/ThreeImages";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import PracticArea from "./components/PracticArea/PracticArea";
import Cards from "./components/Cards/Cards";
import BigImage from "./components/BigImage/BigImage";
import Clients from "./components/Clients/Clients";
import NewsEvents from "./components/News&Events/NewsEvents";
import Team from "./components/Team/Team";
import { FormattedMessage, IntlProvider } from "react-intl";
import { translate } from "./translation/translate";
import ThreeImages1 from "./components/ThreeImages2/ThreeImages1";

function App() {
  const isDark = useSelector((state) => state.dark.isDark);
  const language = useSelector((state) => state.language.language);

  return (
    <div className="appp" data-theme={isDark ? "dark" : ""}>
      <IntlProvider locale={language} messages={translate[language]}>
        <Nav />
        <MobileNav />
        <Description />
        {/* <ThreeImages /> */}
        <ThreeImages1 />
        <Services />
        <AboutUs />
        <Experience />
        <PracticArea
          title={
            <FormattedMessage id="Our practice area">
              Our practice area
            </FormattedMessage>
          }
        />
        <Cards />
        <BigImage />
        <PracticArea
          title={
            <FormattedMessage id="Meet our team">
              Meet our team
            </FormattedMessage>
          }
          classes="none"
          textClasses="paragraphDisplay"
        />
        <Team />
        <Clients />
        <PracticArea
          title={
            <FormattedMessage id="News & Events">
              News & Events
            </FormattedMessage>
          }
        />
        <NewsEvents />
        <Footer />
        {/* <div> 
        <Outlet />
      </div> */}
      </IntlProvider>
    </div>
  );
}

export default App;
