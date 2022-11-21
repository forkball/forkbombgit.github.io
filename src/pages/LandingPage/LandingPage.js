import React from 'react';
import './LandingPage.scss';
import { Device } from '../../components';

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center py-4 h-screen">
      <Device classes="tablet:block hidden" />
      <p className="font-pixel tablet:hidden block">under construction...</p>
      <h1 className="mr-auto absolute bottom-2 left-2">forkball.games</h1>
    </div>
  );
}

export default LandingPage;
