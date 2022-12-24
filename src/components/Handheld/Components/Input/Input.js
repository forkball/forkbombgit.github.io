import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import { AiFillCaretUp, AiFillCaretDown, AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

function Input({ handleLeft, handleRight, handleUp, handleDown, Screen }) {
  const screenVariant = Screen !== undefined;
  return (
    <div
      className={`handheld-input flex flex-col w-full ${
        screenVariant ? 'handheld-input--horizontal' : ''
      }`}
    >
      <div
        className={`handheld-input__navigation flex justify-center self-center gap-2 ${
          screenVariant ? 'hidden' : 'flex'
        }`}
      >
        <div className="handheld-input__navigation__controls col-start-2 ">
          <div className="button-wrapper">
            <button
              className="font-roboto"
              type="button"
              aria-label="input_select"
              onClick={() => {}}
            >
              SELECT
            </button>
          </div>
        </div>
        <div className="handheld-input__navigation__controls col-start-2">
          <div className="button-wrapper">
            <button
              className="font-roboto"
              type="button"
              aria-label="input_start"
              onClick={() => {}}
            >
              START
            </button>
          </div>
        </div>
      </div>
      <div className="handheld-input__panel handheld-input__panel--input flex flex-row">
        <div
          className={`handheld-input__panel handheld-input__panel--left flex justify-center ${
            screenVariant ? 'items-center' : ''
          }`}
        >
          <div className="handheld-input__panel__controls grid grid-cols-3 grid-rows-3">
            <div className="handheld-input__panel__controls--a col-start-2">
              <div className="button-wrapper">
                <button
                  type="button"
                  aria-label="input_up"
                  onClick={handleUp}
                  className="flex justify-center items-center"
                >
                  <AiFillCaretUp size={32} />
                </button>
              </div>
            </div>
            <div className="handheld-input__panel__controls--b col-start-1 row-start-2">
              <div className="button-wrapper">
                <button
                  type="button"
                  aria-label="input_left"
                  onClick={handleLeft}
                  className="flex justify-center items-center"
                >
                  <AiFillCaretLeft size={32} />
                </button>
              </div>
            </div>
            <div className="handheld-input__panel__controls--c col-start-3 row-start-2">
              <div className="button-wrapper">
                <button
                  type="button"
                  aria-label="input_right"
                  onClick={handleRight}
                  className="flex justify-center items-center"
                >
                  <AiFillCaretRight size={32} />
                </button>
              </div>
            </div>
            <div className="handheld-input__panel__controls--d col-start-2 row-start-3">
              <div className="button-wrapper">
                <button
                  type="button"
                  aria-label="input_down"
                  onClick={handleDown}
                  className="flex justify-center items-center"
                >
                  <AiFillCaretDown size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`handheld-input__embedded-screen justify-center flex-col ${
            screenVariant ? 'flex' : 'hidden'
          }`}
        >
          <div className="handheld-input__embedded-screen__screen">{Screen}</div>
          <div className="handheld-input__navigation flex justify-center self-center gap-2">
            <div className="handheld-input__navigation__controls col-start-2 ">
              <div className="button-wrapper">
                <button
                  className="font-roboto"
                  type="button"
                  aria-label="input_select"
                  onClick={() => {}}
                >
                  SELECT
                </button>
              </div>
            </div>
            <div className="handheld-input__navigation__controls col-start-2">
              <div className="button-wrapper">
                <button
                  className="font-roboto"
                  type="button"
                  aria-label="input_start"
                  onClick={() => {}}
                >
                  START
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`handheld-input__panel handheld-input__panel--right ml-auto flex justify-center ${
            screenVariant ? 'items-center' : ''
          }`}
        >
          <div className="handheld-input__panel__controls flex justify-center items-center gap-2 tablet:gap-4">
            <div className="handheld-input__panel__controls--a rounded-full">
              <div className="button-wrapper items-center">
                <button
                  className="font-roboto"
                  type="button"
                  aria-label="input_b"
                  onClick={() => {}}
                >
                  B
                </button>
              </div>
            </div>
            <div className="handheld-input__panel__controls--b rounded-full">
              <div className="button-wrapper">
                <button
                  className="font-roboto"
                  type="button"
                  aria-label="input_a"
                  onClick={() => {}}
                >
                  A
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Input.propTypes = {
  handleLeft: PropTypes.func,
  handleRight: PropTypes.func,
  handleUp: PropTypes.func,
  handleDown: PropTypes.func,
  Screen: PropTypes.objectOf(PropTypes.object),
};

Input.defaultProps = {
  handleLeft: () => {},
  handleRight: () => {},
  handleUp: () => {},
  handleDown: () => {},
  Screen: undefined,
};

export default Input;
