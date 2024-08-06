import { Link } from "react-router-dom"
import { formatDate, formatTime } from "../utils/date-and-time"

function ArticleCard({article}) {

  const dateAndTime = article.created_at

  const postingDate = formatDate(dateAndTime)
  const postingTime = formatTime(dateAndTime)
  
    return (
      <Link to={`./${article.article_id}`}>
        <li>
          <h3>{article.title}</h3>
          <div className="art-card-format">
            <img className="art-img" src={article.article_img_url}/>
            <p>Votes: {article.votes}</p>
            <p>Topic: {article.topic}</p>
            <p>Posted at: {postingTime}</p>
            <p>{postingDate}</p>
          </div>
        </li>
      </Link>
    )
  }
  
  export default ArticleCard