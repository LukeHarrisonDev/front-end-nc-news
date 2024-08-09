import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import ArticleFilterProvider from "./components/ArticleFilterProvider"
import SingleArticle from "./components/SingleArticle"
import Topics from "./components/Topics"
import ErrorPage from "./components/ErrorPage"

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<ArticleFilterProvider/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle/>}/>
        <Route path="/topics" element={<Topics/>}/>
        <Route path="/topics/:topic" element={<ArticleFilterProvider/>}/>
      </Routes>
    </div>
  )
}

export default App