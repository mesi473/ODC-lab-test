import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import Header from './Header';
import '../App.css'


export default function Login() {
    const [state,setState]=React.useState({
        username:'',
        password:''
    })
    return (
        <div>
            <Header/>
            <div className="login-page">
                <div className="login-area">
                    <div className="log">
                        <h1>login</h1>
                        <select>
                            <option>Admin</option>
                            <option>Customer</option>
                            <option>Expert</option>
                        </select>
                        <input
                        onChange={(e)=>{
                            setState({...state,username:e.target.value})
                        }} 
                        value={state.username} type="text" name="email" placeholder="email"/>
                        <input onChange={(e)=>{
                            setState({...state,password:e.target.value})
                        }} 
                        value={state.password} type="password" name="password" placeholder="password" required="required"/>
                        <Link  to="/admin/dashboard" onClick={()=>{
                            
                        }}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
