import { LanguageItemPropTypes } from '../../utils/prop-types';

const LanguageItem = ({ language, level }) => {
  return (
    <li className="skill_item">
      <span className="row_skill">
        <i className="bx bxs-checkbox-checked"></i>
      </span>
      <span>{language}:</span>
      <span>{level}</span>
    </li>
  );
};

LanguageItem.propTypes = LanguageItemPropTypes;

export default LanguageItem;
