const SkillItem = ({ skill }) => (
  <div className="skill_item">
    <span className="row_skill">
      <i className="bx bxs-checkbox-checked"></i>
    </span>
    <span className="skill-name">{skill}</span>
  </div>
);

export default SkillItem;
