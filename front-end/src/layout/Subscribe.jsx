import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div>
      <section className="container__subscribe">
        <div className="container__subscribe__link">
          <Link
            to="/qui-suis-je"
            className="container__subscribe__link--square-button"
          >
            <div className="container__subscribe__link--square"></div>
            <span className="container__subscribe__link--text">
              Qui suis-je ?
            </span>
          </Link>
          <hr className="container__subscribe__link__line" />
          <Link
            to="/vos-idees"
            className="container__subscribe__link--square-button"
          >
            <div className="container__subscribe__link--square"></div>
            <span className="container__subscribe__link--text">Vos Idées</span>
          </Link>
          <hr className="container__subscribe__link__line" />
          <Link
            to="/subscribe"
            className="container__subscribe__link--subscribe-button"
          >
            <div className="container__subscribe__link--square"></div>
            <span className="container__subscribe__link--text">Subscribe</span>
          </Link>
          <hr className="container__subscribe__link__line" />
          <Link
            to="/remarques"
            className="container__subscribe__link--square-button"
          >
            <div className="container__subscribe__link--square"></div>
            <span className="container__subscribe__link--text">Remarques</span>
          </Link>
          <hr className="container__subscribe__link__line" />
          <Link
            to="/partenariat"
            className="container__subscribe__link--square-button"
          >
            <div className="container__subscribe__link--square"></div>
            <span className="container__subscribe__link--text">
              Partenariat
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
