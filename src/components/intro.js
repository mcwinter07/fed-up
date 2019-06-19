import React from 'react';
import Icon from './Icon';
import Logo from '../../src/assets/logo.svg';

const Intro = () => {
  return (
    <section className="intro">
      <Icon
        iconClass='intro__team-icon'
        iconSource={Logo}
      />
    </section>
  )
}

export default Intro;