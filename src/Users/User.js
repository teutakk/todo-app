import React from 'react'
import "./User.scss"

const User = (props) => {
  return (
    <div className='user-container'>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.username}</p> 
    </div>
  )
}

export default User