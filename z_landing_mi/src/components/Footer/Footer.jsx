import "./Footer.css";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { darkModeContext, iconStyleContext } from "../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { darkMode } = useContext(darkModeContext);
  const { light, dark, height, width } = useContext(iconStyleContext);
  const style = { fill: darkMode ? dark : light, width: width, height: height };

  return (
    <footer>
      <div
        className={darkMode ? "footer__container dark" : "footer__container"}
      >
        <p className="footer__author">michaelhanel</p>
        <nav>
          <Link to="https://github.com/michaelsupercode" target="_blank">
            <FaSquareGithub style={style} />
          </Link>
          <Link to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGcrfREPn-v-QAAAY-GuiBAolPgvhlrXNKAb2S2l2JtfQzqPIdXpqL6UcLOlXP1gnUihhus4xMQlXrkKCWYWlxFekMXaf6wu3dGoqQtE99ugCUmb4rTPRHcfM4Bpdg7RqLUvkg=&original_referer=&sessionRedirect=https%3A%2F%2Fde.linkedin.com%2Fin%2Fmichael-hanel-sc%3Ftrk%3Dpeople-guest_people_search-card" target="_blank">
            <FaLinkedin style={style} />
          </Link>
          <a href="mailto:michael@mhanel.de" target="_blank">
            <MdEmail style={style} />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
