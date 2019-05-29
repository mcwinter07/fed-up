import React from 'react';

const TeamProfile = (props) => {
  const { teamProfileImage, teamProfileTitle, teamProfileName, linkedIn } = props;
  return (
    <li className="intro__list-item">
      <a href={linkedIn} target="_blank">
        <img className="intro__list-img" src={teamProfileImage} alt={teamProfileName}/>
      </a>
      <h2>{teamProfileName}</h2>
      <p>{teamProfileTitle}</p>
    </li>
  )
}

export default TeamProfile;