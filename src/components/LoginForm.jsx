import { useState, useContext } from "react"
import { fetchUsers } from "../../api"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"
import { UserContext } from "../contexts/UserContext"

function LoginForm() {
    const [isLoading, setisLoading] = useState(false)
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

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
                    // console.log(user)
                    window.localStorage.setItem("user", JSON.stringify(user))
                } else {
                    setErrorMessage("Invalid Username/Password, please try again")
                }
            })
            setisLoading(false)
        })
    }

    return (
            <form onSubmit={handleLogin}>
                <label htmlFor="username-input">Username: <span className="red">*</span></label>
                <input id="username-input" onChange={handleUsernameChange} onFocus={() => {setErrorMessage("")}} value={usernameInput} required/>
                <label htmlFor="password-input">Password: <span className="red">*</span></label>
                <input type="password" id="password-input" onChange={handlePasswordChange} onFocus={() => {setErrorMessage("")}} value={passwordInput} required/>
                <p className="red">{errorMessage}</p>
                <button type="submit" id="login-button">Login</button>
                <p>When logging in, you can use the following users:</p>
                <section className="bold">
                    <p>cooljmessy</p>
                    <p>grumpy19</p>
                    <p>happyamy2016</p>
                    <p>jessjelly</p>
                    <p>tickle122</p>
                    <p>weegembump</p>
                </section>
                    <p>The password is "<span className="green">password</span>", (very secure)</p>
            </form>
    )
}

export default LoginForm