import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Admin() {
  //const [email, setEmail] = useState();
  //const [password, setPassword] = useState();
  const [error, setError] = useState();

  const {userData} = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      //const loginUser = { email, password };

      const loginRes = await Axios.get("http://13.59.217.78:3000/users/admin", {
          headers: { "x-auth-token": userData.token },
        });
      //setUserData({
      //  token: loginRes.data.token,
      //  user: loginRes.data.user,
      //  role: loginRes.data.role,
      //});
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/adminsuccess");
    } catch (err) {
      console.log("had an error");
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page">
      <h2>Log in</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
        />

        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}

/*
import React from 'react'

export default function Admin() {
    return (
        <div>
            welcome to admin
        </div>
    )
}
*/
