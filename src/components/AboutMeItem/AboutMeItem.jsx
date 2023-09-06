const AboutMeItem = ({ title, description }) => (
  <li>
    <div className="project_title">
      <h3>{title}</h3>
    </div>
    <p className="all_infos">{description}</p>
  </li>
);

export default AboutMeItem;
