import React from 'react';
import TeamProfile from './TeamProfile';
import profileImgLinda from '../assets/images/team-linda.jpg';
import profileImgFotima from '../assets/images/team-fotima.jpg';
import profileImgTim from '../assets/images/team-tim.jpg';
import profileImgTj from '../assets/images/team-tj.jpg';
import profileImgTushara from '../assets/images/team-tushara.jpg';
import profileImgWinter from '../assets/images/team-winter.jpg';

const Team = () => {
  const teamFedUp = {
    teamMembers: [
      {
        name: 'Linda',
        profileImage: profileImgLinda,
        title: 'Full-Stack Developer',
        linkedIn: 'https://www.linkedin.com/in/lindalai/'
      },
      {
        name: 'Fotima',
        profileImage: profileImgFotima,
        title: 'UX Designer',
        linkedIn: 'https://www.linkedin.com/in/fotimaal/'
      },
      {
        name: 'Tim',
        profileImage: profileImgTim,
        title: 'Urban Planner',
        linkedIn: 'https://www.linkedin.com/in/tim-edward-hays/'
      },
      {
        name: 'TJ',
        profileImage: profileImgTj,
        title: 'Brand Activation Specialist',
        linkedIn: 'https://www.linkedin.com/in/tanyajoycarroll/'
      },
      {
        name: 'Tushara',
        profileImage: profileImgTushara,
        title: 'Chemical Engineer',
        linkedIn: 'https://www.linkedin.com/in/tushara-rose/'
      },
      {
        name: 'Winter',
        profileImage: profileImgWinter,
        title: 'Front-Stack Developer',
        linkedIn: 'https://www.linkedin.com/in/mcwinter/'
      }
    ]
  }

  return (
    <section className="section-content section-content--the-team">
      <div className="section-header__wrapper">
        <h1 className="section-header">MEET THE TEAM</h1>
      </div>
      <ul className="team__list">
        {teamFedUp.teamMembers.map(member => {
          const { name, profileImage, title, linkedIn } = member
          return (
          <TeamProfile
            teamProfileImage={profileImage}
            linkedIn={linkedIn}
            teamProfileName={name}
            teamProfileTitle={title}
            key={name}
          />
        )})
      }
      </ul>
    </section>
  )
}

export default Team;