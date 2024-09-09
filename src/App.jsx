import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { UserContext } from "./contexts/UserContext"
import Header from "./components/Header"
import Home from "./components/Home"
import ArticleFilterProvider from "./components/ArticleFilterProvider"
import SingleArticle from "./components/SingleArticle"
import Topics from "./components/Topics"
import ErrorPage from "./components/ErrorPage"
import UsersList from "./components/UsersList"
import UserLogin from "./components/UserLogin"

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
                {/* <Route path="/users" element={<UsersList/>}/> */}
                <Route path="/users" element={<UserLogin/>}/>
            </Routes>
        </UserContext.Provider>
    )
}

export default App