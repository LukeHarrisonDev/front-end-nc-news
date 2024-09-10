import { useState, useEffect, useContext } from "react"
import { fetchUsers } from "../../api"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"
import { UserContext } from "../contexts/UserContext"

function UserLogin() {
    const {setLoggedInUser} = useContext(UserContext)

    const [isLoading, setisLoading] = useState(false)
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    function handleUsernameChange(e) {
        setUsernameInput(e.target.value)
    }
    function handlePasswordChange(e) {
        setPasswordInput(e.target.value)
    }

    function handleSubmit(e) {
        setisLoading(true)
        fetchUsers()
        .then((users) => {
            users.forEach((user) => {
                if(usernameInput === user.username && passwordInput === "password") {
                    setLoggedInUser(user)
                }
            })
            setisLoading(false)
        })

    }

    if(isLoading) {
        return <Lottie className="loading" animationData={loadingAnimation} loop={true}/>
    }

    return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="username-input">Username: </label>
                <input id="username-input" onChange={handleUsernameChange} value={usernameInput} required/>
                <label htmlFor="password-input">Password: </label>
                <input id="password-input" onChange={handlePasswordChange} value={passwordInput} required/>
                <button type="submit" id="login-button">Login</button>
            </form>
    )
}

export default UserLogin