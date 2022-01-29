import React from 'react';

export default function TeamProfile( { data } ) {
  return(
      <main className="team-profile">
          <h1 className="team-profile__name"></h1>
          <img src="" alt="" className="team-profile__icon" />
          <h2 className="team-profile__label">Job Title</h2>
          <h3 className="team-profile__text">{data.name}</h3>
          <h2 className="team-profile__label">Milestone</h2>
          <h3 className="team-profile__text"></h3>
          <h2 className="team-profile__label">Description</h2>
          <h3 className="team-profile__text"></h3>
      </main>
  )
}
