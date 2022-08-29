import React from "react";
import './dashboard.css';
// import { useHistory } from "react-router-dom";

function Studentdashboard() {


    return(
        <div className="dashboard">
            <div className="navs">
                <ul>
                    <a href=" http://localhost:3000/profile">PROFILE</a>
                    <a href=" http://localhost:3000/dashboard">DASHBOARD</a>
                    <a href=" http://localhost:3000/support">SUPPORT</a>
                </ul>
            </div>
            <div className="dash">
            <div className="upper">
                <h1 style={{marginLeft:150}}>Hi Student's Name</h1>
                <p style={{marginLeft:150}}>Welcome to your dashboard</p>
            </div>

            <div className="activities">
                <div className="act-1">
                    <p>current courses</p>
                </div>
                <div className="act-2">
                    <p>unclaimed certificates</p>
                </div>
                <div className="act-3">
                    <p>study reminders</p>
                </div>
                <div className="act-4">
                    <p>my certificates</p>
                </div>
            </div>
            </div>
        </div>
    )
    
}
export default Studentdashboard;