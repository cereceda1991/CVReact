const EducationItem = ({ title, description, link1, link2, status }) => {
  return (
    <div className="education">
      <a href={link1} target="_blank">
        <p className="education_title"> {title}</p>
      </a>
      <div className="education_details">
        <p>{description}</p>
        <a href={link2} target="_blank">
          <p>
            <b>{status}</b>
          </p>
        </a>
      </div>
    </div>
  );
};

export default EducationItem;
