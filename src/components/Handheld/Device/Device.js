import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Screen } from '../Components';
import Input from '../Components/Input';
import './Device.scss';

const NUMBER_OF_PANELS = 1;
function Device({ classes }) {
  const [panel, setPanel] = useState(0);

  const onLeftPress = () => {
    if (panel > 0) setPanel(panel - 1);
  };

  const onRightPress = () => {
    if (panel < NUMBER_OF_PANELS) setPanel(panel + 1);
  };

  return (
    <div className={`handheld flex flex-col shadow-lg gap-2 ${classes}`}>
      <div className="handheld__screen flex justify-center">
        <Screen panel={panel} />
      </div>
      <div className="handheld__input flex">
        <Input handleLeft={onLeftPress} handleRight={onRightPress} />
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
