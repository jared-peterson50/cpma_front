import React from 'react'
import {useContext} from 'react';
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
export default function ScoreBoard() {
    const { userData } = useContext(UserContext);

    return (
        <div>
            {userData.user ? (
            <h1>Welcome {userData.user.displayName} to the scoreBoard page </h1>
            ) : (
            <>
            <h2>You are not logged in</h2>
            <Link to="/login">Log in</Link>
            </>
      )}
        </div>
    )
}
