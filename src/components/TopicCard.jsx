import { Link } from "react-router-dom"
import { upperCaseFirstLetter } from "../utils/upper-case-first-letter"

function TopicCard({topic}) {
    return (
        <Link to={`/topics/${topic.slug}`}>
            <li className="topic-card">
                <h3>{upperCaseFirstLetter(topic.slug)}</h3>
                {/* <img className="art-img" src={article.article_img_url}/> */}
                <p>{topic.description}</p>
            </li>
        </Link>
    )
}

export default TopicCard