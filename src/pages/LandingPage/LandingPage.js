import React from 'react';
// import { ExperienceCard, ProjectCard } from '../../components';
import './LandingPage.scss';
import { Device } from '../../components';
// import ParticleBackground from '../../components/ParticleBackground';

function LandingPage() {
  return (
    <div className="flex justify-center items-center py-4 h-screen">
      <Device />
    </div>
  );
}

export default LandingPage;
