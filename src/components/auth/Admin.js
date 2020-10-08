import React, { useContext } from 'react';
import {useState} from 'react';
import Login from "../auth/Login";
import UserContext from "../../context/UserContext";
import Axios from "axios";

export default function Admin() {
    const { userData } = useContext(UserContext);
    const token = userData.token;
    const [users, setUsers] = useState();
    //const [deluser, setDelUser] = useState();

    const delUser = async (e) => {
      e.preventDefault();
      try {
        console.log("hit delete");
        var x = document.getElementById("textBoxDel").value;
       
        //const deleted = await Axios.delete("http://localhost:5000/users/delete", params,{ headers: {"x-auth-token" :token }});
        var axiosConfig = { headers: {"x-auth-token" :token, "user": x}}
        const deleted = await Axios.delete("http://54.244.181.135:3000/users/delete",axiosConfig);
        console.log(deleted);  
      }
      catch(err){
        console.log("error in the delete user: " + err);
      }
    }
  

    const submit = async (e) => {
        e.preventDefault();
        try {
          const list = await Axios.get("http://54.244.181.135:3000/users/UserList",{ headers: {"x-auth-token" :token }});
          //we need to convert the json object to an array so we can use the map function
          try{
            var a =Object.values(list.data);
            console.log(a);
            const renderList = a.map(user => <div>_id: {user["_id"]} name: {user["displayName"]} email: {user["email"]} teamName:{user["teamNumber"]}</div>);
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
    if(!userData.user)
        return <Login/>
    if(userData.user.role === "admin")
        return (<div>Welcome to the Admin page
        <h2><button onClick= {submit}>see all users</button></h2>
        <div>{users}</div>
        <div>
        to delete a user, paste _id of user<input type="text" id="textBoxDel"/>
        <button onClick = {delUser}>Submit</button>
        
        </div>
        
        
        
        </div>
        )

    if(userData.user)
        return  <h2>not an admin </h2> 
}
