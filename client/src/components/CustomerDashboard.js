import React from 'react';
import {NavLink} from 'react-router-dom'

export default function CustomerDashboard() {
    return (
        <div>
            <div className="header2">
                
                <div className="nav-item">
                    <ul>
                        <li><NavLink to="/upload-cv">Upload Cv</NavLink></li>
                        <li><NavLink to="/Past Recomendations">Contact</NavLink></li>
                    </ul>
                </div> 
            </div>
            <div>
                <input file="file" name="upload cv" placeholder="upload cv"/>
            </div>
        </div>
    )
}
