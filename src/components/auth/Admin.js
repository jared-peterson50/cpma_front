import React, { useContext } from 'react'
import Login from "../auth/Login";
import UserContext from "../../context/UserContext";

export default function Admin() {
  const { userData } = useContext(UserContext);
    //if no user data then login, if logged in but not admin role, print not an admin
    //if admin print welcome to admin page future admin stuff
    if(!userData.user)
        return <Login/>
    if(userData.user.role === "admin")
        return <div>Welcome to the Admin page</div>
    if(userData.user)
        return  <h2>not an admin </h2> 
}
