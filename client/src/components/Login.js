import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import Header from './Header';
import '../App.css';
import CustomerDashboard from './CustomerDashboard';


export default function Login() {
    const [state,setState]=React.useState({
        email:'',
        password:'',
        userType:'admin',
        message:[],
        success:false
    })
    function LoginInputHandler(){
        const defaultValue={
            email:"meseretkifle2@gmail.com",
            password:"mesi"
        }

        if(!state.email||!state.password){
            setState({message:state.message.concat('all fields are required')})
        }
        else{
            if(state.email!==defaultValue.email && state.password!==defaultValue.password){
                setState({message:state.message.concat('incorrect email or password')})
            }else{
                setState({success:true})
            }
        }
    }
    if(!state.success)
    return (
        <div>
            <Header/>
            <div className="login-page">
                <div className="login-area">
                    <p>{state.message.map(m=>(
                        <p>{m}</p>
                    ))}</p>
                    <div className="log">
                        <h1>login</h1>
                        <select value={state.userType} onChange={(e)=>{
                            setState({...state,userType:e.target.value})
                        }}>
                            <option disabled>Login as</option>
                            <option value="admin">Admin</option>
                            <option value="customer">Customer</option>
                            <option value="expert">Expert</option>
                        </select>
                        <input
                        onChange={(e)=>{
                            setState({...state,email:e.target.value})
                        }} 
                        value={state.email} type="text" name="email" placeholder="email"/>
                        <input onChange={(e)=>{
                            setState({...state,password:e.target.value})
                        }} 
                        value={state.password} type="password" name="password" placeholder="password" required="required"/>
                        <Link  to="/customer/dashboard" onClick={()=>{
                            LoginInputHandler(state);
                        }}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
    else{
        return <CustomerDashboard/>
    }
}
