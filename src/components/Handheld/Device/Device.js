import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Screen } from '../Components';
import Input from '../Components/Input';
import './Device.scss';

const NUMBER_OF_PANELS = 1;
const MINIMUM_HEIGHT = 900;
const MAXIMUM_WIDTH = 728;
function Device({ classes }) {
  const panelRef = useRef(null);

  const [panel, setPanel] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

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
    else setPanel(NUMBER_OF_PANELS);
  };

  const onRightPress = () => {
    if (panel < NUMBER_OF_PANELS) setPanel(panel + 1);
    else setPanel(0);
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

  const renderVerticalDevice = () => (
    <div className={`handheld flex flex-col shadow-lg ${classes}`}>
      <div className="handheld__screen flex justify-center">
        <Screen ref={panelRef} panel={panel} />
      </div>
      <div className="handheld__input flex flex-col w-full h-full self-center">
        <Input
          handleLeft={onLeftPress}
          handleRight={onRightPress}
          handleDown={onDownPress}
          handleUp={onUpPress}
        />
        {/* <h1 className="mt-auto">forkball.games</h1> */}
      </div>
    </div>
  );

  const renderHorizontalDevice = () => (
    <div className={`handheld handheld--horizontal flex flex-col shadow-lg ${classes}`}>
      <div className="handheld__input flex flex-col w-full h-full self-center items-center">
        <Input
          handleLeft={onLeftPress}
          handleRight={onRightPress}
          handleDown={onDownPress}
          handleUp={onUpPress}
          Screen={<Screen ref={panelRef} panel={panel} />}
        />
        {/* <h1 className="mt-auto w-full">forkball.games</h1> */}
      </div>
    </div>
  );

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);

  if (windowHeight < MINIMUM_HEIGHT && windowWidth > MAXIMUM_WIDTH) return renderHorizontalDevice();
  return renderVerticalDevice();
}

Device.propTypes = {
  classes: PropTypes.string,
};

Device.defaultProps = {
  classes: '',
};

export default Device;
