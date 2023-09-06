import { SkillItemPropTypes } from '../../utils/prop-types';

const SkillItem = ({ category, skills }) => {
  return (
    <div>
      <h5>{category}</h5>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="row_skill">
              <i className="bx bxs-checkbox-checked"></i>
            </span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

SkillItem.propTypes = SkillItemPropTypes;

export default SkillItem;
