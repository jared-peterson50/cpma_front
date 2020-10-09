import React from 'react'
import {useContext} from 'react';
import UserContext from "../../context/UserContext";
import Login from "../auth/Login";
import {Line} from 'react-chartjs-2';

export default function ScoreBoard() {
    const { userData } = useContext(UserContext);
    const state = {
        labels: ['Scenario 1', 'Scenario 2', 'Scenario 3',
                 'Scenario 4', 'Scenario 5'],
        datasets: [
          {
            label: 'Team 4',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(255,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          },
          {
            label: 'Team 14',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,255,0,1)',
            borderWidth: 2,
            data: [51, 87, 91, 67, 71]
          },
          {
            label: 'Team 27',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,255,1)',
            borderWidth: 2,
            data: [61, 74, 67, 84, 65]
          }
        ]
      }
    if(!userData.user)
        return <Login/>
    return (
        <div>
            <h1>Welcome {userData.user.displayName} to the scoreboard page </h1>
            <div>
                <Line
                data={state}
                options={{
                    title:{
                    display:true,
                    text:'Scores for Top 3 Teams',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
            </div>
        </div>
        
    )
}
