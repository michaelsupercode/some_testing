import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FaSquareGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { MdEmail, MdDarkMode } from "react-icons/md";
import { darkModeContext, iconStyleContext } from "../../context/Context";
import { useContext } from "react";

export const Header = () => {
  const { darkMode, setDarkMode } = useContext(darkModeContext);
  const { light, dark, height, width } = useContext(iconStyleContext);
  const style = { fill: darkMode ? dark : light, width: width, height: height };

  const handleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <header className={darkMode ? "header dark" : "header "}>
      <Link to="/" className={darkMode ? "header__logo dark" : "header__logo"}>
        michaelhanel
      </Link>
      <nav className="header__nav">
        <div
          className={
            darkMode ? "header__nav__links dark" : "header__nav__links"
          }>
          <NavLink to="/">home</NavLink>
          <NavLink to="/projects">samples</NavLink>
        </div>
        <div
          className={
            darkMode ? "header__nav__social dark" : "header__nav__social"
          }>
          {/* <Link to="https://github.com/mich" target="_blank">
            <FaSquareGithub style={style} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/thomaserdmenger/"
            target="_blank">
            <FaLinkedin style={style} />
          </Link>
          <Link to="https://t.me/indev100" target="_blank">
            <FaTelegram style={style} />
          </Link>
          <a href="mailto:indev100@icloud.com" target="_blank">
            <MdEmail style={style} />
          </a> */}
          <button onClick={handleDarkMode}>
            <MdDarkMode style={style} />
          </button>
        </div>
      </nav>
    </header>
  );
};
