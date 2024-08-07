import { useState } from "react"
import { deleteComment } from "../../api"

function DeleteComment({comment}) {
    const [isDeleted, setIsDeleted] = useState(false)
    const [isNotDeleted, setIsNotDeleted] = useState(false)
    const [isDeleting, setIsDeleting] =useState(false)

    //// Temp Logged in User ////
    const username = "cooljmessy"

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
            <button onClick={handleClick} className="delete-comment">Delete Comment</button>
            {isNotDeleted ? <p className="delete-comment-message">Comment not deleted, try again</p> : null}
            {isDeleted ? <p className="deleted-message">DELETED!</p> : null}
        </>
    )

}

export default DeleteComment