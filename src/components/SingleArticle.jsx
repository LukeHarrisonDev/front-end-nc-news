import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchArticleById } from "../../api"
import { formatDate, formatTime } from "../utils/date-and-time"
import CommentsLists from "./CommentsList"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"

function SingleArticle() {
    const { article_id } = useParams()
    const [singleArticle, setSingleArticle] = useState({})
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchArticleById(article_id)
        .then((article) => {
            setSingleArticle(article)
            const dateAndTime = article.created_at
            setDate(formatDate(dateAndTime))
            setTime(formatTime(dateAndTime))
            setIsLoading(false)
        })
    }, [])

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
                <span className="art-votes">{singleArticle.votes} votes</span>
                <h4 className="art-topic"><span className="topic-word">#</span>{singleArticle.topic}</h4>
                <p className="art-date-time">Created at <strong>{time}</strong> on <i>{date}</i></p>
                <img className="single-art-img" src={singleArticle.article_img_url}/>
                <p className="art-body">{singleArticle.body}</p>
            </article>
            <CommentsLists singleArticle={singleArticle}/>
        </>
    )
}

export default SingleArticle