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
      <button
        onClick={scrollToStart}
      >
        <Icon
          iconClass='intro__team-icon'
          iconSource={Logo}
        />
      </button>
      <header className="section-homepage">
        <h1 className="home-header">HACK FED SQUARE</h1>
      </header>
    </section>
  )
}

export default Intro;
