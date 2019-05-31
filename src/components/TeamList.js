import React from 'react';
import TeamProfile from './TeamProfile';
import profileImgLinda from '../assets/images/team-linda.jpeg';
import profileImgFotima from '../assets/images/team-fotima.jpeg';
import profileImgTim from '../assets/images/team-tim.jpeg';
import profileImgTj from '../assets/images/team-tj.jpeg';
import profileImgTushara from '../assets/images/team-tushara.jpeg';
import profileImgWinter from '../assets/images/team-winter.jpeg';

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

  console.log(teamFedUp)
  return (
    <div>
      <h1>Meet the Team</h1>
      <ul className="intro__list">
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
    </div>
  )
}

export default Team;