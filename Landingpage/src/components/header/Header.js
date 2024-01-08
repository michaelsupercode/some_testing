import "./Header.css";

function Header() {
    return (
        <div className="containerHeader">
            <h2 className="h2Header">Hello Everybody Out There</h2>
            <h1 className="h1Header">We Are Your Agency</h1>
            <article className="firstArticleHeader">
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
            </article>
            <article className="numbersSectionHeader">
                <div>
                    <p className="bigNumberHeader">127</p>
                    <p className="descriptionNumbersHeader">Award Received</p>
                </div>
                <div>
                    <p className="bigNumberHeader">1505</p>
                    <p className="descriptionNumbersHeader">Cups of Coffee</p>
                </div>
                <div>
                    <p className="bigNumberHeader">109</p>
                    <p className="descriptionNumbersHeader">Projects Completed</p>
                </div>
                <div>
                    <p className="bigNumberHeader">102</p>
                    <p className="descriptionNumbersHeader">Happy Clients</p>
                </div>
            </article>
        </div>
    );
};

export default Header;