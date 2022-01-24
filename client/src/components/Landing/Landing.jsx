import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return(
    <main className="landing-page">
        <h1 className="landing-page__title">Welcome to Unbound</h1>
        <p className="landing-page__text">We are on a mission to enable entrepreneurs to join the remote movement</p>
        <Link to="/login" className="landing-page__link" >
            <button>Log in</button>
        </Link>
    </main>
  )
}
