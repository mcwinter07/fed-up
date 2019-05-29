import React from 'react';
import Icon from './Icon';
import Logo from '../../src/assets/logo.svg';

const Intro = () => {
  return (
    <div className="intro">
      <Icon iconClass='intro__team-icon' iconSource={Logo} />
    </div>
  )
}

export default Intro;