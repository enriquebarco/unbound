import React from 'react';
import "./HeroContext.scss";
import 'animate.css';

export default function HeroContext({ currentUser }) {
  return(
        <section className="hero-content animate__animated animate__fadeInLeft">
            <h1 className="hero-content__title"><span className="break">Welcome to unbound,</span> {currentUser.businessName}</h1>
            <p className="hero-content__text">Here, you can find all the information you need regarding your remote team and making cross-boarder payments</p>
        </section>

      );
}
