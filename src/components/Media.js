import "./Media.css";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Media() {
  return (
    <div className="section-media">
      <div className="center media-box ">
        <a href="#" className="media-icon">
          {<FaFacebook />}
        </a>
        <a href="#" className="media-icon">
          {<FaTwitter />}
        </a>
        <a href="#" className="media-icon">
          {<FaYoutube />}
        </a>
        <a href="#" className="media-icon">
          {<FaLinkedin />}
        </a>
      </div>
    </div>
  );
}
export default Media;
