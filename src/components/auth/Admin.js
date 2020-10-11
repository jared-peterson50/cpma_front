import React, { useContext } from 'react';
import {useState} from 'react';
import Login from "../auth/Login";
import UserContext from "../../context/UserContext";
import Axios from "axios";

export default function Admin() {
    const { userData } = useContext(UserContext);
    const token = userData.token;
    const [users, setUsers] = useState();

    const delUser = async (e) => {
      e.preventDefault();
      try {
        var x = document.getElementById("textBoxDel").value;       
        var axiosConfig = { headers: {"x-auth-token" :token, "user": x}}
        await Axios.delete(process.env.REACT_APP_URL+"/users/delete",axiosConfig);  
      }
      catch(err){
        console.log("error in the delete user: " + err);
      }
    }
    const submit = async (e) => {
        e.preventDefault();
        try {
          const list = await Axios.get(process.env.REACT_APP_URL+"/users/UserList",{ headers: {"x-auth-token" :token }});
          //we need to convert the json object to an array so we can use the map function
          try{
            var a =Object.values(list.data);
            const renderList = a.map(user => <div key={user["_id"]}>_id: {user["_id"]} name: {user["displayName"]} email: {user["email"]} teamName:{user["teamNumber"]}</div>);
            setUsers(renderList);
          }
          catch(err){
            console.log("error happend generating user list: " + err);
          }
        }
          catch (err) {
            console.log(err.response.data.msg);
          }
        };

    //if no user data then login, if logged in but not admin role, print not an admin
    //if admin print welcome to admin page future admin stuff
    //<div>{users}</div>
    if(!userData.user)
        return <Login/>
    if(userData.user.role === "admin")
    return (<div>Welcome to the Admin page
      <h2><button onClick= {submit}>see all users</button></h2>
      <div>{users}</div>
        <div> to delete a user, paste _id of user
          <input type="text" id="textBoxDel"/>
          <button onClick = {delUser}>Submit</button>
        </div>
      </div>
      )

    if(userData.user)
        return  <h2>not an admin </h2> 
}
