import PropTypes from "prop-types";
import Button from "./Button";

const Card = ({ cover, title, content, type }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={cover} alt="News" />
      </div>
      <div className="card__content">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="card__content__actions">
          <Button className={`card__content__actions__button ${type}`}>
            En savoir plus
          </Button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["large", "small"]).isRequired,
};

export default Card;
