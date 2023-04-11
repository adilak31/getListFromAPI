import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface User {
    name: string
    username: string
    email: string

}



const UserPage = () => {
    const [user, setUser] = useState<User>({
        name: "",
        username: "",
        email: ""
    })
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const getUser = async () => {
        // начало загрузки
        setLoading(true)
        const response = await axios.get<User>("https://jsonplaceholder.typicode.com/users/" + id)

        setUser(response.data)
        // конец загрузки
        setLoading(false)
    }
    useEffect(() => {
        getUser()
    }, [])

    return <div>
        {loading ? "загрузка" : user.email}

    </div>
}
export default UserPage