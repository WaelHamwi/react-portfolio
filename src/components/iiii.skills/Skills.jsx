import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "./mySkills";
const Skills = () => {
    return (
        <div className="skill-section" id="skills">
          <h1 className="heading-skills">Skills</h1>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.imgSrc} className="skill-img" alt="" />
                <div className="skill-level">
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                <h1 className="skill-name">{skill.name}</h1>
                <p className="skill-info">{skill.info}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Skills;
