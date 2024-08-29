import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div>
      <section className="container__subscribe">
        <div className="container__subscribe__link">
          <div className="container__subscribe__link--square"></div>
          <hr className="container__subscribe__link__line" />
          <div className="container__subscribe__link--square"></div>
          <hr className="container__subscribe__link__line" />
          <Link
            to="/subscribe"
            className="container__subscribe__link--subscribe-button"
          >
            <div className="container__subscribe__link--square"></div>
            <span className="container__subscribe__link--text">Subscribe</span>
          </Link>
          <hr className="container__subscribe__link__line" />
          <div className="container__subscribe__link--square"></div>
          <hr className="container__subscribe__link__line" />
          <div className="container__subscribe__link--square"></div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
