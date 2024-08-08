import { useParams } from "react-router-dom"
import ArticleList from "./ArticleList"

function ArticleFilterProvider() {

  const {topic} = useParams()

    return (
      <>
        <ArticleList topic={topic}/>
      </>
    )
  }
  
  export default ArticleFilterProvider