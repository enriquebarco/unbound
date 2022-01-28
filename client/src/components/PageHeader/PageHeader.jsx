import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import Logo from "../../assets/Logo/Logo Files/For Web/svg/Color logo - no background.svg"
import "./PageHeader.scss";

export default function PageHeader() {
  return (
      <header className="header">
              <Link to="/">
                <img src={Logo} alt="unbound logo" className="header__logo" />
              </Link>
          <nav className="header__nav-container">
              <NavLink to="/"  className="header__link">
                <h3 className="header__nav-item">Dashboard</h3>
              </NavLink>
              <NavLink to="/contract" className="header__link">
                <h3 className="header__nav-item">Contracts</h3>
              </NavLink>
              <NavLink to="/profile" className="header__link">
                <h3 className="header__nav-item">Profile</h3>
              </NavLink>
          </nav>
      </header>
  )
}
