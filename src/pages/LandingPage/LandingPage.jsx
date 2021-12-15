import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import image from '../../assets/me.jpg';
import './LandingPage.scss';

function LandingPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerCollapse = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div id="landing">
      <div className="section">
        <div className="section__content relative">
          <div className="landing-panel landing-panel--main mb-4">
            <div className="landing-panel__content" />
            <h1 id="name" className="font-roboto w-full tablet:w-3/4">
              Eros Di Pede
            </h1>
            <h2 className="font-nunito w-full tablet:w-3/4">Developing games, and the web</h2>
            <img src={image} alt="me" className="w-full tablet:w-3/4" />
            <div
              className={`landing-panel landing-panel--sub landing-panel--sub-${drawerOpen ? 'open' : 'closed'
                } absolute top-0 right-4`}
            >
              {drawerOpen && (
                <div>
                  <ul aria-label="LANGUAGES">
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Haskell</li>
                  </ul>
                  <ul aria-label="TOOLS">
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>Flutter</li>
                    <li>PostgresQL</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                    <li>Docker</li>
                    <li>AWS and DigitalOcean</li>
                    <li>Gradle</li>
                  </ul>
                  <ul aria-label="HOBBIES">
                    <li>Video Games</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>Rock Climbing</li>
                    <li>Karate</li>
                    <li>Photography</li>
                    <li>Music</li>
                  </ul>
                </div>
              )}
              <div className="button-bar">
                <button type="button" onClick={() => handleDrawerCollapse()}>
                  {drawerOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
