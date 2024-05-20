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
              in screen and web design as well as programming. self-taught
              rookie in JavaScript, completed several FreeCodeCamp courses.<br/>
              ::|| successfully delivered numerous individual dental digital
              projects - workflow design, creation and optimisation, including
              engagements, orders and consulting.||:: <br/>highly skilled in remote
              work. extensive experience in <del>Microsoft Azure</del> cloud
              architecture and all kinds of hosting anywhere.
            </p>
          </article>
          <section id="space"></section>
          <article>
            <p>
              comprehensive support for desktop devices and servers, including
              updates, system recovery, OS re-installation, hardware and
              software repair. also available for PC technology, hardware and
              network technology support. offering data recovery services and
              expertise in most internet-related issues.
            </p>
          </article>
          <section id="space"></section>
          <article>
            <p>
            german, married, 29 years proud craftsman<br/>
            thoroughly honest | authentic | very direct | straightforward<br/>
            social commitment: active member of Repaircafe Kirchheim/Teck - device support, update service, system recovery, reinstallation Windows, repair hardware | software<br/>
            active computer help mainly and especially for older people and fellow citizens

            I am an active member of Repaircafe Kirchheim/Teck, where I provide device support, update service, system recovery, reinstallation of Windows, and repair of hardware and software.
I also provide computer help to older people and fellow citizens.
            </p>
          </article>
        </article>
        <article className="home__hero__image">
          <img src="/images/portfolio.jpg" alt="" />
        </article>
      </section>
      <section className={darkMode ? "home__skills dark" : "home__skills"}>
        <Experience language="HTML [5]" expDate="2007-08-01" />
        <Experience language="CSS [3]" expDate="2007-08-01" />
        <Experience language="JavaScript" expDate="2021-03-01" /> 
        
        <Experience language="Wordpress" expDate="2013-03-01" />
        <Experience language="ReactJS" expDate="2021-06-01" />
        <Experience language="Hosting" expDate="2012-06-01" />

        {/* <Experience language="TailwindCSS" text="..just started.." /> */}
      </section>
      {/* <section className={darkMode ? "home__projects dark" : "home__projects"}>
        <div className="home__projects__header-container">
          <h2>done work so far</h2>
          <Link to="/projects">..some more..</Link>
        </div>
        <section className="home__projects__grid">
          {skills.map(
            (item, index) =>
              index < 4 && (
                <Link
                  to={`/projects/${item.id}`}
                  key={item.id}
                  className={darkMode ? "home__projects__project dark" : "home__projects__project"}>
                  <img className="home__projects__project-image" src={item.image} alt={item.alt} />
                  <h3>{item.title}</h3>
                  <div className="home__projects__project__skills">
                    {item.skills.map((skill, index) => {
                      return <p key={index}>{skill}</p>
                    })}
                  </div>
                </Link>
              )
          )}
        </section>
      </section> */}
    </main>
  );
};
