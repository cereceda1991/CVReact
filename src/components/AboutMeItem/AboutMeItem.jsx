const AboutMeItem = ({ title, description }) => (
  <li>
    <div className="about_title">
      <h3>{title}</h3>
    </div>
    <p className="all_infos">{description}</p>
  </li>
);

export default AboutMeItem;
