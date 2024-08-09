import { useState, useEffect } from "react"
import { fetchArticles } from "../../api"
import ArticleCard from "./ArticleCard"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"

function ArticleList({topic, sortByFilter, topicFilter, setError, setIsError}) {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetchArticles(topic, sortByFilter, topicFilter)
    .then((articles) => {
      setArticles(articles)
      setIsLoading(false)
    })
    .catch((error) => {
      setIsLoading(false)
      setIsError(true)
      setError(error.response)
  })
  }, [sortByFilter, topicFilter, topic])


  if(isLoading) {
    return <Lottie className="loading" animationData={loadingAnimation} loop={true}/>
  }

  return (
    <ol>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article}/>
      })}
    </ol>
  )
}

export default ArticleList