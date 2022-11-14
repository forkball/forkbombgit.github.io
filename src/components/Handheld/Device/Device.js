import React from 'react';
import { Screen } from '../Components';
import Input from '../Components/Input';
import './Device.scss';

function Device() {
  return (
    <div className="handheld flex flex-col h-full shadow-lg gap-8">
      <div className="handheld__screen flex justify-center">
        <Screen />
      </div>
      <div className="handheld__input flex justify-center">
        <Input />
      </div>
    </div>
  );
}

export default Device;
