import React from 'react';
// import { FiChevronDown, FiChevronUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import image from '../../assets/me.png';
import './LandingPanel.scss';

const LandingPanel = () => {
  return (
    <div className="landing-section section desktop:my-24 tablet:my-12 mobile:my-0">
      <div className="section__content relative">
        <div className="panel landing-panel flex flex-col">
          <div className="landing-panel__content landing-panel__content--left flex tablet:flex-row flex-col">
            <div className="landing-panel__content__heading flex flex-col justify-center">
              <h1 id="name" className="font-roboto flex gap-0 flex-col">
                EROS<span>DI PEDE</span>
              </h1>
              <h2 className="font-nunito mb-0 desktop:mb-4">Developing games, and the web</h2>
            </div>
            <img src={image} alt="me" />
          </div>
          <div className="landing-panel__content landing-panel__content--right flex tablet:flex-row flex-col">
            <div className="landing-panel__content__body flex flex-col">
              <p className="font-roboto">
                In all areas of the stack, Eros is well equipped to address any challenge, whether
                it be developing elegant, responsive websites, creating intuitive mobile application
                experiences, or building robust, efficient backend solutions.
              </p>
              <br />
              <p className="font-roboto">
                Additionally, Eros is passionate about video games and is working on game
                development projects both in physical and digital mediums.
              </p>
            </div>
            <div className="landing-panel__content__bullets">
              <div className="flex flex-wrap gap-4">
                <ul aria-label="LANGUAGES" className="flex-1">
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>C#</li>
                  <li>Haskell</li>
                </ul>
                <ul aria-label="TOOLS" className="flex-1">
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
                <ul aria-label="HOBBIES" className="flex-1">
                  <li>Video Games</li>
                  <li>Comics</li>
                  <li>Movies</li>
                  <li>Rock Climbing</li>
                  <li>Karate</li>
                  <li>Photography</li>
                  <li>Music</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPanel;
