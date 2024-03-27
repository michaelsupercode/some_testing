import React from "react";
import SkillsItem from "../../shared/skillsItem/SkillsItem";
import htmlIcon from "../../../assets/img/html.png";
import cssIcon from "../../../assets/img/css.png";
import sassIcon from "../../../assets/img/sass.png";
import javascriptIcon from "../../../assets/img/js.png";
import reactIcon from "../../../assets/img/react.png";
import bootstrapIcon from "../../../assets/img/bootstrap.png";
import gitIcon from "../../../assets/img/git.png";
import figmaIcon from "../../../assets/img/figma.png";
import "./Skills.scss";
import nodeJsIcon from "../../../assets/img/nodejs.png";
import mySqlIcon from "../../../assets/img/mysql.png";
import mongoDbIcon from "../../../assets/img/mongodb.png";
import typeScriptIcon from "../../../assets/img/typescript.png";
import unitedStatesIcon from "../../../assets/img/united-states.png";
import germanyIcon from "../../../assets/img/germany.png";
import iranIcon from "../../../assets/img/iran.png";

function skills() {
  return (
    <section>
      <article>
        <h1>USING NOW:</h1>
        <ul className="skills-list">
          <SkillsItem title="HTML5" icon={htmlIcon} />
          <SkillsItem title="CSS3" icon={cssIcon} />
          <SkillsItem title="SASS" icon={sassIcon} />
          <SkillsItem title="JAVASCRIPT" icon={javascriptIcon} />
          <SkillsItem title="REACT" icon={reactIcon} />
          <SkillsItem title="BOOTSTRAP" icon={bootstrapIcon} />
          <SkillsItem title="GIT" icon={gitIcon} />
          <SkillsItem title="FIGMA" icon={figmaIcon} />
        </ul>
      </article>
      <article>
        <h1>LEARNING:</h1>
        <ul className="skills-list">
          <SkillsItem title="NODEJS" icon={nodeJsIcon} />
          <SkillsItem title="MYSQL" icon={mySqlIcon} />
          <SkillsItem title="MONGODB" icon={mongoDbIcon} />
          <SkillsItem title="TYPESCRIPT" icon={typeScriptIcon} />
        </ul>
      </article>
      <article>
        <h1>OTHER LANGUAGE:</h1>
        <ul className="skills-list">
          <SkillsItem title="ENGLISH A1/A2" icon={unitedStatesIcon} />
          <SkillsItem title=" GERMANY B1/B2" icon={germanyIcon} />
          <SkillsItem title="PERSISH NATIVE" icon={iranIcon} />
        </ul>
      </article>
    </section>
  );
}

export default skills;
