import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import image from '../../assets/me.png';
// import { ExperienceCard, ProjectCard } from '../../components';
import './LandingPage.scss';

function LandingPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [drawerRef]);

  const handleDrawerCollapse = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div id="landing">
      <div className="section mt-4 tablet:mt-8 justify-center">
        <div className="section__content">
          <h1
            id="name"
            className="font-roboto flex gap-0 tablet:gap-6 flex-col tablet:flex-row mobile:mt-6 tablet:mt-0"
          >
            EROS<span>DI PEDE</span>
          </h1>
          <h2 className="font-nunito mb-4">Developing games, and the web</h2>
        </div>
        <div className="section__content relative">
          <div className="panel landing-panel landing-panel--main">
            <div className="landing-panel__content">
              <div className="flex flex-col desktop:flex-row">
                <img src={image} alt="me" className="w-full desktop:w-3/4" />
                <p className="body-copy font-roboto">
                  In all areas of the stack, Eros is well equipped to address any challenge, whether
                  it be developing elegant, responsive websites, creating intuitive mobile
                  application experiences, or building robust, efficient backend solutions.
                  Additionally, Eros is passionate about video games and is working on game
                  development projects both in physical and digital mediums.
                </p>
              </div>
            </div>
            <div
              ref={drawerRef}
              className={`landing-panel landing-panel--sub landing-panel--sub-${
                drawerOpen ? 'open' : 'closed'
              } absolute top-0 right-0`}
            >
              {drawerOpen && (
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
              )}
              <div className="button-bar w-full">
                <a
                  href="mailto:erosdipede@gmail.com"
                  aria-label="Send me an email!"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2"
                >
                  <FiMail size={24} />
                </a>
                <a
                  href="https://github.com/ForkBombGIT"
                  aria-label="Find me on GitHub!"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/erosdipede"
                  aria-label="Connect with me on Linkedin!"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2"
                >
                  <FiLinkedin size={24} />
                </a>
                <button type="button" className="ml-auto" onClick={() => handleDrawerCollapse()}>
                  {drawerOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section px-4 desktop:px-0">
        <div className="section__content">
          <h2 className="mb-4">EXPERIENCE</h2>
          <div className="panel experience-panel">
            <ExperienceCard
              title="Full Stack Developer"
              company="Else Labs Inc."
              experiences={[
                'Lead the development of a web application using React.js to facilitate the extensive Oliver recipe creation process which improved the quality of life for recipe creators who previously solely relied on the mobile application.',
              ]}
              timeSpan="May, 2021 - Present."
            />
            <ExperienceCard
              title="Web Developer"
              company="J&E Design Co."
              experiences={[
                'Developed responsive pages and components using React.js with Tailwind CSS to create an attractive website to provide potential clients with information about the business',
                'Deployed a single page web application to Netlify with preview builds allowing developers to test changes prior to deploying to production',
                'Implemented an email sending API utilizing Node.js and various modules to provide potential customers or employees a means to contact the business',
              ]}
              timeSpan="October, 2019 - Present."
            />
            {expandExperiences && (
              <>
                <ExperienceCard
                  title="Teaching Assistant"
                  company="Carleton University"
                  experiences={[
                    'Facilitated office hours for students with questions regarding course material and assessments to better support their success in the course',
                    'Cooperated with the course professor and other teaching assistants to ensure marking efforts were consistent, honest, and efficient',
                    'Instructed workshops covering course concepts which were intended to aid students, and help them start on their assignments',
                  ]}
                  timeSpan="January, 2021 - April, 2021. September, 2019 - December, 2019."
                />
                <ExperienceCard
                  title="Software Developer"
                  company="IFS"
                  experiences={[
                    'Developed a variety of automated tests with Java for various IFS Maintenix clients such as UPS, Southwest Airlines, and AirFrance KLM to prevent problematic code changes from being merged into production',
                    'Implemented an end to end Java testing project for an IFS Maintenix military client to provide developers an environment to implement and run e2e tests',
                  ]}
                  timeSpan="January, 2020 - August, 2020."
                />
                <ExperienceCard
                  title="Web Developer"
                  company="Statistics Canada"
                  experiences={[
                    "Developed a variety of React.js components for a project called the 'Innovation Radar', a single page web application with the goal of promoting and facilitating innovation throughout Statistics Canada",
                    'Created various queries and mutations utilizing GraphQL to communicate with a PostgreSQL database to update, create, and retrieve data entries',
                    "Developed unit tests for the 'Innovation Radar' utilizing Cypress to test functionality throughout the application",
                  ]}
                  timeSpan="September, 2018 - December, 2018."
                />
                <ExperienceCard
                  title="Web Developer"
                  company="Canadian Food Inspection Agency"
                  experiences={[
                    'Developed an internal form catalog application utilizing a variety of tools including ASP.NET MVC 4 with C#, and other languages including Javascript, HTML, and CSS to provide CFIA employees a means to order physical copies of forms',
                    'Preformed quality assurance on various forms utilizing functional testing and unit testing to ensure that forms were both functioning properly, in addition to confirming that web pages were accessible according to WET 4 guidelines',
                  ]}
                  timeSpan="May, 2018 - August, 2018."
                />
                <ExperienceCard
                  title="Karate Instructor"
                  company="Prodigy Martial Arts"
                  experiences={[
                    'Instructed Karate classes for students 4 and up, teaching them lessons of both physical and mental benefits including self defense, confidence, discipline and respect',
                    'Cooperated with other instructors to create new and inventive ways to teach children traditional karate to keep them engaged in a fun way',
                  ]}
                  timeSpan="January, 2014 - August, 2017."
                />
              </>
            )}
            <div className="section__content__expand flex justify-center mb-2">
              <button type="button" onClick={() => handleExpandExperiences()}>
                {expandExperiences ? <FiChevronUp size={48} /> : <FiChevronDown size={48} />}
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="section px-4 desktop:px-0 flex">
        <div className="section__content">
          <h2 className="mb-4">PROJECTS</h2>
          <div className="panel projects-panel flex">
            <ProjectCard title="Scrambled Eggs" experiences={[]} containerClasses="w-1/2" />
            <ProjectCard title="String Beans" experiences={[]} containerClasses="w-1/2" />
            <ProjectCard title="Thompson Boiler Works" experiences={[]} containerClasses="w-1/2" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default LandingPage;
