import React, { useContext } from 'react'
import Login from "../auth/Login";
import UserContext from "../../context/UserContext";

export default function Student() {
    const { userData } = useContext(UserContext);
    //if no user data then login, if logged in but not admin role, print not an admin
    //if admin print welcome to admin page future admin stuf
    
    //I dont think there is a need for findTeam(student) the way it is now
    console.log(JSON.stringify(userData.user));
    console.log(userData.email);
    if(!userData.user)
        return <Login/>
    return (
        <div>
            <h2>Student info page</h2>
            <div>Your email address: {userData.user.email}</div>
            <div>display name: {userData.user.displayName}</div>
            <div>team name: {userData.user.teamName}</div>
            <div>Team number: {userData.user.teamNumber}</div>
            
        </div>
    )
}
