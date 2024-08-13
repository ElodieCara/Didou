import { useState, useEffect } from "react";
import { news, ideas } from "../data/home.js";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Header from "../layout/Header";
import Overview from "../layout/Overview";
import ArticleCard from "../components/ArticleCard.jsx";
import ArrowNext from "../assets/arrow-circle-left.png";
import ArrowPrev from "../assets/arrow-circle-right.png";
import Subscribe from "../layout/Subscribe.jsx";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setArticles(news, ideas);
  }, []);

  const articlesPerPage = 3; // Nombre d'articles à afficher par page
  const totalSlides = Math.ceil(articles.length / articlesPerPage); // Nombre total de groupes de cartes

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  return (
    <>
      <Header />
      <Overview />
      <section className="container__news">
        <h2>Actualités</h2>
        <div className="news-content">
          <div className="news-content__images-gallery">
            <div className="news-content__images-gallery__slide-container">
              <div className="news-content__images-gallery__slide-wrapper">
                {articles
                  .slice(
                    currentSlide * articlesPerPage,
                    (currentSlide + 1) * articlesPerPage
                  )
                  .map((article, id) => (
                    <Link
                      className="card__link"
                      key={id}
                      to={`/news/${article.id}`}
                    >
                      <Card cover={article.image} title={article.title} />
                    </Link>
                  ))}
              </div>
            </div>
            <div className="news-content__images-gallery__controls">
              <img
                className="arrow-prev"
                src={ArrowPrev}
                alt="Précédent"
                onClick={prevSlide}
              />
              <div className="news-content__images-gallery__slide-pagination">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === currentSlide ? "active" : ""}`}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </div>
              <img
                className="arrow-next"
                src={ArrowNext}
                alt="Suivant"
                onClick={nextSlide}
              />
            </div>
          </div>
          <div className="news-content__articles-gallery">
            {articles.slice(articlesPerPage).map((article, id) => (
              <Link
                className="articles__link"
                key={id}
                to={`/news/${article.id}`}
              >
                <ArticleCard
                  key={id}
                  iconSrc={article.iconSrc}
                  title={article.title}
                  description={article.description}
                  date={article.date}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container__ideas">
        <h2>Idées</h2>
        <div className="ideas-content">
          <div className="ideas-content__card">
            {ideas.map((idea, da) => (
              <Link
                className={`ideas-content__card__link ${
                  da === 0 || da === 3 ? "large" : "small"
                }`}
                key={da}
                to={`/news/${idea.id}`}
              >
                <Card
                  cover={idea.image}
                  title={idea.title}
                  content={idea.description}
                  type={da === 0 || da === 3 ? "large" : "small"}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
}
