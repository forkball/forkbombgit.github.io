import React from 'react';
import './Input.scss';

function Input() {
  return (
    <div className="handheld-input flex flex-col w-full">
      <div className="handheld-input__navigation flex justify-center gap-2">
        <div className="handheld-input__navigation__controls col-start-2 shadow-lg" />
        <div className="handheld-input__navigation__controls col-start-2 shadow-lg" />
      </div>
      <div className="handheld-input__panel handheld-input__panel--input flex flex-row">
        <div className="handheld-input__panel handheld-input__panel--left flex justify-center">
          <div className="handheld-input__panel__controls grid grid-cols-3 grid-rows-3">
            <div className="handheld-input__panel__controls--a col-start-2 shadow-lg" />
            <div className="handheld-input__panel__controls--b col-start-1 row-start-2 shadow-lg" />
            <div className="handheld-input__panel__controls--c col-start-3 row-start-2 shadow-lg" />
            <div className="handheld-input__panel__controls--d col-start-2 row-start-3 shadow-lg" />
          </div>
        </div>
        <div className="handheld-input__panel handheld-input__panel--right ml-auto flex justify-center">
          <div className="handheld-input__panel__controls flex justify-center items-center gap-4">
            <div className="handheld-input__panel__controls--a rounded-full shadow-lg" />
            <div className="handheld-input__panel__controls--b rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
