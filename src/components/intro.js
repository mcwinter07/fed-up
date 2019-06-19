import React from 'react';
import Icon from './Icon';
import Logo from '../../src/assets/logo-01.svg';

const Intro = () => {
  return (
    <section className="section-content section-content--intro">
      <Icon
        iconClass='intro__team-icon'
        iconSource={Logo}
      />
      <h1 className="section-header">HACK FED SQUARE</h1>
    </section>
  )
}

export default Intro;