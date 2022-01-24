import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PageHeader() {
  return (
      <header className="header">
              <img src="" alt="" className="header__logo" />
          <nav className="header__nav-container">
              <NavLink to="/contracts">
                <h3 className="header__nav-item">Contracts</h3>
              </NavLink>
              <NavLink to="/payments">
                <h3 className="header__nav-item">Payments</h3>
              </NavLink>
              <NavLink to="/profile">
                <h3 className="header__nav-item">Profile</h3>
              </NavLink>
          </nav>
      </header>
  )
}
