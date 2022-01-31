import React from 'react';
import HeroContext from '../HeroContext/HeroContext';
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import "./PageHero.scss";

export default function PageHero( { currentUser }) {
  return(
    <section className="hero-section">
      <HeroContext currentUser={currentUser} />
      <GoogleMaps />
    </section>
  )
}
