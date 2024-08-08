import { useState } from "react"
import { useParams } from "react-router-dom"
import ArticleList from "./ArticleList"
import SortByFilter from "./SortByFilter"
// import TopicFilter from "./TopicFilter"

function ArticleFilterProvider() {
  const [topicFilter, setTopicFilter] = useState(undefined)
  const [sortByFilter, setSortByFilter] = useState(undefined)

  const {topic} = useParams()

    return (
      <>
        <section>
          {/* <TopicFilter setTopicFilter={setTopicFilter}/> */}
          <SortByFilter setSortByFilter={setSortByFilter}/>
        </section>
        <ArticleList topic={topic} sortByFilter={sortByFilter} topicFilter={topicFilter}/>
      </>
    )
  }
  
  export default ArticleFilterProvider