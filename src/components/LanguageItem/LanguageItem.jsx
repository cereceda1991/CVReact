import { LanguageItemPropTypes } from '../../utils/prop-types';

const LanguageItem = ({ language, level }) => {
  return (
    <div className="skill_item">
      <span className="row_skill">
        <i className="bx bxs-checkbox-checked"></i>
      </span>
      <span className="skill-name">{language}:</span>
      <span>{level}</span>
    </div>
  );
};

LanguageItem.propTypes = LanguageItemPropTypes;

export default LanguageItem;
