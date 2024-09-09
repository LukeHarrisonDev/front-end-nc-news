import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function UserCard({user}) {

    const {setLoggedInUser, loggedInUser, isLoggedIn} = useContext(UserContext)

    function handleClick() {
        if (!isLoggedIn) {
            setLoggedInUser(user)
        } else {
            setLoggedInUser({})
        }
    }

    return (
        <li className="user-card">
            <h3 className="balsamiq">{user.username}</h3>
            <img className="avatar" src={user.avatar_url}/>
            <button onClick={handleClick} className="login-button">Log {isLoggedIn ? "out" : "in"}</button>
        </li>
    )
}

export default UserCard