import "./Projects.css"
import skills from "../../data/skills"
import { Link } from "react-router-dom"
import { darkModeContext } from "../../context/Context"
import { useContext } from "react"

export const Projects = () => {
  const { darkMode } = useContext(darkModeContext)

  return (
    <main>
      <section className={darkMode ? "projectPage dark" : "projectPage"}>
        {skills.map((item) => {
          return (
            <Link
              className={darkMode ? "projectPage__item dark" : "projectPage__item"}
              to={`/projects/${item.id}`}
              key={item.id}>
              <img src={item.image} alt={item.alt} />
              <h3>{item.title}</h3>
              <div className="projectPage__item__skills">
                {item.skills.map((skill, index) => {
                  return <p key={index}>{skill}</p>
                })}
              </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}
