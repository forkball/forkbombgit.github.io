import React from 'react';
import { Device } from '../../components';
import './LandingPage.scss';

function LandingPage() {
  return (
    <div className="landing flex flex-col justify-center items-center py-0 desktop:py-2">
      <Device classes=" " />
      <h1 className="mr-auto bottom-0 left-0 hidden tablet:block fixed">forkball.games</h1>
    </div>
  );
}

export default LandingPage;
