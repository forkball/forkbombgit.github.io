import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Panels.scss';

// eslint-disable-next-line no-unused-vars
const SocialPanel = forwardRef(({ scrollDirection }, ref) => {
  return (
    <div
      ref={ref}
      className="handheld-screen__interface__content panel-social flex flex-col h-full w-full overflow-y-auto"
    >
      <div className="handheld-screen__interface__content__body flex flex-col text-left flex-1">
        <div className="flex flex-col flex-1 gap-2">
          <h2>TWITTER/</h2>
          <a href="https://twitter.com/forkball_vg" target="_blank" rel="noreferrer">
            FORKBALL_VG
          </a>
          <h2 className="break-all">MASTODON/</h2>
          <a href="https://mastodon.gamedev.place/@forkball" target="_blank" rel="noreferrer">
            FORKBALL
          </a>
          <h2>LINKEDIN/</h2>
          <a href="https://www.linkedin.com/in/erosdipede/" target="_blank" rel="noreferrer">
            EROS DI PEDE
          </a>
          <h2>EMAIL/</h2>
          <p>EROSDIPEDE [AT] GMAIL [DOT] COM</p>
        </div>
      </div>
      <div className="handheld-screen__interface__content__page flex mt-auto">
        {/* <p>{scrollDirection}</p> */}
        <p className="ml-auto">1/1</p>
      </div>
    </div>
  );
});

SocialPanel.propTypes = {
  scrollDirection: PropTypes.string,
};

SocialPanel.defaultProps = {
  scrollDirection: '',
};

export default SocialPanel;
