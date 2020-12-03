import React, { useContext } from 'react'
import Login from "../auth/Login";
import UserContext from "../../context/UserContext";
export var test;
export default function Student() {
    const { userData } = useContext(UserContext);
    //if no user data then login, if logged in but not admin role, print not an admin
    //if admin print welcome to admin page future admin stuf
    test = '1'
    alert(userData.user.displayName)
    console.log(test)
    //I dont think there is a need for findTeam(student) the way it is now
    if(!userData.user)
        return <Login/>
    return (
        <div>
            <h2>Student info page</h2>
            <table id="student-info">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Team Name</th>
                        <th>Team Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userData.user.displayName}</td>
                        <td>{userData.user.email}</td>
                        <td>{userData.user.teamName}</td> 
                        <td>{userData.user.teamNumber}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
