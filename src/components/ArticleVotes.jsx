import { useState, useEffect} from "react"
import { changeVote } from "../../api"

function ArticleVotes({singleArticle}) {
    const [optimisticVotes, setOptimisticVotes] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        setOptimisticVotes(singleArticle.votes)
    }, [])

    function handleVote(e) {
        const voteAmount = e.target.value
        setOptimisticVotes((currentVotes) => {
            return currentVotes + +voteAmount
        })
        changeVote(singleArticle.article_id, voteAmount)
        .catch((error) => {
            setOptimisticVotes((currentVotes) => {
                return currentVotes - +voteAmount
            })
            setErrorMessage("Vote unsuccessful, please try again in a moment")
        })
    }

    return (
        <div className="votes-buttons">
            <span className="art-votes">{optimisticVotes} votes</span>
            <button value={1} onClick={handleVote} className="vote-up">↑</button>
            <button value={-1} onClick={handleVote} className="vote-down">↓</button>
            <span className="red">{errorMessage}</span>
        </div>
    )
}

export default ArticleVotes