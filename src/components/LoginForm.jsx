import { useState, useContext } from "react"
import { fetchUsers } from "../../api"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"
import { UserContext } from "../contexts/UserContext"

function LoginForm() {
    const [isLoading, setisLoading] = useState(false)
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const {setLoggedInUser} = useContext(UserContext)

    if(isLoading) {
        return <Lottie className="loading" animationData={loadingAnimation} loop={true}/>
    }

    function handleUsernameChange(e) {
        setUsernameInput(e.target.value)
    }
    function handlePasswordChange(e) {
        setPasswordInput(e.target.value)
    }

    function handleLogin() {
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
    
    return (
            <form onSubmit={handleLogin}>
                <label htmlFor="username-input">Username: <span className="req">*</span></label>
                <input id="username-input" onChange={handleUsernameChange} value={usernameInput} required/>
                <label htmlFor="password-input">Password: <span className="req">*</span></label>
                <input type="password" id="password-input" onChange={handlePasswordChange} value={passwordInput} required/>
                <button type="submit" id="login-button">Login</button>
            </form>
    )

}

export default LoginForm