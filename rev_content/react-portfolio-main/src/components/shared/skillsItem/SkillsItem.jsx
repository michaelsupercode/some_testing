import React from "react";
import "./SkillsItem.scss";

function SkillsItem({ title, icon }) {
  return (
    <li className="skills-item">
      <div>
        <img src={icon} alt="" />
      </div>
      <p>{title}</p>
    </li>
  );
}

export default SkillsItem;
