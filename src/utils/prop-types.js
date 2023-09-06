import PropTypes from 'prop-types';

export const AboutMeItemPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export const BodyCVPropTypes = {
  data: PropTypes.shape({
    aboutMeData: PropTypes.arrayOf(PropTypes.shape(AboutMeItemPropTypes)),
    projectsData: PropTypes.array.isRequired,
    experienceData: PropTypes.array.isRequired,
    skillsData: PropTypes.array.isRequired,
    educationData: PropTypes.array.isRequired,
    languageData: PropTypes.array.isRequired,
  }).isRequired,
};

export const EducationItemPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};