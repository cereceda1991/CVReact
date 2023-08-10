const ProjectItem = ({ title, date, description, link }) => (
  <li>
    <div className="project_title">
      <h3 className="project_subtitle">
        <a href={link}>{title}</a>
      </h3>
      <h3>|{date}</h3>
    </div>
    <p className="all_infos">{description}</p>
  </li>
);

export default ProjectItem;
