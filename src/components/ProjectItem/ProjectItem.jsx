import { ProjectItemPropTypes } from '../../utils/prop-types';

const ProjectItem = ({ title, date, description, link }) => {
  return (
    <div>
      <li>
        <div className="project_title">
          <h3 className="project_subtitle">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <h3>|{date}</h3>
        </div>
        <p className="all_infos">{description}</p>
      </li>
    </div>
  );
};

ProjectItem.propTypes = ProjectItemPropTypes;

export default ProjectItem;
