import { useEffect, useState } from "react"
import { fetchCommentsByArticleId } from "../../api"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"
import CommentCard from "./CommentCard"

function CommentsLists({singleArticle}) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchCommentsByArticleId(singleArticle.article_id)
        .then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <Lottie className="loading" animationData={loadingAnimation} loop={true}/>
      }

    return (
        <>
            <h3>Comments</h3>
            <ol>
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment}/>
                })}

            </ol>
        </>
    )
}

export default CommentsLists