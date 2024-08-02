import { useParams } from "react-router-dom";
import { news } from "../data/home.js";

const NewsDetail = () => {
  const { id } = useParams();
  const article = news.find((item) => item.id === parseInt(id, 10));

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div className="news-detail">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default NewsDetail;
