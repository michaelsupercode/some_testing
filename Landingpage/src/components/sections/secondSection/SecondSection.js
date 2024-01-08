import "./SecondSection.css";


import sample from "../../../img/pics/tumblr_0af44e1f0c28f36430e13f80afc93b40_c2ac4ddc_1280.jpg";
import sample1 from "../../../img/pics/tumblr_0b1bd04a619b3a0ef75127b65edad75f_92d12b93_2048.jpg";
import sample2 from "../../../img/pics/tumblr_0d32cbb36b41e3e66cf08f41d5df36b6_16e13962_1280.jpg";
import sample3 from "../../../img/pics/tumblr_0d2363e334f9f70a4324dbce775a6b6b_71f7bf84_1280.jpg";
import sample4 from "../../../img/pics/tumblr_0d893411c1eb0b390099af735a450e46_c5d979c6_1280.jpg";
import sample5 from "../../../img/pics/tumblr_0e86f11560ce70f62cdd67e8d7db1931_6b3d63bb_1280.jpg";
import sample6 from "../../../img/pics/tumblr_0e948e5432d9cc213c80681baf87f657_1e56a151_1280.jpg";
import sample7 from "../../../img/pics/tumblr_0f16c5ce075b95d84da26d6812542705_bdcab497_1280.jpg";

function SecondSection() {
    return (
        <section className="SecondSection">
            <article className="productCardSecondSection">
                <img src={sample} alt="sample"></img>
                <h2 className="h2SecondSection">sample</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards"></p>
            </article>
            <article className="productCardSecondSection">
                <img src={sample1} alt="Pizza"></img>
                <h2 className="h2SecondSection">test</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards"></p>
            </article>
            <article className="productCardSecondSection">
                <img src={sample2} alt="Frikadellen"></img>
                <h2 className="h2SecondSection">test</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards">..expensive..</p>
            </article>
            <article className="productCardSecondSection">
                <img src={sample3} alt="Drink in a glass"></img>
                <h2 className="h2SecondSection">test</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards"></p>
            </article>
            <article className="productCardSecondSection">
                <img src={sample4} alt="Pizza"></img>
                <h2 className="h2SecondSection">test</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards"></p>
            </article>
            <article className="productCardSecondSection">
                <img src={sample5} alt="Dish with scampi"></img>
                <h2 className="h2SecondSection">test</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards"></p>
            </article>
            <article className="productCardSecondSection">
                <img src={sample6} alt="Spaghetti"></img>
                <h2 className="h2SecondSection">test</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards"></p>
            </article>
            <article className="productCardSecondSection">
                <img src={sample7} alt="a special dish"></img>
                <h2 className="h2SecondSection">test</h2>
                <p className="descriptionProductCards">Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p className="priceProductCards"></p>
            </article>
        </section >
    );
};

export default SecondSection;