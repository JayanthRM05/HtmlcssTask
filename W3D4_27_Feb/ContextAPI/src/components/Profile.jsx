import React , {useContext}from 'react'
import UserContext from '../context/UserContext'


function Profile() {
   const {user} = useContext(UserContext)
if(!user) return <h1>not logged in</h1>
  return (
    <div>
    more
    <h1>profile : {user.username}</h1>
    </div>
  )
}

export default Profile