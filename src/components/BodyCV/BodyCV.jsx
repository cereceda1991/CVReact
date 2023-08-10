import React from "react";
import "./BodyCV.css";
import EducationItem from "../EducationItem/EducationItem";
import SkillItem from "../SkillItem/SkillItem";
import LanguageItem from "../LanguageItem/LanguageItem";
import AboutMeItem from "../AboutMeItem/AboutMeItem";
import ExperiencieItem from "../ExperiencieItem/ExperiencieItem";
import ProjectItem from "../ProjectItem/ProjectItem";

const BodyCV = ({ info }) => (
  <main className="main_container">
    <section className="container_left">
      <div className="container_education">
        <span className="divider"></span>
        <h1 className="styles_titles">EDUCACIÓN</h1>
        <ul>
          {info.educationData.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </ul>
      </div>
      <span className="divider"></span>
      <p className="styles_titles">COMPETENCIAS TÉCNICAS</p>
      <h1 className="subtitle_skill">Generales</h1>
      {info.skillsData.slice(0, 10).map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
      <h1 className="subtitle_skill">Front-End</h1>
      {info.skillsData.slice(10, 17).map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
      <h1 className="subtitle_skill">Back-End</h1>
      {info.skillsData.slice(17).map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
      <span className="divider"></span>
      <h1 className="styles_titles">IDIOMAS</h1>
      <ul>
        {info.languageData.map((education, index) => (
          <LanguageItem key={index} {...education} />
        ))}
      </ul>
    </section>

    <section className="container_right">
      <h1 className="styles_titles">SOBRE MI</h1>
      <div className="container_projects">
        <ul>
          {info.aboutMeData.map((about, index) => (
            <AboutMeItem key={index} {...about} />
          ))}
        </ul>
      </div>
      <h1 className="styles_titles">PRINCIPALES PROYECTOS</h1>
      <div className="container_projects">
        <ul>
          {info.projectsData.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </ul>
      </div>
      <h1 className="styles_titles">EXPERIENCIA LABORAL</h1>
      <div className="container_projects">
        <ul>
          {info.experiencieData.map((experiencie, index) => (
            <ExperiencieItem key={index} {...experiencie} />
          ))}
        </ul>
      </div>
    </section>
  </main>
);
export default BodyCV;
