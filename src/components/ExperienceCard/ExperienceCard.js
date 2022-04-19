import React from 'react';
import PropTypes from 'prop-types';
import './ExperienceCard.scss';

const ExperienceCard = ({ title, company, experiences, imagePath, containerClasses }) => (
  <div className={`experience-card ${containerClasses}`}>
    <img
      className="experience-card__image tablet:mr-4"
      src={imagePath}
      alt={`experience at ${company}`}
    />
    <div className="experience-card__content ml-0 tablet:ml-2 mobile:p-4 p-8">
      <h3 className="experience-card__title mb-0 tablet:mb-2">{title}</h3>
      <h4 className="experience-card__company mb-2">{company}</h4>
      <ul className="experience-card__body body list-disc flex flex-col">
        {experiences.map((experience) => (
          <li className="mb-2">{experience}</li>
        ))}
      </ul>
    </div>
  </div>
);

ExperienceCard.defaultProps = {
  containerClasses: '',
  imagePath: undefined,
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(PropTypes.string).isRequired,
  containerClasses: PropTypes.string,
  imagePath: PropTypes.string,
};

export default ExperienceCard;
