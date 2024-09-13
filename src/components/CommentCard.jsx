import { useEffect, useState } from "react"
import { formatDate, formatTime } from "../utils/date-and-time"
import DeleteComment from "./DeleteComment"

function CommentCard({comment}) {

    const [isDeleted, setIsDeleted] = useState(false)
    const [id, setId] = useState("")
    
    return (
        <>
            {isDeleted ? <p className="deleted-message">DELETED!</p>
            : 
            <li id={id} className="comment-card">
                <hgroup>
                    <h4>{comment.author}</h4>
                    <span>This comment has {comment.votes} votes</span>
                    <h5>{formatTime(comment.created_at)} <i>{formatDate(comment.created_at)}</i></h5>
                </hgroup>
                <p>{comment.body}</p>
                <DeleteComment comment={comment} setIsDeleted={setIsDeleted}/>
            </li>
            }
        </>
    )
}

export default CommentCard