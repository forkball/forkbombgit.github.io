import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input({ handleLeft, handleRight, handleUp, handleDown }) {
  return (
    <div className="handheld-input flex flex-col w-full">
      <div className="handheld-input__navigation flex justify-center self-center gap-2">
        <div className="handheld-input__navigation__controls col-start-2 ">
          <div className="button-wrapper">
            <button type="button" aria-label="input_select" onClick={() => {}} />
          </div>
        </div>
        <div className="handheld-input__navigation__controls col-start-2">
          <div className="button-wrapper">
            <button type="button" aria-label="input_start" onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className="handheld-input__panel handheld-input__panel--input flex flex-row">
        <div className="handheld-input__panel handheld-input__panel--left flex justify-center">
          <div className="handheld-input__panel__controls grid grid-cols-3 grid-rows-3">
            <div className="handheld-input__panel__controls--a col-start-2">
              <div className="button-wrapper">
                <button type="button" aria-label="input_up" onClick={handleUp} />
              </div>
            </div>
            <div className="handheld-input__panel__controls--b col-start-1 row-start-2">
              <div className="button-wrapper">
                <button type="button" aria-label="input_left" onClick={handleLeft} />
              </div>
            </div>
            <div className="handheld-input__panel__controls--c col-start-3 row-start-2">
              <div className="button-wrapper">
                <button type="button" aria-label="input_right" onClick={handleRight} />
              </div>
            </div>
            <div className="handheld-input__panel__controls--d col-start-2 row-start-3">
              <div className="button-wrapper">
                <button type="button" aria-label="input_down" onClick={handleDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="handheld-input__panel handheld-input__panel--right ml-auto flex justify-center">
          <div className="handheld-input__panel__controls flex justify-center items-center gap-2 tablet:gap-4">
            <div className="handheld-input__panel__controls--a rounded-full">
              <div className="button-wrapper items-center">
                <button type="button" aria-label="input_b" onClick={() => {}} />
              </div>
            </div>
            <div className="handheld-input__panel__controls--b rounded-full">
              <div className="button-wrapper">
                <button type="button" aria-label="input_a" onClick={() => {}} />
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
};

Input.defaultProps = {
  handleLeft: () => {},
  handleRight: () => {},
  handleUp: () => {},
  handleDown: () => {},
};

export default Input;
