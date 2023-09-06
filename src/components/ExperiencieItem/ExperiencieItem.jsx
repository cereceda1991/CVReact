import { ExperiencieItemPropTypes } from '../../utils/prop-types';

const ExperiencieItem = ({ title, date, description, link, position }) => (
  <li>
    <div className="project_title">
      <h5 className="body_subtitle">
        <a href={link}>{title}</a>
      </h5>
      <h5>|{date}</h5>
    </div>
    <h5>{position}</h5>
    <p className="all_infos">{description}</p>
  </li>
);

ExperiencieItem.propTypes = ExperiencieItemPropTypes;

export default ExperiencieItem;
