import { useContext } from "react"

import { UserContext } from "../contexts/UserContext"
import LoginForm from "./LoginForm"
import LogoutForm from "./LogoutForm"

function User() {

    const {isLoggedIn} = useContext(UserContext)

    return (
        <>
            {!isLoggedIn ? <LoginForm/> : <LogoutForm/>}
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
        </>
    )
}

export default User