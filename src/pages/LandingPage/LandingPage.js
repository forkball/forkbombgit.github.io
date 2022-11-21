import React from 'react';
import './LandingPage.scss';
import { Device } from '../../components';

function LandingPage() {
  return (
    <div className="flex flex-col items-center py-2 scroll-y-overflow">
      <Device classes="tablet:block hidden" />
      <p className="font-pixel tablet:hidden block">under construction...</p>
      <h1 className="mr-auto fixed bottom-0 left-0">forkball.games</h1>
    </div>
  );
}

export default LandingPage;
