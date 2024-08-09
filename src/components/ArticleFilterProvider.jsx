import { useState } from "react"
import { useParams } from "react-router-dom"
import ArticleList from "./ArticleList"
import SortByFilter from "./SortByFilter"
import ErrorPage from "./ErrorPage"
// import TopicFilter from "./TopicFilter"

function ArticleFilterProvider() {
  const [topicFilter, setTopicFilter] = useState(undefined)
  const [sortByFilter, setSortByFilter] = useState(undefined)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState(false)

  const {topic} = useParams()

  if(isError) {
    return (
      <ErrorPage error={error}/>
    )
  }

  return (
    <>
      <section>
        {/* <TopicFilter setTopicFilter={setTopicFilter}/> */}
        <SortByFilter setSortByFilter={setSortByFilter}/>
      </section>
      <ArticleList setError={setError} setIsError={setIsError} topic={topic} sortByFilter={sortByFilter} topicFilter={topicFilter}/>
    </>
  )
}
  
  export default ArticleFilterProvider