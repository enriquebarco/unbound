import React from 'react';
import Icon from "../../assets/Icons/user.png"
import "./TeamProfile.scss"
import 'animate.css';

export default function TeamProfile( { data } ) {
  return(
      <main className="team-profile animate__animated animate__fadeInLeft">
          <h1 className="team-profile__name">{data[0].name}</h1>
          <img src={Icon} alt="profile icon" className="team-profile__icon" />
          <h2 className="team-profile__label">Job Title</h2>
          <h3 className="team-profile__text">{data[0].jobTitle}</h3>
          <h2 className="team-profile__label">Current Milestone</h2>
          <h3 className="team-profile__text">{data[0].milestone}</h3>
          <h2 className="team-profile__label">Country of Residence</h2>
          <h3 className="team-profile__text">{data[0].country}</h3>
      </main>
  )
}
