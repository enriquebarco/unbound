import React from 'react';
import "./HeroContext.scss";
export default function HeroContext({ name }) {
  return(
        <section className="hero-content">
            <h1 className="hero-content__title">Welcome to unbound, Kabila Group LLC!</h1>
            <p className="hero-content__text">Find all the information you need regarding your remote team and make payments</p>
        </section>

      );
}
