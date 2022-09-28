import React from 'react';
import PropTypes from 'prop-types';
import defaultProject from '../../assets/work.png';
import './ProjectCard.scss';

const ProjectCard = ({ title, company, experiences, timeSpan, imagePath, containerClasses }) => (
  <div className={`project-card ${containerClasses}`}>
    <img
      className={`project-card__image tablet:mr-4 ${
        imagePath === defaultProject ? 'opacity-50' : ''
      }`}
      src={imagePath}
      alt={`project at ${company}`}
    />
    <div className="project-card__content mobile:py-4 py-8">
      <h3 className="project-card__title mb-0 tablet:mb-2">{title}</h3>
      <h4 className="project-card__company mb-2">{company}</h4>
      <ul className="project-card__body body list-disc flex flex-col">
        {experiences.map((experience) => (
          <li className="mb-2">{experience}</li>
        ))}
      </ul>
      <p>
        <i>{timeSpan}</i>
      </p>
    </div>
  </div>
);

ProjectCard.defaultProps = {
  experiences: [],
  containerClasses: '',
  imagePath: defaultProject,
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(PropTypes.string),
  timeSpan: PropTypes.string.isRequired,
  containerClasses: PropTypes.string,
  imagePath: PropTypes.string,
};

export default ProjectCard;
