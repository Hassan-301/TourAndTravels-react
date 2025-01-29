import React from 'react';
import './styles/Rooms.css';

const rooms = [
  {
    id: 1,
    title: 'Family Room',
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                  there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
                  the Semantics, a large language ocean. A small river named Duden flows by their place and 
                  supplies it with the necessary regeliialia.`,
    image: '/assets/hero_1.webp',
    reverse: false,
  },
  {
    id: 2,
    title: 'Presidential Room',
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                  there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
                  the Semantics, a large language ocean. A small river named Duden flows by their place and 
                  supplies it with the necessary regeliialia.`,
    image: '/assets/img_1.webp',
    reverse: true,
  }
];

const Rooms = () => {
  return (
    <section className="rooms-section">
      {rooms.map((room, index) => (
        <div key={room.id} className={`room-container ${room.reverse ? 'reverse' : ''}`}>
          <div className="room-image">
            <img src={room.image} alt={room.title} />
          </div>
          <div className="room-content">
            <h2 className="room-title">{room.title}</h2>
            <p className="room-description">{room.description}</p>
            <button className="room-btn">Learn More</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rooms;
