import React from 'react';
import img from '../assets/images/madeby.jpg';

const MadeBy = () => {
  return (
    <div className="made-by">
      <a href="https://github.com/linda-lai/fed-up">
        <img src={img} alt="Site created by Michael and Linda"/>
      </a>
      <p>Site created by Michael Winter and Linda Lai</p>
    </div>
  )
}

export default MadeBy;