import React from 'react';
import Icon from "../../assets/Icons/world.png"
import "./ProfileCard.scss";

export default function ProfileCard( { businessName, country, email } ) {
  return(
      <main className="profile-card">
          <h1 className="profile-card__business-name">{businessName}</h1>
          <img src={Icon} alt="" className="profile-card__icon" />
          <h2 className="profile-card__label">Country of Incorporation</h2>
          <h3 className="profile-card__text">{country}</h3>
          <h2 className="profile-card__label">Email</h2>
          <h3 className="profile-card__text">{email}</h3>
          <div className="user-profile__buttons-container">
              <button className="profile-card__button-sign-out">Sign Out</button>
              <button className="profile-card__button-edit">Edit Profile</button>
          </div>
      </main>
  )
}
