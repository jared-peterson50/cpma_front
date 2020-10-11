import React, { Component } from 'react'
//import {useContext} from 'react';
//import UserContext from "../../context/UserContext";
//import Login from "../auth/Login";
import tableStyle from './TeamTable.module.css'; 

class Table extends Component {

   constructor(props) {
     super(props)
      this.state = {
         students: [
          { id : 1, name: 'User', email: 'user@email.com', teamName: 'Team Users', teamNum: 21 },
          { id : 2, name: 'User2', email: 'user2@email.com', teamName: 'Team Users', teamNum: 21 },
          { id : 3, name: 'User3', email: 'user3@email.com', teamName: 'Team Users', teamNum: 21 }
         ]
      }
   }

   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, email, teamName, teamNum } = student //destructuring
       return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{teamName}</td>
            <td>{teamNum}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
  let header = Object.keys(this.state.students[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}

   render() {
      return (
         <div>
           <h1>Team Info</h1>
            <table className={tableStyle.TeamTable}>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>         
          </div>
      )
   }
}

export default Table 
