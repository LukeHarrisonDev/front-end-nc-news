import { Link } from "react-router-dom"

function Header() {

    return (
        <header>
            <h1>NC News</h1>
            <nav>
                <Link to="/" className="links">Home</Link>
                <Link to="/topics" className="links">Topics</Link>
                <Link to="/articles" className="links">All Articles</Link>
                {/* <h3>Users</h3> */}
            </nav>
        </header>
    )
  }
  
  export default Header