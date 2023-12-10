import Button from "../buttons/Button";
import Headline from "../headlines/Headline";
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <header>
            <Nav />
            <h1>Hi, I am John Smith</h1>
            <Headline inhalt={'A Front End Developer'} />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat qui sit veritatis veniam culpa odio, provident, accusantium repellendus ex eius architecto, unde quas? Necessitatibus neque explicabo rerum, veniam ipsum eveniet.</p>
            <Button inhalt={'resume'} />
        </header>
    );
}

export default Header;