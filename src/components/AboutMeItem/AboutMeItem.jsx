import { AboutMeItemPropTypes } from '../../utils/prop-types';

const AboutMeItem = ({ title, description }) => (
  <li>
    <div >
      <h4>{title}</h4>
    </div>
    <p className="all_infos">{description}</p>
  </li>
);

AboutMeItem.propTypes = AboutMeItemPropTypes;

export default AboutMeItem;
