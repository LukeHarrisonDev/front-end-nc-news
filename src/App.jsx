import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { UserContext } from "./contexts/UserContext"
import Header from "./components/Header"
import Home from "./components/Home"
import ArticleFilterProvider from "./components/ArticleFilterProvider"
import SingleArticle from "./components/SingleArticle"
import Topics from "./components/Topics"
import ErrorPage from "./components/ErrorPage"
import User from "./components/User"

function App() {

    const [loggedInUser, setLoggedInUser] = useState({})
    const isLoggedIn = Object.keys(loggedInUser).length > 0

    return (
        <UserContext.Provider value= {{loggedInUser, setLoggedInUser, isLoggedIn}}>
            <Header/>
            <Routes>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/articles" element={<ArticleFilterProvider/>}/>
                <Route path="/articles/:article_id" element={<SingleArticle/>}/>
                <Route path="/topics" element={<Topics/>}/>
                <Route path="/topics/:topic" element={<ArticleFilterProvider/>}/>
                <Route path="/users" element={<User/>}/>
            </Routes>
        </UserContext.Provider>
    )
}

export default App