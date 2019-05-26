import React from 'react'

export default function intro() {
  return (
    <div className="intro">
      <img className="intro__team-icon" src={require('../assets/icon.svg')}alt=""/>
      <h1>Meet the Team</h1>
      <ul className="intro__list">
        <li className="intro__list-item">
          <div className="intro__list-img"></div>
          <h2>Linda</h2>
        </li>
        <li className="intro__list-item">
          <div className="intro__list-img"></div>
          <h2>Fotima</h2>
        </li>
        <li className="intro__list-item">
          <div className="intro__list-img"></div>
          <h2>Tim</h2>
        </li>
        <li className="intro__list-item">
          <div className="intro__list-img"></div>
          <h2>TJ</h2>
        </li>
        <li className="intro__list-item">
          <div className="intro__list-img"></div>
          <h2>Tushara</h2>
        </li>
        <li className="intro__list-item">
        <div className="intro__list-img"></div>
          <h2>Michael</h2>
        </li>
      </ul>
    </div>
  )
}
