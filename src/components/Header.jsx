import { Link } from "react-router-dom"

function Header() {

    return (
        <header>
            <h1 className="yellowtail">Luke's NC News</h1>
            <nav className="balsamiq">
                <Link to="/" className="links">Home</Link>
                <Link to="/users" className="links">Users</Link>
                <Link to="/topics" className="links">Topics</Link>
                <Link to="/articles" className="links">All Articles</Link>
            </nav>
        </header>
    )
}

export default Header