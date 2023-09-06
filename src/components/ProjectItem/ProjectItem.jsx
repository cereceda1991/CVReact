import { ProjectItemPropTypes } from '../../utils/prop-types';

const ProjectItem = ({ title, date, description, link }) => {
  return (
    <div>
      <li>
        <div className="project_title">
          <h5 className="body_subtitle">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h5>
          <h5>|{date}</h5>
        </div>
        <p className="all_infos">{description}</p>
      </li>
    </div>
  );
};

ProjectItem.propTypes = ProjectItemPropTypes;

export default ProjectItem;
