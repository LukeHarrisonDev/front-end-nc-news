import { useState, useEffect } from "react"
import { fetchUsers } from "../../api"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"

function UserLogin() {
    // const [users, setUser] = useState({})
    const [isLoading, setisLoading] = useState(false)
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    // useEffect(() => {
    //     setisLoading(true)
    //     fetchUsers()
    //     .then((users) => {
    //         setUser(users)
    //         setisLoading(false)
    //     })
    // }, [])

    function handleUsernameChange(e) {
        setUsernameInput(e.target.value)
    }
    function handlePasswordChange(e) {
        setPasswordInput(e.target.value)
    }

    if(isLoading) {
        return <Lottie className="loading" animationData={loadingAnimation} loop={true}/>
    }
    console.log(passwordInput)
    console.log(usernameInput)

    return (
            <form>
                <label htmlFor="username-input">Username: </label>
                <input id="username-input" onChange={handleUsernameChange} value={usernameInput} required/>
                <label htmlFor="password-input">Password: </label>
                <input id="password-input" onChange={handlePasswordChange} value={passwordInput} required/>
            </form>
    )
}

export default UserLogin