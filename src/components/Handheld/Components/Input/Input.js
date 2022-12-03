import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input({ handleLeft, handleRight, handleUp, handleDown }) {
  return (
    <div className="handheld-input flex flex-col w-full">
      <div className="handheld-input__navigation flex justify-center gap-2">
        <div className="handheld-input__navigation__controls col-start-2 shadow-lg" />
        <div className="handheld-input__navigation__controls col-start-2 shadow-lg" />
      </div>
      <div className="handheld-input__panel handheld-input__panel--input flex flex-row">
        <div className="handheld-input__panel handheld-input__panel--left flex justify-center">
          <div className="handheld-input__panel__controls grid grid-cols-3 grid-rows-3">
            <div className="handheld-input__panel__controls--a col-start-2 shadow-lg">
              <button type="button" aria-label="up" onClick={handleUp} className="w-full h-full" />
            </div>
            <div className="handheld-input__panel__controls--b col-start-1 row-start-2 shadow-lg">
              <button
                type="button"
                aria-label="left"
                onClick={handleLeft}
                className="w-full h-full"
              />
            </div>
            <div className="handheld-input__panel__controls--c col-start-3 row-start-2 shadow-lg">
              <button
                type="button"
                aria-label="right"
                onClick={handleRight}
                className="w-full h-full"
              />
            </div>
            <div className="handheld-input__panel__controls--d col-start-2 row-start-3 shadow-lg">
              <button
                type="button"
                aria-label="down"
                onClick={handleDown}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="handheld-input__panel handheld-input__panel--right ml-auto flex justify-center">
          <div className="handheld-input__panel__controls flex justify-center items-center gap-2 tablet:gap-4">
            <div className="handheld-input__panel__controls--a rounded-full shadow-lg" />
            <div className="handheld-input__panel__controls--b rounded-full shadow-lg" />
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
