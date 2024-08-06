import { formatDate, formatTime } from "../utils/date-and-time"

function CommentCard({comment}) {

    const dateAndTime = comment.created_at

    const postingDate = formatDate(dateAndTime)
    const postingTime = formatTime(dateAndTime)

    return (
        <li className="comment-card">
            <hgroup>
                <h4>{comment.author}</h4>
                <span>This comment has {comment.votes} votes</span>
                <h5>{postingTime} <i>{postingDate}</i></h5>
            </hgroup>
            <p>{comment.body}</p>
        </li>
    )
}

export default CommentCard