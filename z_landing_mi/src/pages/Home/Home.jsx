import "./Home.css";
import skills from "../../data/skills";
import { ButtonContact } from "../../components/ButtonContact/ButtonContact";
import { Link } from "react-router-dom";
import { darkModeContext } from "../../context/Context";
import { useContext } from "react";
import { Experience } from "../../components/Experience/Experience";

export const Home = () => {
  const { darkMode } = useContext(darkModeContext);

  return (
    <main className={darkMode ? "home dark" : "home"}>
      <section className={darkMode ? "home__hero dark" : "home__hero"}>
        <article
          className={
            darkMode ? "home__hero__content dark" : "home__hero__content"
          }
        >
          <h3 className="home__hero__heading1">
            {/* HI! it's{" "} */}
            {/* <span className="home__hero__heading1--underline">Michael Hanel</span>  */}
            coding_enthusiast
          </h3>
          <p>
            based in esslingen, certified full stack webdeveloper (-22), seeking for an
            inhouse internship or practical training for some weeks
          </p>
          <ButtonContact />
          {!darkMode && <img className="" src="" alt="" />}
          <section id="space"></section>
          <article>
            <p>
              IT enthusiast / autodidact (-85) with extensive amateurishly experience (-01)
              in screen and web design as well as programming - self-taught
              rookie in JavaScript, completed several FreeCodeCamp courses.<br/>
              ::|| successfully delivered numerous individual dental digital
              projects - workflow design, creation and optimisation, including
              engagements, orders and consulting.||:: <br/>highly skilled in remote
              work. extensive experience in <del>Microsoft Azure</del> cloud
              architecture and all kinds of hosting anywhere
            </p>
          </article>
          <section id="space"></section>
          <article>
            <p>
              comprehensive support for desktop devices and servers, including
              updates, system recovery, OS re-installation, hardware swap and
              software repair - also available for PC technology, hardware and
              network technology support. offering data recovery services and
              expertise in most internet-related issues
            </p>
          </article>

      <section className={darkMode ? "home__skills dark" : "home__skills"}>
        <Experience language="HTML [5]" expDate="2007-08-01" />
        <Experience language="CSS [3]" expDate="2007-08-01" />
        <Experience language="JavaScript" expDate="2021-03-01" /> 
        
        <Experience language="Wordpress" expDate="2012-03-01" />
        <Experience language="ReactJS" expDate="2021-06-01" />
        <Experience language="Hosting" expDate="2010-06-01" />
      </section>
          <section id="space2"></section>
          <article>
            <p>
            german, married, 29 years proud craftsman<br/>
            thoroughly honest | authentic | straightforward<br/>
            social commitment: active member of Repaircafe Kirchheim/Teck - device support, update service, system recovery, reinstallation Windows, repair | software<br/>
            active computer help mainly and especially for older people and fellow citizens

            {/* I am an active member of Repaircafe Kirchheim/Teck, where I provide device support, update service, system recovery, reinstallation of Windows, and repair of hardware and software.
I also provide computer help to older people and fellow citizens. */}
            </p>
          </article>
        </article>
      
      </section>
    
    </main>
  );
};
