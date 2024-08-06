import { useState, useEffect } from "react"
import { fetchArticles } from "../../api"
import ArticleCard from "./ArticleCard"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"

function ArticleList() {

  const [articles, setArticles] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    setisLoading(true)
    fetchArticles()
    .then((articles) => {
      setArticles(articles)
      setisLoading(false)
    })
  }, [])

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