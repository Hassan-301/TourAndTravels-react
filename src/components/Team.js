import React from 'react';
import './styles/Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Vince Richardson',
    position: 'CEO, CO-FOUNDER',
    image: '/assets/person_2.webp'
  },
  {
    id: 2,
    name: 'Jean Love',
    position: 'CTO, CO-FOUNDER',
    image: '/assets/person_1.webp'
  },
  {
    id: 3,
    name: 'Jeff Stark',
    position: 'MARKETER, CO-FOUNDER',
    image: '/assets/person_3.webp'
  },
  {
    id: 4,
    name: 'Vince Richardson',
    position: 'CEO, CO-FOUNDER',
    image: '/assets/person_2.webp'
  },
  {
    id: 5,
    name: 'Jean Love',
    position: 'CTO, CO-FOUNDER',
    image: '/assets/person_1.webp'
  },
  {
    id: 6,
    name: 'Jeff Stark',
    position: 'MARKETER, CO-FOUNDER',
    image: '/assets/person_3.webp'
  }
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Team</h2>
      <p className="team-description">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.
      </p>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <p className="team-position">{member.position}</p>
              <h3 className="team-name">{member.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
