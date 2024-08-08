import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchTopics } from "../../api"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"
import { upperCaseFirstLetter } from "../utils/upper-case-first-letter"

function TopicFilter({setTopicFilter}) {

    const [topics, setTopics] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
      setisLoading(true)
      fetchTopics()
      .then((topics) => {
        setTopics(topics)
        setisLoading(false)
      })
    }, [])

    if(isLoading) {
        return <Lottie className="loading" animationData={loadingAnimation} loop={true}/>
    }

    function selectHandler(e) {
        setTopicFilter(e.target.value)
    }
    
    return (
        <form>
            <label htmlFor="topic-filter">Filter Topics by:</label>
            <select id="topic-filter" onChange={selectHandler}>
                <option>Select Topic</option>
                {topics.map((topic) => {
                    return <option value={topic.slug} key={topic.slug}>{upperCaseFirstLetter(topic.slug)}</option>
                })}
            </select>

        </form>
    )
}

export default TopicFilter