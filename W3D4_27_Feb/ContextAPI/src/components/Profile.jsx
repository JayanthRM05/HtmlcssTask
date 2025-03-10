import React , {useContext}from 'react'
import UserContext from '../context/UserContext'


function Profile() {
   const {user,password} = useContext(UserContext)
if(!user) return <h1>not logged in</h1>
  return (
    <div>
    more
    <h1>profile : {user.username}</h1>
    <h1>password : {user.password}</h1>
    </div>
  )
}

export default Profile