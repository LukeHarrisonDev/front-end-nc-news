import { useContext, useState } from "react"
import { fetchCommentsByArticleId, postComment } from "../../api"
import { UserContext } from "../contexts/UserContext"

function PostComment({comments, setComments}) {

    const [commentInput, setCommentInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isPosted, setIsPosted] = useState(false)
    const [loginPrompt, setLoginPrompt] = useState("")

    const {loggedInUser, isLoggedIn} = useContext(UserContext)

    function handleChange(e) {
        setCommentInput(e.target.value)
    }

    function handleSubmit(e) {
        setIsLoading(true)
        e.preventDefault()
        const newComment = {username: loggedInUser.username, body: commentInput}
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
        .catch((error) => {
            setIsLoading(false)
            setLoginPrompt("You must be logged in to post a comment")
            {setTimeout(() => {
                setLoginPrompt("")
            }, 3000)}
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
                {isLoggedIn ? null : <p className="bold-red-text">{loginPrompt}</p>}
                {isPosted ? <p id="posted">Posted</p> : null}
            </form>
        </>
    )
}

export default PostComment