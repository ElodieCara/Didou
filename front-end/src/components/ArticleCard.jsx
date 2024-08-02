import PropTypes from "prop-types";

const ArticleCard = ({ iconSrc, title, description, date }) => {
  return (
    <div className="articles-gallery">
      <div className="articles-gallery__icon">
        <img src={iconSrc} alt={title} />
      </div>
      <div className="articles-gallery__body">
        <div className="articles-gallery__body__title">{title}</div>
        <div className="articles-gallery__body__description">{description}</div>
        <div className="articles-gallery__body__date">{date}</div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string,
};

export default ArticleCard;
