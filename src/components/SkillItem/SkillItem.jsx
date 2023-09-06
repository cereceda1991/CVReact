const SkillItem = ({ category, skills }) => {
  return (
    <div className="skill_category">
      <h3>{category}</h3>
      <ul className="skill_list">
        {skills.map((skill, index) => (
          <li key={index} className="skill_item">
            <span className="row_skill">
              <i className="bx bxs-checkbox-checked"></i>
            </span>
            <span className="skill-name">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillItem;
