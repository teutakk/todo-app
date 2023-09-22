import React, { useEffect, useState } from 'react'
import "./Users.scss"
import User from './User'
import { Link } from 'react-router-dom'
const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log("Error while fetching users: " + error))
    }, [])

  return (
    <div className='users-container'>
        {users.map((user) => {
            return(
                <div className='user-block'>
                    <User id={user.id} name={user.name} username={user.username} />
                    <Link to={"/user/" + user.id} className='todo-button'>Todo List</Link>
                </div>
            )
        })}
    </div>
  )
}

export default Users