import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import image from '../../assets/me.jpg';
import './LandingPage.scss';

function LandingPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerCollapse = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div id="landing">
      <div className="section mt-8 justify-center">
        <div className="section__content relative">
          <div className="landing-panel landing-panel--main">
            <div className="landing-panel__content">
              <h1
                id="name"
                className="font-roboto flex gap-0 tablet:gap-6 flex-col tablet:flex-row mobile:mt-6 tablet:mt-0"
              >
                EROS<span>DI PEDE</span>
              </h1>
              <h2 className="font-nunito">Developing games, and the web</h2>
              <div className="flex flex-col desktop:flex-row">
                <img src={image} alt="me" className="w-full desktop:w-3/4" />
                <p className="font-roboto">
                  In all areas of the stack, Eros is well equipped to address any challenge, whether
                  it be developing elegant, responsive websites, creating intuitive mobile
                  application experiences, or building robust, efficient backend solutions.
                  Additionally, Eros is passionate about video games and is working on game
                  development projects both in physical and digital mediums.
                </p>
              </div>
            </div>
            <div
              className={`landing-panel landing-panel--sub landing-panel--sub-${
                drawerOpen ? 'open' : 'closed'
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
              <div className="button-bar w-full">
                <a
                  href="mailto:erosdipede@gmail.com"
                  aria-label="Send me an email!"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2"
                >
                  <FiMail size={20} />
                </a>
                <a
                  href="https://github.com/ForkBombGIT"
                  aria-label="Find me on GitHub!"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/erosdipede"
                  aria-label="Connect with me on Linkedin!"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2"
                >
                  <FiLinkedin size={20} />
                </a>
                <button type="button" className="ml-auto" onClick={() => handleDrawerCollapse()}>
                  {drawerOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section px-4 desktop:px-0">
        <div className="section__content">
          <h2>EXPERIENCE</h2>
          <div className="information-panel" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
