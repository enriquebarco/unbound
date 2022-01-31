import React from 'react';
import Logo from "../../assets/Logo/Logo Files/For Web/svg/Color logo - no background.svg"
import Facebook from "../../assets/Icons/facebook.png";
import Instagram from "../../assets/Icons/instagram.png";
import Twitter from "../../assets/Icons/twitter.png";
import Github from "../../assets/Icons/github.png";
import "./PageFooter.scss";


export default function PageFooter() {
  return(
    <footer className="footer">
        <div className="footer__logo-wrapper">
          <img className="footer__logo" src={Logo} alt="unbound logo" />
          <p className="footer__logo-text">©2022 All Rights Reserved</p>

        </div>
        <div className="footer__contact-wrapper">
            <h5 className="footer__contact-title">CONTACT</h5>
            <a className="footer__email" href="mailto:enrique@unbound">enrique@unbound.com</a>
            <a className="footer__email" href="+1(786)2707792">+1 (786)-270-7792</a>
        </div>
        <div className="footer__social-wrapper">
            <img src={Facebook} alt="facebook icon" className="footer__social-icon" />
            <img src={Instagram} alt="instagram icon" className="footer__social-icon" />
            <img src={Twitter} alt="twitter icon" className="footer__social-icon" />
            <img src={Github} alt="github icon" className="footer__social-icon" />
        </div>
    </footer>
  )
}
