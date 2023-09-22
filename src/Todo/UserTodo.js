import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./UserTodo.scss"
import {BiArrowBack} from "react-icons/bi"

const UserTodo = () => {

    const [todos, setTodos] = useState([])

    const location = useLocation()
    const userId = location.pathname.split("/")[2]

    useEffect(() => {
       
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setTodos(data))
        .catch((error) => console.log("Error while fetching todos: " + error))
    }, [])

    
  return (
    <div className='todo-container'>
        <h1>Todo List</h1>
        <Link to="/"> <BiArrowBack /> <span>Go back </span></Link>
        
        <div className='todo-wrap'>
            {todos.filter((todo) =>  (todo.userId === parseInt(userId) )).map((todo, index) => {
                console.log(todo)
                return(
                    <div className='todo-block'>
                        <p>Task number: {index + 1}</p>
                        <p>Title: {todo.title}</p>
                        <p>Completed: {(todo.completed).toString()}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default UserTodo