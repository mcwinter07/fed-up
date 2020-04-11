import React from 'react';
import TeamProfile from './TeamProfile';
import profileImgLinda from '../assets/images/team-linda.jpeg';
import profileImgFotima from '../assets/images/team-fotima.jpg';
import profileImgTim from '../assets/images/team-tim.jpg';
import profileImgTj from '../assets/images/team-tj.jpg';
import profileImgTushara from '../assets/images/team-tushara.jpg';
import profileImgWinter from '../assets/images/team-winter.jpg';

import profileIconBeaker from '../assets/icons/beaker.svg';
import profileIconBrain from '../assets/icons/brain.svg';
import profileIconPencil from '../assets/icons/pencil.svg';
import profileIconSyntax from '../assets/icons/syntax.svg';
import profileIconWorld from '../assets/icons/world.svg';

const Team = () => {
  const teamFedUp = {
    teamMembers: [
      {
        name: 'Linda',
        profileImage: profileImgLinda,
        title: 'Full-Stack Developer',
        icon: profileIconSyntax,
        linkedIn: 'https://www.linkedin.com/in/lindalai/'
      },
      {
        name: 'Fotima',
        profileImage: profileImgFotima,
        title: 'UX Designer',
        icon: profileIconPencil,
        linkedIn: 'https://www.linkedin.com/in/fotimaal/'
      },
      {
        name: 'Tim',
        profileImage: profileImgTim,
        title: 'Urban Planner',
        icon: profileIconBrain,
        linkedIn: 'https://www.linkedin.com/in/tim-edward-hays/'
      },
      {
        name: 'TJ',
        profileImage: profileImgTj,
        title: 'Brand Activation Specialist',
        icon: profileIconWorld,
        linkedIn: 'https://www.linkedin.com/in/tanyajoycarroll/'
      },
      {
        name: 'Tushara',
        profileImage: profileImgTushara,
        title: 'Chemical Engineer',
        icon: profileIconBeaker,
        linkedIn: 'https://www.linkedin.com/in/tushara-rose/'
      },
      {
        name: 'Winter',
        profileImage: profileImgWinter,
        title: 'Front-End Developer',
        icon: profileIconSyntax,
        linkedIn: 'https://www.linkedin.com/in/mcwinter/'
      }
    ]
  }

  return (
    <section className="section-content section-content--the-team">
      <header className="section-header">
        <h1>MEET THE TEAM</h1>
      </header>
      <ul className="team__list">
        {teamFedUp.teamMembers.map((member, index) => {
          const { name, profileImage, title, icon, linkedIn } = member

          const modifier = index => {
            const position = index + 1
            if (position % 3 === 0) {
              return "child-3"
            } else if ((position + 1) % 3 === 0) {
              return "child-2"
            } else {
              return "child-1"
            }
          }
          return (
          <TeamProfile
            modifierClass={modifier(index)}
            teamProfileImage={profileImage}
            linkedIn={linkedIn}
            teamProfileName={name}
            teamProfileTitle={title}
            teamProfileIcon={icon}
            key={name}
          />
        )})
      }
      </ul>
    </section>
  )
}

export default Team;