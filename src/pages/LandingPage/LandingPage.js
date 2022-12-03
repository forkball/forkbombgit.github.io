import React from 'react';
import './LandingPage.scss';
import { Device } from '../../components';

function LandingPage() {
  return (
    <div className="flex flex-col items-center py-0 desktop:py-2 h-screen">
      <Device classes=" " />
      <h1 className="mr-auto bottom-0 left-0 hidden tablet:block fixed">forkball.games</h1>
    </div>
  );
}

export default LandingPage;
