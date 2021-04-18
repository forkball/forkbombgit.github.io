import React from 'react';
import './LandingPage.scss';

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-panel landing-panel-1 container p-4 mx-auto">
        <h1 id="name">
          <span className="first-name font-bold">EROS</span> DI PEDE
        </h1>
      </div>
      <div className="landing-panel landing-panel-1 container p-4 mx-auto">
        <div id="landing-image" />
        <h2 id="specialty">
          <span>GAME</span>
          and
          <span>WEB</span>
        </h2>
        <h2 id="role">
          <strong>DEVELOPER</strong>
        </h2>
      </div>
      <div className="landing-panel landing-panel-2 container absolute p-4 w-48 m-10 h-1/2 top-0 right-0 mr-36 z-10 text-right">
        <h3>LANGUAGES</h3>
      </div>
    </div>
  );
}

export default LandingPage;
