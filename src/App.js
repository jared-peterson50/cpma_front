import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";
import Admin from './components/auth/Admin';
import AdminSucess from './components/auth/AdminSucess';
import ScoreBoard from './components/pages/ScoreBoard';
import Coffee from './components/pages/Coffee';
import Team from './components/pages/Team';
import "./style.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    role: '2',
  });
  
  useEffect(() => {
    document.title = "ASU Marketing Coffee Shop"
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://54.244.181.135:3000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://54.244.181.135:3000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/admin" component={Admin} />
              <Route path="/adminsuccess" component={AdminSucess} />
              <Route path ="/scoreboard" component={ScoreBoard}/>
              <Route path="/team" component={Team} />
              <Route path="/coffee" component={Coffee} />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
