const ExperiencieItem = ({ title, date, description, link, position }) => (
  <li>
    <div className="project_title">
      <h3 className="project_subtitle">
        <a href={link}>{title}</a>
      </h3>
      <h3>|{date}</h3>
    </div>
    <h3 className="project_subtitle2">{position}</h3>
    <p className="all_infos">{description}</p>
  </li>
);

export default ExperiencieItem;
