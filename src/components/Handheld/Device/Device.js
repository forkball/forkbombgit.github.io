import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Screen } from '../Components';
import Input from '../Components/Input';
import './Device.scss';

const NUMBER_OF_PANELS = 1;
function Device({ classes }) {
  const [panel, setPanel] = useState(0);
  const panelRef = useRef(null);

  const scrollSpeed = 25;
  const scrollDistance = 250;
  const scrollStep = 25;

  const scroll = (direction, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      panelRef.current.scrollTop += step * direction;
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  const onLeftPress = () => {
    if (panel > 0) setPanel(panel - 1);
  };

  const onRightPress = () => {
    if (panel < NUMBER_OF_PANELS) setPanel(panel + 1);
  };

  const onUpPress = () => {
    if (panelRef.current) {
      scroll(-1, scrollSpeed, scrollDistance, scrollStep);
    }
  };

  const onDownPress = () => {
    if (panelRef.current) {
      scroll(1, scrollSpeed, scrollDistance, scrollStep);
    }
  };

  return (
    <div className={`handheld flex flex-col shadow-lg ${classes}`}>
      <div className="handheld__screen flex justify-center">
        <Screen ref={panelRef} panel={panel} />
      </div>
      <div className="handheld__input flex flex-col w-full self-center">
        <Input
          handleLeft={onLeftPress}
          handleRight={onRightPress}
          handleDown={onDownPress}
          handleUp={onUpPress}
        />
        <h1 className="text-center">forkball.games</h1>
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
