import { useContext } from "react"

import { UserContext } from "../contexts/UserContext"
import LoginForm from "./LoginForm"
import LogoutForm from "./LogoutForm"

function User() {

    const {isLoggedIn} = useContext(UserContext)

    return (
        <>
            {!isLoggedIn ? <LoginForm/> : <LogoutForm/>}
        </>
    )
}

export default User