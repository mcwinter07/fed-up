import React from 'react';

const TeamProfile = (props) => {
  const { teamProfileImage, teamProfileTitle, teamProfileName, teamProfileIcon, linkedIn, modifierClass } = props;
  return (
    <li className="team__list-item">
      <a
        href={linkedIn}
        target="_blank"
        rel="noreferrer noopener"
        className={`team__list-link team__list-link--${modifierClass}`}
      >
        <img
          className="team__list-link__img"
          src={teamProfileImage}
          alt={teamProfileName}
        />
      </a>
      <div className="team__list-icon">
        <object type="image/svg+xml" data={teamProfileIcon}>
          <img src={teamProfileIcon} alt=""/>
        </object>
      </div>
      <h2>{teamProfileName}</h2>
      <h4>{teamProfileTitle}</h4>
    </li>
  )
}

export default TeamProfile;