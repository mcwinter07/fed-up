import React from 'react';
import img from '../assets/images/madeby.jpg';

const MadeBy = () => {
  return (
    <footer className="made-by">
      <a href="https://github.com/linda-lai/fed-up">
        <img src={img} alt="Site created by Michael Winter and Linda Lai"/>
      </a>
      <p>Site created by
        {"  "}
        <a className="github-link" href="https://github.com/mcwinter07">Michael Winter</a>
        {" and "}
        <a className="github-link" href="https://github.com/linda-lai">Linda Lai</a>
      </p>
    </footer>
  )
}

export default MadeBy;