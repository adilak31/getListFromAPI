import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"

interface User {
    id: number
    name: string
    username: string
    email: string
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]) //динамическая переменная для хранения листа (сама переменная и фуункция ее)

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    }


    useEffect(() => {     //отработает при рендере компонента один раз
        getUsers()
    }, [])


    return (
        <div>
            {users.map((user) => {
                return <NavLink to={"/" + user.id}>
                    <p>{user.name}</p>
                </NavLink>
            })}

        </div>
    )
}


export default Users