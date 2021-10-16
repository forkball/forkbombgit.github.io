import React from 'react';
import image from '../../assets/landing-image.png';
import './LandingPage.scss';

function LandingPage() {
  return (
    <div id="landing">
      <div className="section">
        <div className="section__content relative">
          <div className="landing-panel landing-panel--main mb-4">
            <div className="landing-panel__content" />
            <h1 id="name" className="w-3/4">
              Eros Di Pede
            </h1>
            <h2 className="w-3/4">Developing games, and the web</h2>
          </div>
          <div className="landing-panel landing-panel--main">
            <img src={image} alt="me" className="w-3/4" />
          </div>
          <div className="landing-panel landing-panel--sub absolute top-0 right-4" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
