import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import ArticleFilterProvider from "./components/ArticleFilterProvider"
import SingleArticle from "./components/SingleArticle"

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<ArticleFilterProvider/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle/>}/>
      </Routes>
    </div>
  )
}

export default App