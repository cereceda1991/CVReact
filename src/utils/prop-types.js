import PropTypes from 'prop-types';

export const ColorProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

export const LanguageProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

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

export const ExperiencieItemPropTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export const HeaderCvPropTypes = {
  data: PropTypes.shape({
    headerData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export const SkillItemPropTypes = {
  category: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const ProjectItemPropTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export const SidebarPropTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export const LanguageItemPropTypes = {
  language: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
