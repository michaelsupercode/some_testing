import "./SecondSection.css";
import Salat from "../../../img/Bilder/salat.jpeg";
import Pizza1 from "../../../img/Bilder/pizza.jpeg";
import Frikadelle from "../../../img/Bilder/frikadellen.jpeg";
import Glass from "../../../img/Bilder/glass.jpeg";
import Pizza2 from "../../../img/Bilder/pizza2.jpeg";
import Scampi from "../../../img/Bilder/scampi.jpeg";
import Spagetthi from "../../../img/Bilder/spagetthi.jpeg";
import Teller from "../../../img/Bilder/teller.jpeg";

function SecondSection() {
    return (
        <section className="SecondSection">
            <article className="productCardSecondSection">
                <img src={Salat} alt="Salat"></img>
                <h2 className="h2SecondSection">Salat - Sample Dish 1</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards">$45 / $55</p>
            </article>
            <article className="productCardSecondSection">
                <img src={Pizza1} alt="Pizza"></img>
                <h2 className="h2SecondSection">Pizza - Sample Dish 2</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards">$65 / $70</p>
            </article>
            <article className="productCardSecondSection">
                <img src={Frikadelle} alt="Frikadellen"></img>
                <h2 className="h2SecondSection">Frikadellen - Sample Dish 3</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards">$30.50</p>
            </article>
            <article className="productCardSecondSection">
                <img src={Glass} alt="Drink in a glass"></img>
                <h2 className="h2SecondSection">Drink - Sample Dish 4</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards">$25.50</p>
            </article>
            <article className="productCardSecondSection">
                <img src={Pizza2} alt="Pizza"></img>
                <h2 className="h2SecondSection">Pizza2 - Sample Dish 5</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards">$75 / $80</p>
            </article>
            <article className="productCardSecondSection">
                <img src={Scampi} alt="Dish with scampi"></img>
                <h2 className="h2SecondSection">Scampi - Sample Dish 6</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards">$85</p>
            </article>
            <article className="productCardSecondSection">
                <img src={Spagetthi} alt="Spaghetti"></img>
                <h2 className="h2SecondSection">Spaghetti - Sample Dish 7</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards">$55</p>
            </article>
            <article className="productCardSecondSection">
                <img src={Teller} alt="a special dish"></img>
                <h2 className="h2SecondSection">Christmas Special - Sample Dish 8</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards">$95 / $100</p>
            </article>
        </section >
    );
};

export default SecondSection;