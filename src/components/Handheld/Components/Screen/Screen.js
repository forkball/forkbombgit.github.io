import React from 'react';
import PropTypes from 'prop-types';
import image from '../../../../assets/me.png';
import './Screen.scss';

function Screen({ className }) {
  return (
    <div className={`handheld-screen flex flex-col justify-center items-center ${className}`}>
      <div className="handheld-screen__interface flex flex-col h-full font-pixel">
        <div className="handheld-screen__interface__navigation w-full h-24" />
        <div className="handheld-screen__interface__content">
          <div className="handheld-screen__interface__content__heading flex">
            <div className="flex flex-col gap-2">
              <h2 id="name">NAME/</h2>
              <p>EROS DI PEDE</p>
              <h2>ROLES/</h2>
              <p>FULLSTACK AND GAME DEVELOPER</p>
            </div>
            <img src={image} alt="me" />
          </div>
          <div className="handheld-screen__interface__content__body flex flex-col">
            <div className="handheld-screen__content__body flex flex-col text-left">
              <p>
                In all areas of the stack, Eros is well equipped to address any challenge, whether
                it be developing elegant, responsive websites, creating intuitive mobile application
                experiences, or building robust, efficient backend solutions.
              </p>
            </div>
          </div>
          <div className="handheld-screen__interface__content__page flex flex-col mt-auto items-end">
            <p>1/2</p>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

Screen.propTypes = {
  className: PropTypes.string,
};

Screen.defaultProps = {
  className: '',
};

export default Screen;
