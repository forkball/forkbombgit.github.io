import React from 'react';
import PropTypes from 'prop-types';
import { Screen } from '../Components';
import Input from '../Components/Input';
import './Device.scss';

function Device({ classes }) {
  return (
    <div className={`handheld flex flex-col shadow-lg gap-2 ${classes}`}>
      <div className="handheld__screen flex justify-center">
        <Screen />
      </div>
      <div className="handheld__input flex">
        <Input />
      </div>
    </div>
  );
}

Device.propTypes = {
  classes: PropTypes.string,
};

Device.defaultProps = {
  classes: '',
};

export default Device;
