import React, { useContext } from 'react'
import UserContext from "../../context/UserContext";
import Login from "../auth/Login";

export default function Coffee() {
    const { userData } = useContext(UserContext);
    if(!userData.user)
        return <Login/>
    return (
        <div>
            <h1>Welcome {userData.user.displayName} to the coffee page </h1></div>
    )
}
