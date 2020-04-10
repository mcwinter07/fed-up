import React from 'react';
import Icon from './Icon';
import Logo from '../../src/assets/logo-01.png';

const Intro = () => {
  const scrollToStart = () => {
    const clientWindowHeight = document.documentElement.clientHeight
    window.scrollTo({
      top: clientWindowHeight,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <section className="section-content section-content--intro">
      {/* TODO: Reset base styles of button element */}
      <button
        onClick={scrollToStart}
      >
        <Icon
          iconClass='intro__team-icon'
          iconSource={Logo}
        />
      </button>
      <h1 className="section-header">HACK FED SQUARE</h1>
    </section>
  )
}

export default Intro;
