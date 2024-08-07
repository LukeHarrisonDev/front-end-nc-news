import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchArticleById } from "../../api"
import { formatDate, formatTime } from "../utils/date-and-time"
import CommentsLists from "./CommentsList"
import ArticleVotes from "./ArticleVotes"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"

function SingleArticle() {
    const { article_id } = useParams()
    const [singleArticle, setSingleArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchArticleById(article_id)
        .then((article) => {
            setSingleArticle(article)
            setIsLoading(false)
        })
    }, [article_id])

    if(isLoading) {
        return <Lottie className="loading" animationData={loadingAnimation} loop={true}/>
      }

    return (
        <>
            <article>
                <div className="article-title-container">
                    <h3 className="art-title">{singleArticle.title}</h3>
                </div>
                <h2 className="art-author">by {singleArticle.author}</h2>
                
                <ArticleVotes singleArticle={singleArticle}/>
                <p className="art-date-time">Posted at <strong>{formatTime(singleArticle.created_at)}</strong> on <i>{formatDate(singleArticle.created_at)}</i></p>
                <img className="single-art-img" src={singleArticle.article_img_url}/>
                <h4 className="art-topic"><span className="topic-word">#</span>{singleArticle.topic}</h4>
                <p className="art-body">{singleArticle.body}</p>
            </article>
            <CommentsLists singleArticle={singleArticle}/>
        </>
    )
}

export default SingleArticle