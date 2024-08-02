import { useState, useEffect } from "react";
import { news } from "../data/home.js";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Header from "../layout/Header";
import Overview from "../layout/Overview";
import ArticleCard from "../components/ArticleCard.jsx";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(news);
  }, []);

  const leftColumnArticles = articles.slice(0, 3);
  const rightColumnArticles = articles.slice(3, 8);

  return (
    <>
      <Header />
      <Overview />
      <section className="container__news">
        <h2>Actualités</h2>
        <div className="news-content">
          <div className="news-content__images-gallery">
            {leftColumnArticles.map((article, id) => (
              <Link className="card__link" key={id} to={`/news/${article.id}`}>
                <Card cover={article.image} title={article.content} />
              </Link>
            ))}
          </div>
          <div className="news-content__articles-gallery">
            {rightColumnArticles.map((article, id) => (
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
    </>
  );
}
