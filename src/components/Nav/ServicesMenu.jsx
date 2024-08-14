import servicesItems from "./nav-assets/servicesIcons";
import ServicesCard from "./ServicesCard";
import "../Nav/servicesMenu.scss"


function ServicesMenu() {

  return (
    <div className="container">
      <div className="nav-megamenu services-megamenu">
          <div className="services-leftPart">
              <p style={{textAlign:'left',marginLeft:'20px',marginTop:'1%',width:'171px',height:'26px',fontSize:'clamp(10px,1.8vw,21px)',fontWeight:'normal',fontStyle:'normal'}}>Our practice area</p>

              <div className="services-items">
                  {servicesItems.map(item => (
                      <ServicesCard key={item.icon} icon={item.icon} title={item.title} />
                  ))}
              </div>
          </div>
          <div className="services-rightPart">
              <div className="wraper">
                 <div className="line-services"></div>
                 <p className="title">Personal</p>
                 <p className="description">From family law to personal injury, we treat your case with the care it deserves. Lets's protect what matters most to you.</p>

              </div>
              <div className="wraper">
                <div className="line-services"></div>
                 <p className="title">Bussines</p>
                 <p className="description">Achieve your business goals with LawKos comprehensive legal solutions, designed to mmitigate risks and fuel your growth.</p>
              </div>
          </div>
      </div>
      </div>
  );
}

export default ServicesMenu;
