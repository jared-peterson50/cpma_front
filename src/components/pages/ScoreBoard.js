import React from 'react'
import {useContext} from 'react';
import UserContext from "../../context/UserContext";
import Login from "../auth/Login";

export default function ScoreBoard() {
    const { userData } = useContext(UserContext);
    if(!userData.user)
        return <Login/>
    return (
        <div>
            <h1>Welcome {userData.user.displayName} to the scoreboard page </h1></div>
    )
}
