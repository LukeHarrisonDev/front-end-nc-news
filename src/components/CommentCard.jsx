import { formatDate, formatTime } from "../utils/date-and-time"
import DeleteComment from "./DeleteComment"

function CommentCard({comment}) {
    
    return (
        <li className="comment-card">
            <hgroup>
                <h4>{comment.author}</h4>
                <span>This comment has {comment.votes} votes</span>
                <h5>{formatTime(comment.created_at)} <i>{formatDate(comment.created_at)}</i></h5>
            </hgroup>
            <p>{comment.body}</p>
            <DeleteComment comment={comment}/>
        </li>
    )
}

export default CommentCard