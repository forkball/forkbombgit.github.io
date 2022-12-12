import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Screen } from '../Components';
import Input from '../Components/Input';
import './Device.scss';

const NUMBER_OF_PANELS = 1;
function Device({ classes }) {
  const [panel, setPanel] = useState(0);
  const panelRef = useRef(null);

  const onLeftPress = () => {
    if (panel > 0) setPanel(panel - 1);
  };

  const onRightPress = () => {
    if (panel < NUMBER_OF_PANELS) setPanel(panel + 1);
  };

  const onUpPress = () => {
    if (panelRef.current) {
      panelRef.current.scrollTop -= 100;
    }
  };

  const onDownPress = () => {
    if (panelRef.current) {
      panelRef.current.scrollTop += 100;
    }
  };

  return (
    <div className={`handheld flex flex-col shadow-lg gap-2 ${classes}`}>
      <div className="handheld__screen flex justify-center">
        <Screen ref={panelRef} panel={panel} />
      </div>
      <h1 className="mr-auto bottom-0 left-0 hidden tablet:block fixed">forkball.games</h1>
      <div className="handheld__input flex mt-auto">
        <Input
          handleLeft={onLeftPress}
          handleRight={onRightPress}
          handleDown={onDownPress}
          handleUp={onUpPress}
        />
      </div>
      <h1 className="text-center block tablet:hidden">forkball.games</h1>
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
