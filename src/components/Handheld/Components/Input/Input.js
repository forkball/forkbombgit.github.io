import React from 'react';
import './Input.scss';

function Input() {
  return (
    <div className="handheld-input flex flex-row gap-8 justify-center items-center">
      <div className="handheld-input__panel handheld-input__panel--left w-1/2 h-full flex justify-center">
        <div className="handheld-input__panel__controls grid grid-cols-3 grid-rows-3">
          <div className="handheld-input__panel__controls--a col-start-2" />
          <div className="handheld-input__panel__controls--b col-start-1 row-start-2" />
          <div className="handheld-input__panel__controls--c col-start-3 row-start-2" />
          <div className="handheld-input__panel__controls--d col-start-2 row-start-3" />
        </div>
      </div>
      <div className="handheld-input__panel handheld-input__panel--right w-1/2 h-full flex justify-center">
        <div className="handheld-input__panel__controls flex justify-center items-center gap-4">
          <div className="handheld-input__panel__controls--a rounded-full" />
          <div className="handheld-input__panel__controls--b rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Input;
