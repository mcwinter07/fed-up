import React from 'react';
import img from '../assets/images/madeby.jpg';

const MadeBy = () => {
  return (
    <footer className="made-by">
      <a href="https://github.com/linda-lai/fed-up">
        <img src={img} alt="Site created by Michael and Linda"/>
      </a>
      <p>Site created by
        {" "}
        <a href="https://github.com/mcwinter07">Michael Winter</a>
        {" and "}
        <a href="https://github.com/linda-lai">Linda Lai</a>
      </p>
    </footer>
  )
}

export default MadeBy;