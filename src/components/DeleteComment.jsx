import { useState, useEffect } from "react"
import { deleteComment } from "../../api"

function DeleteComment({comment}) {
    const [isDeleted, setIsDeleted] = useState(false)
    const [isNotDeleted, setIsNotDeleted] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isCurrentUser, setIsCurrentUser] = useState(false)

    //// Temp Logged in User ////
    const username = "cooljmessy"

    useEffect(() => {
        if(username === comment.author) {
            setIsCurrentUser(true)
        }
    }, [])

    function handleClick() {
        setIsDeleting(true)
        deleteComment(comment.comment_id)
        .then(() => {
            setIsDeleting(false)
            setIsDeleted(true)
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
            {isDeleted ? <p className="deleted-message">DELETED!</p> : null}
        </>
    )

}

export default DeleteComment