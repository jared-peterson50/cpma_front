import React, { useContext } from 'react'
//need userContext and link for protecting route
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
export default function Coffee() {
    /*to do protect routes we need the following
    import {useContext} import from react;
    UserContext from "../../context/UserContext";
    import { Link } from "react-router-dom";
    ----
    const { userData } = useContext(UserContext);
    then inside the main div we will have the following that renders the page else
    links back to login since they are not logged in
    {userData.user ? (
            <h1>Welcome {userData.user.displayName} to the coffee page </h1>
            ) : (
            <>
            <h2>You are not logged in</h2>
            <Link to="/login">Log in</Link>
            </>
      )}
    */
    const { userData } = useContext(UserContext);
    return (
        <div>
            {userData.user ? (
            <h1>Welcome {userData.user.displayName} to the coffee page </h1>
            ) : (
            <>
            <h2>You are not logged in</h2>
            <Link to="/login">Log in</Link>
            </>
      )}
        </div>
    )
}
