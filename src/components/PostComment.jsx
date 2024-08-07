import { useState } from "react"
import { fetchCommentsByArticleId, postComment } from "../../api"

function PostComment({comments, setComments}) {

    const [commentInput, setCommentInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isPosted, setIsPosted] = useState(false)

    function handleChange(e) {
        setCommentInput(e.target.value)
    }
    function handleSubmit(e) {
        setIsLoading(true)
        e.preventDefault()
        const newComment = {username: "cooljmessy", body: commentInput}
        setCommentInput("")
        postComment(comments[0].article_id, newComment)
        .then(() => {
            fetchCommentsByArticleId(comments[0].article_id)
            .then((comments) => {
                setComments(comments)
            })
            setIsLoading(false)
            setIsPosted(true)
        })
        {setTimeout(() => {
            setIsPosted(false)
        }, 3000)}
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment-box">New comment: </label>
                <textarea id="comment-box" onChange={handleChange} value={commentInput} placeholder="Type your comment here..." required></textarea>
                <button type="submit" id="comment-button">Post</button>
                {isLoading ? <p>Posting...</p> : null}
                {isPosted ? <p id="posted">Posted</p> : null}

            </form>

        </>
    )
}

export default PostComment