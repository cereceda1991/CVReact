import { EducationItemPropTypes } from '../../utils/prop-types';

const EducationItem = ({ title, description, link1, link2, status }) => {
  return (
    <div className="education">
      <a href={link1} target="_blank" rel="noopener noreferrer">
        <p className="education_title">{title}</p>
      </a>
      <div className="education_details">
        <p>{description}</p>
        <a href={link2} target="_blank" rel="noopener noreferrer">
          <p>
            <b>{status}</b>
          </p>
        </a>
      </div>
    </div>
  );
};

EducationItem.propTypes = EducationItemPropTypes;

export default EducationItem;
