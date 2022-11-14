import React from 'react';
import './LandingPage.scss';
import { Device } from '../../components';

function LandingPage() {
  return (
    <div className="flex justify-center items-center py-4 h-screen">
      <Device classes="tablet:block hidden" />
      <p className="font-pixel tablet:hidden block">under construction...</p>
    </div>
  );
}

export default LandingPage;
