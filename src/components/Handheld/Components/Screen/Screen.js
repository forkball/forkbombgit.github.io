/* eslint-disable no-unused-vars */
import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import image from '../../../../assets/me.png';
import './Screen.scss';
// import { MAXIMUM_SCREEN_HEIGHT } from '../../../../constants';

const Screen = forwardRef(({ className, panel, scrollDirection }, ref) => {
  useEffect(() => {
    // eslint-disable-next-line no-param-reassign
    ref.current.scrollTop = 0;
  }, [panel]);

  const renderPanel = () => {
    switch (panel) {
      // overview panel
      case 1:
        return (
          <div
            ref={ref}
            className="handheld-screen__interface__content flex flex-col h-full w-full overflow-y-auto"
          >
            <div className="handheld-screen__interface__content__body flex flex-col text-left gap-4">
              <div className="handheld-screen__interface__content__body__section">
                <h2>LANGUAGES/</h2>
                <ol className="list-disc list-inside">
                  <li>JAVASCRIPT</li>
                  <li>PYTHON</li>
                  <li>JAVA</li>
                  <li>C++</li>
                  <li>C#</li>
                  <li>HASKELL</li>
                </ol>
              </div>
              <div className="handheld-screen__interface__content__body__section">
                <h2>TOOLS/</h2>
                <ol className="list-disc list-inside">
                  <li>REACT.JS</li>
                  <li>REACT NATIVE</li>
                  <li>NODE.JS</li>
                  <li>DOCKER</li>
                  <li>CLOUD SERVICES</li>
                  <li>MONGODB</li>
                  <li>POSTGRESQL</li>
                </ol>
              </div>
              <div className="handheld-screen__interface__content__body__section">
                <h2>HOBBIES/</h2>
                <ol className="list-disc list-inside">
                  <li>ROCK CLIMBING</li>
                  <li>PHOTOGRAPHY</li>
                  <li>VIDEO GAMES</li>
                  <li>MUSIC</li>
                  <li>COMICS</li>
                  <li>FILM</li>
                </ol>
              </div>
            </div>
            <div className="handheld-screen__interface__content__page flex mt-auto">
              <p>{scrollDirection}</p>
              <p className="ml-auto">2/2</p>
            </div>
          </div>
        );
      // landing panel
      default:
        return (
          <div
            ref={ref}
            className="handheld-screen__interface__content flex flex-col h-full w-full overflow-y-auto"
          >
            <div
              id="landing-panel"
              className="handheld-screen__interface__content__heading flex flex-row"
            >
              <div className="flex flex-col gap-2">
                <h2>NAME/</h2>
                <p id="name">EROS DI PEDE</p>
                <h2>ROLES/</h2>
                <p>FULLSTACK AND GAME DEVELOPER</p>
              </div>
              <img src={image} alt="me" />
            </div>
            <div className="handheld-screen__interface__content__body flex flex-col">
              <div className="handheld-screen__content__body flex flex-col text-left">
                <p>
                  In all areas of the stack, Eros is well equipped to address any challenge, whether
                  it be deve&shy;loping elegant, responsive websites, creating intuitive mobile
                  application experien&shy;ces, or building robust, efficient backend solutions.
                </p>
              </div>
            </div>
            <div className="handheld-screen__interface__content__page flex mt-auto">
              <p>{scrollDirection}</p>
              <p className="ml-auto">1/2</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`handheld-screen flex flex-col justify-center items-center ${className}`}>
      <div className="handheld-screen__interface flex flex-col h-full font-pixel">
        {renderPanel()}
        <div />
      </div>
    </div>
  );
});

Screen.propTypes = {
  className: PropTypes.string,
  panel: PropTypes.number,
  scrollDirection: PropTypes.string,
};

Screen.defaultProps = {
  className: '',
  panel: 0,
  scrollDirection: 'DOWN',
};

export default Screen;
