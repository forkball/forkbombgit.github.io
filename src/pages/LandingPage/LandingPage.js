import React from 'react';
// import { ExperienceCard, ProjectCard } from '../../components';
import './LandingPage.scss';
import { LandingPanel } from '../../components';
import ParticleBackground from '../../components/ParticleBackground';

function LandingPage() {
  return (
    <div id="landing">
      <ParticleBackground />
      <LandingPanel />
    </div>
  );
}

export default LandingPage;
