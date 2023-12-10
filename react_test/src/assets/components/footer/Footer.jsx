import Button from "../buttons/Button";
import Headline from "../headlines/Headline";

const Footer = () => {
    return (
        <footer>
            <Headline inhalt={'CONTACT'} />
            <Button inhalt={'email me'} />
            <p>Created by hon smith</p>
        </footer>
    );
}

export default Footer;