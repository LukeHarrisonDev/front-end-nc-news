import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
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
    
    useEffect(() => {
        if (!isLoggedIn) {
            const user = localStorage.getItem("user")
            if (user !== null) {
                setLoggedInUser(JSON.parse(user))
            }
        }
    }, [])

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