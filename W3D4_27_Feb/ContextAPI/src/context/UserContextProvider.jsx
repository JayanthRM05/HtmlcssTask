import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider =({children}) =>{
     const [user,setUser] = useState(null)
     const [password, setPassword] = useState("");

     const options={
      setUser,user,password,setPassword
     }

     return(
        <UserContext.Provider   value={options}>
        
        {children}

        </UserContext.Provider>
     )
}
export default UserContextProvider;