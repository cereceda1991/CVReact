import './BodyCV.css';

import AboutMeItem from '../AboutMeItem/AboutMeItem';
import ProjectItem from '../ProjectItem/ProjectItem';
import ExperiencieItem from '../ExperiencieItem/ExperiencieItem';
import EducationItem from '../EducationItem/EducationItem';
import LanguageItem from '../LanguageItem/LanguageItem';
import SkillItem from '../SkillItem/SkillItem';
import { BodyCVPropTypes } from '../../utils/prop-types';

const BodyCV = ({ data }) => {
  const {
    aboutMeData,
    projectsData,
    experienceData,
    skillsData,
    educationData,
    languageData,
  } = data;

  return (
    <div className="main_container">
      <section className="container_left">
        <section>
          <span className="divider"></span>
          <div>
            {educationData.map((educationCategory, index) => (
              <div key={index}>
                <h1 className="styles_titles">
                  {educationCategory.headerTitle}
                </h1>
                <div>
                  {educationCategory.educations.map((education) => (
                    <EducationItem key={education.id} {...education} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <span className="divider"></span>
          <div className="container_skills">
            {skillsData.map((category, index) => (
              <div key={index}>
                <h1 className="styles_titles">{category.headerTitle}</h1>
                <ul>
                  {category.categories.map(
                    ({ categoryTitle, skills }, subIndex) => (
                      <SkillItem
                        key={subIndex}
                        category={categoryTitle}
                        skills={skills}
                      />
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section>
          <span className="divider"></span>
          <h1 className="styles_titles">{languageData[0].headerTitle}</h1>
          <ul>
            {languageData[0].languages.map(({ language, level }) => (
              <LanguageItem key={language} language={language} level={level} />
            ))}
          </ul>
        </section>
      </section>
      <section className="container_right">
        <section>
          <div className="container_projects">
            <ul>
              {aboutMeData.map((about, index) => (
                <AboutMeItem key={index} {...about} />
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h1 className="styles_titles">{projectsData[0].headerTitle}</h1>
          <div className="container_projects">
            <ul>
              {projectsData[0].projects.map((project) => (
                <ProjectItem key={project.id} {...project} />
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h1 className="styles_titles">{experienceData[0].headerTitle}</h1>
          <div className="container_projects">
            <ul>
              {experienceData[0].experiencies.map((experience) => (
                <ExperiencieItem key={experience.id} {...experience} />
              ))}
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

BodyCV.propTypes = BodyCVPropTypes;

export default BodyCV;
