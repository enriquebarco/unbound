import React from 'react';
import "./HeroContext.scss";
export default function HeroContext({ name }) {
  return(
        <section className="hero-content">
            <h1 className="hero-content__title"><span className="break">Welcome to unbound,</span> Kabila Group LLC!</h1>
            <p className="hero-content__text">Here, you can find all the information you need regarding your remote team and making cross-boarder payments</p>
        </section>

      );
}
