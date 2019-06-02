import React from 'react';

const TeamProfile = (props) => {
  const { teamProfileImage, teamProfileTitle, teamProfileName, linkedIn } = props;
  return (
    <li className="team__list-item">
      <a href={linkedIn} target="_blank">
        <img
          className="team__list-img"
          src={teamProfileImage}
          alt={teamProfileName}
        />
      </a>
      <h2>{teamProfileName}</h2>
      <h3>{teamProfileTitle}</h3>
    </li>
  )
}

export default TeamProfile;