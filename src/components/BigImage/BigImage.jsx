import "../BigImage/big-image.scss";
import icon from "../Nav/nav-assets/nav-icon-dark.svg";
import big from "../BigImage/bigImage-assets/bigImage.png";

function BigImage() {
  return (
    <div className="image-wrapper">
      <img src={big} className="big" />
      <div className="div-icon">
        <img src={icon} />
      </div>
      <p className="text">
        From family law to personal injury, we treat your case with the care it
        deserves. Let's protect what matters most to you.
      </p>
    </div>
  );
}

export default BigImage;
