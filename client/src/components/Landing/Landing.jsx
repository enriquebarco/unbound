import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo/Logo Files/For Web/svg/Color logo - no background.svg"
import "./Landing.scss";
import 'animate.css';

export default function Landing() {
  return(
    <main className="landing-page">
      <img src={Logo} alt="unbound logo" className="landing-page__logo" />
      <div className="landing-page__wrapper">
        <div className="landing-page__hero animate__animated animate__fadeIn">
          <h1 className="landing-page__title">Redefining how remote teams are built</h1>
          <p className="landing-page__text">A tech-enabled self-serve platform that helps entrepreneurs hire and manage top talent across borders through automated compliance and payroll management  </p>
          <Link to="/login" className="landing-page__link" >
              <button className="landing-page__button">Log in with Email</button>
          </Link>
        </div>
      </div>
    </main>
  )
}
