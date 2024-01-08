import "./Footer.css";

import Facebook from "../../img/SocialMedia/Facebook.png";
import Insta from "../../img/SocialMedia/Instagram.png";
import TikTok from "../../img/SocialMedia/TikTok.png";
import Twitter from "../../img/SocialMedia/Twitter.png";
import YouTube from "../../img/SocialMedia/YouTube.png";

function Footer() {
    return (
        <footer>
            <ul className="footerNavigation">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Impressum</a></li>
            </ul>
            <p className="logo">netview media</p>
            <article className="socialMedia">
                <img src={Facebook} alt="Facebook logo"></img>
                <img src={Insta} alt="Instagram logo"></img>
                <img src={TikTok} alt="TikTok logo"></img>
                <img src={Twitter} alt="Twitter logo"></img>
                <img src={YouTube} alt="Youtube logo"></img>
            </article>
        </footer>
    );
};

export default Footer;