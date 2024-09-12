import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function LogoutForm() {

    const {setLoggedInUser} = useContext(UserContext)

    function handleLogout() {
        setLoggedInUser({})
        localStorage.removeItem("user")
    }

    return (
        <form onSubmit={handleLogout}>
            <button type="submit" id="logout-button">Logout</button>
        </form>
    )
}
export default LogoutForm