const ProjectItem = ({ title, date, description, link }) => {
  return (
    <div>
      <li>
        <div className="project_title">
          <h3 className="project_subtitle">
            <a href={link} target="_blank">
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

export default ProjectItem;
