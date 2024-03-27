import React from "react";
import "./About.scss";
import line from "../../../assets/img/line.png";

function About() {
  return (
    <div className="content-about">
      <div className="about">
        <h1>A B O U T M E</h1>
        <img src={line} alt="" />
        <p>
          Hello, I'm Zahra, a one-year-old frontend developer with experience in
          this field.
          <br /> Ever since my teenage years, I've had a profound interest in
          the world of computers and technology.
          <br /> This fascination naturally led me to explore programming at a
          young age.
          <br /> My initial foray into programming revolved around simpler
          languages like HTML and CSS, which served as a solid foundation for
          creating basic websites.
          <br /> For me, programming is not just a hobby; it's a true passion.
          <br /> It's a means to drive real change and solve problems.
          <br /> I'm constantly on the lookout for emerging technologies and
          methods to enhance my programming skills.
          <br /> This enables me to tackle new and intriguing projects that
          contribute to the ever-evolving world of technology and society.
          <br />
          Outside of work, I find myself happily engaged in design and
          experimenting with other fascinating functionalities.
          <br /> My ultimate goal is to progress and refine my skills, always
          ready to embrace fresh challenges and collaborate with diverse
          individuals who share the same objectives.
          <br /> If you're interested in collaborating or networking with me,
          I'm eager to connect and explore potential opportunities.
          <br /> Thank you for taking the time to learn more about my background
          and experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
