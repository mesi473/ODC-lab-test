import React from 'react';
import '../App.css';
import {NavLink,Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/core'
import ETHIcon from '../images/ETH.png';
import USAIcon from '../images/USA.png';

const useStyle=makeStyles({
    searchInput:{
        borderRadius:"50px",
        height:"50px"
    },
    cartButton:{
        borderRadius:"100px",
        height:"50px",
        marginLeft:"100px"
    },
    signInBtn:{
        borderRaduis:"10px",
        marginTop:'5px',
        backgroundColor:"#A7D81C",
        marginLeft:"auto",
        height:"30px"
    }
})

export default function Header() {
    
    return (
        <div>
            <div className="header1">
                <div className="flag">
                    <img width="30px" height="30px" src={ETHIcon} alt="ETH"/>
                    <img width="30px" height="30px" style={{marginTop:"2px",marginLeft:"5px"}} src={USAIcon} alt="USA"/>
                </div>
                <div className="logo">
                    <h2>ODC CV Builder</h2>
                </div>
            </div>
            <div className="header2">
                
                <div className="nav-item">
                    <ul>
                        <li>
                        <div className="tooltip">
                        <NavLink to="/">
                            Register
                        </NavLink>
                            <div className="tooltiptext">
                                <ul>
                                    <li className="horzline"></li>
                                    <li><NavLink  to="/register/customer">Customer</NavLink></li>
                                    <li><NavLink to="/register/admin">Admin</NavLink></li>
                                    <li><NavLink to="/register/experts">Experts</NavLink></li>
                                </ul>
                            </div>
                        </div></li>
                        <li><NavLink to="/About">Login</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div> 
            </div>
            
        </div>
    )
}
