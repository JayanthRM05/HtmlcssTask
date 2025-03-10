import React, { useState , useContext} from 'react'
import UserContext from '../context/UserContext';


function Login ()  {
  const {setUser,password,setPassword} = useContext( UserContext)

    const [username , setUsername] = useState("");

    const handleSubmit =(e) => {
       e.preventDefault()
       setUser({username,password})
        setUsername("")
    }
  return (
    <div>
<h2>Login</h2>
<input type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='Username'
/>


<input type="password" 
     value={password}
     onChange={(e)=> setPassword(e.target.value)}
     placeholder='Password'
     />
     <button 
     onClick={handleSubmit}>
     submit
     </button>
    </div>
  )
}

export default Login ;