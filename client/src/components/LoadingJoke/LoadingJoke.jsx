import React from 'react';
import ContractIcon from "../../assets/Icons/contract-load.png";
import ShipBlue from "../../assets/Icons/ship-blue.png";
import ShipPink from "../../assets/Icons/ship-pink.png";
import ShipRed from "../../assets/Icons/ship-red.png";
import "./LoadingJoke.scss";

export default function LoadingJoke() {
  return(
        <section className="loading-joke">
            <div className="loading-joke__container">
                <h1 className="loading-joke__title">Contract is loading...</h1>
                <img src={ContractIcon} alt="contracts icon" className="loading-joke__contract-icon" />
                <h2 className="loading-joke__prefix">Joke of The Day</h2>
                <h3 className="loading-joke__buildup">I recently started working <span className="loading-joke__span">remotely</span> from home building boats in my attic...</h3>
                <h3 className="loading-joke__punchline">Sails are through the roof.</h3>
                <div className="loading-joke__ship-container">
                    <img src={ShipBlue} alt="ship icon" className="loading-joke__ship" />
                    <img src={ShipPink} alt="ship icon" className="loading-joke__ship" />
                    <img src={ShipRed} alt="ship icon" className="loading-joke__ship" />
                </div>
            </div>
        </section>
    )
}
