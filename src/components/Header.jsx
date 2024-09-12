import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

function Header() {

    const {loggedInUser, isLoggedIn} = useContext(UserContext)

    return (
        <header>
            <div id="welcome-card">
                <span id="welcome-text">Welcome <br/>{isLoggedIn ? loggedInUser.name.split(" ")[0] : "guest"}</span>
                {isLoggedIn ? <img id="welcome-avatar" src={loggedInUser.avatar_url}/> : null}
            </div>
            <h1 className="yellowtail">Luke's NC News</h1>
            <nav className="balsamiq">
                <Link to="/" className="links">Home</Link>
                <Link to="/users" className="links">{isLoggedIn ? "Account" : "Login"}</Link>
                <Link to="/topics" className="links">Topics</Link>
                <Link to="/articles" className="links">Articles</Link>
            </nav>
        </header>
    )
}

export default Header