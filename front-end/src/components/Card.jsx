import PropTypes from "prop-types";

const Card = ({ cover, title }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={cover} alt="News" />
      </div>
      <div className="card__title">{title}</div>
      <div className="card__btn">More</div>
    </div>
  );
};

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
