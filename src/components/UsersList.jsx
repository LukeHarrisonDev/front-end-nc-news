import { useState, useEffect } from "react"
import { fetchUsers } from "../../api"
import Lottie from "lottie-react"
import loadingAnimation from "../animations/news-loading.json"
import UserCard from "./UserCard"

function UsersList() {
    const [users, setUser] = useState({})
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        setisLoading(true)
        fetchUsers()
        .then((users) => {
            setUser(users)
            setisLoading(false)
        })
    }, [])

    if(isLoading) {
        return <Lottie className="loading" animationData={loadingAnimation} loop={true}/>
    }

    return (
        <ol>
            {users.map((user) => {
                return <UserCard key={user.username} user={user}/>
            })}
        </ol>
    )
}

export default UsersList