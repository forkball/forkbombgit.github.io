import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Screen } from '../Components';
import Input from '../Components/Input';
import './Device.scss';

const NUMBER_OF_PANELS = 1;
const MINIMUM_HORIZONTAL_VIEW_HEIGHT = 900;
const MAXIMUM_HORIZONTAL_VIEW_WIDTH = 728;
const MAXIMUM_MENU_INDEX = 1;
function Device({ classes }) {
  const panelRef = useRef(null);

  const [panel, setPanel] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const [menuIndex, setMenuIndex] = useState(0);
  const [panelSet, setPanelSet] = useState(0);
  const [panelScrollDir, setPanelScrollDir] = useState('DOWN');
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const scrollSpeed = 25;
  const scrollStep = 25;
  const scrollBoundaryThreshold = 50;

  // handle vertical scroll behaviour
  const scroll = (direction, speed, distance, step) => {
    let scrollAmount = 0;
    const { scrollTop, offsetHeight, scrollHeight } = panelRef.current;
    const slideTimer = setInterval(() => {
      panelRef.current.scrollTop += step * direction;
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
        // change scroll direction text
        const scrollPosition = Math.max(0, scrollHeight - (offsetHeight + scrollTop + distance));
        if (scrollPosition < scrollBoundaryThreshold) {
          if (direction === 1) setPanelScrollDir('UP');
          else setPanelScrollDir('DOWN');
        }
      }
    }, speed);
  };

  const onLeftPress = () => {
    if (!showMenu) {
      setPanelScrollDir('DOWN');
      if (panel > 0) setPanel(panel - 1);
      else setPanel(NUMBER_OF_PANELS);
    }
  };

  const onRightPress = () => {
    if (!showMenu) {
      setPanelScrollDir('DOWN');
      if (panel < NUMBER_OF_PANELS) setPanel(panel + 1);
      else setPanel(0);
    }
  };

  const onUpPress = () => {
    if (!showMenu) {
      if (panelRef.current) {
        const scrollDistance = panelRef.current.scrollHeight * 0.33;
        scroll(-1, scrollSpeed, scrollDistance, scrollStep);
      }
    } else if (menuIndex > 0) setMenuIndex(menuIndex - 1);
  };

  const onDownPress = () => {
    if (!showMenu) {
      if (panelRef.current) {
        const scrollDistance = panelRef.current.scrollHeight * 0.33;
        scroll(1, scrollSpeed, scrollDistance, scrollStep);
      }
    } else if (menuIndex < MAXIMUM_MENU_INDEX) setMenuIndex(menuIndex + 1);
  };

  const onStartPress = () => {
    setShowMenu(!showMenu);
  };

  const onAButtonPress = (index = -1) => {
    if (showMenu) {
      let mI = menuIndex;
      if (index >= 0) mI = index;
      setPanelSet(mI);
      setShowMenu(false);
      setPanel(0);
    }
  };

  const onBButtonPress = () => {
    if (showMenu) setShowMenu(false);
  };

  const menuControls = [
    () => {
      setMenuIndex(0);
      onAButtonPress(0);
    },
    () => {
      setMenuIndex(1);
      onAButtonPress(1);
    },
  ];

  const renderVerticalDevice = () => (
    <div className={`handheld flex flex-col shadow-lg ${classes}`}>
      <h1 className="mt-auto w-full">forkball.games</h1>
      <div className="handheld__screen flex justify-center">
        <Screen
          ref={panelRef}
          panel={panel}
          panelSet={panelSet}
          scrollDirection={panelScrollDir}
          showMenu={showMenu}
          menuIndex={menuIndex}
          menuControls={menuControls}
        />
      </div>
      <div className="handheld__input flex flex-col w-full h-full self-center">
        <Input
          handleLeft={onLeftPress}
          handleRight={onRightPress}
          handleDown={onDownPress}
          handleUp={onUpPress}
          handleStart={onStartPress}
          handleA={onAButtonPress}
          handleB={onBButtonPress}
        />
      </div>
    </div>
  );

  const renderHorizontalDevice = () => (
    <div className={`handheld handheld--horizontal flex flex-col shadow-lg ${classes}`}>
      <h1 className="w-full self-center">forkball.games</h1>
      <div className="handheld__input flex flex-col w-full h-full self-center items-center">
        <Input
          handleLeft={onLeftPress}
          handleRight={onRightPress}
          handleDown={onDownPress}
          handleUp={onUpPress}
          handleStart={onStartPress}
          handleA={onAButtonPress}
          handleB={onBButtonPress}
          Screen={
            <Screen
              ref={panelRef}
              panel={panel}
              panelSet={panelSet}
              scrollDirection={panelScrollDir}
              showMenu={showMenu}
              menuIndex={menuIndex}
              menuControls={menuControls}
            />
          }
        />
      </div>
    </div>
  );

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);

  if (windowHeight < MINIMUM_HORIZONTAL_VIEW_HEIGHT && windowWidth > MAXIMUM_HORIZONTAL_VIEW_WIDTH)
    return renderHorizontalDevice();
  return renderVerticalDevice();
}

Device.propTypes = {
  classes: PropTypes.string,
};

Device.defaultProps = {
  classes: '',
};

export default Device;
