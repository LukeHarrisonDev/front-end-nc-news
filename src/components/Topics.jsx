import { useState, useEffect } from "react"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"
import { fetchTopics } from "../../api"
import TopicCard from "./TopicCard"

function Topics() {
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

    return (
        <ol>
            {topics.map((topic) => {
                return <TopicCard key={topic.slug} topic={topic}/>
            })}
        </ol>
    )
}

export default Topics