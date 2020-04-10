import React from 'react';

const TeamProfile = (props) => {
  const { teamProfileImage, teamProfileTitle, teamProfileName, teamProfileIcon, linkedIn } = props;
  return (
    <li className="team__list-item">
        <a href={linkedIn} target="_blank" className="team__list-link">
          <img
            className="team__list-link__img"
            src={teamProfileImage}
            alt={teamProfileName}
          />
        {/* <div className="team__list-icon">
          <object type="image/svg+xml" data={teamProfileIcon}>
            <img src={teamProfileIcon} alt=""/>
          </object>
        </div> */}
        </a>
      <h2>{teamProfileName}</h2>
      <h3>{teamProfileTitle}</h3>
    </li>
  )
}

export default TeamProfile;