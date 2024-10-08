import { useState, useEffect, useContext } from "react"
import { deleteComment } from "../../api"
import { UserContext } from "../contexts/UserContext"

function DeleteComment({comment, setIsDeleted}) {
    const [isNotDeleted, setIsNotDeleted] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isCurrentUser, setIsCurrentUser] = useState(false)

    const {loggedInUser} = useContext(UserContext)

    const username = loggedInUser.username

    useEffect(() => {
        if(username === comment.author) {
            setIsCurrentUser(true)
        }
    }, [])

    function handleClick() {
        setIsDeleting(true)
        deleteComment(comment.comment_id)
        .then(() => {
            setIsDeleted(true)
            setIsDeleting(false)
        })
        .catch(() => {
            setIsNotDeleted(true)
            setIsDeleting(false)
            setTimeout(() => {
                setIsNotDeleted(false)
            }, 3000);
        })
    }

    return (
        <>
            {isDeleting ? <p className="deleting">deleting...</p> : null}
            {isCurrentUser ? <button onClick={handleClick} className="delete-comment">Delete Comment</button> : null}
            {isNotDeleted ? <p className="delete-comment-message">Comment not deleted, try again</p> : null}
        </>
    )

}

export default DeleteComment