import { Link } from "react-router-dom"
import { formatDate, formatTime } from "../utils/date-and-time"

function ArticleCard({article}) {

  return (
    <Link to={`/articles/${article.article_id}`}>
      <li>
        <h3 className="balsamiq">{article.title}</h3>
        <div className="art-card-format">
          <img className="art-img" src={article.article_img_url}/>
          <p>Votes: {article.votes}</p>
          <p>Topic: {article.topic}</p>
          <p>Posted at: {formatTime(article.created_at)}</p>
          <p>{formatDate(article.created_at)}</p>
        </div>
      </li>
    </Link>
  )
}

export default ArticleCard