import { useState, useEffect } from "react"
import { fetchArticles } from "../../api"
import ArticleCard from "./ArticleCard"

function ArticleList() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles()
    .then(({articles}) => {
      setArticles(articles)
    })
  }, [])

  
  return (
    <ol>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article}/>
        })}
      </ol>
    )
  }
  
  export default ArticleList