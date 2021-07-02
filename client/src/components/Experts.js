import React,{useState} from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {Link} from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';


export default function Experts() {
    const [value, setValue] = useState()
    const [state,setState]=React.useState({
        email:'',
        password:'',
        lastName:'',
        FirstName:'',
        PhoneNumber:value,
        Address:'',
        City:'',
        password:'',
        conpassword:'',
        country:'',
        levelOfStudy:'',
    })
    
    function selectCountry (val) {
        setState({...state, country: val });
    }
    
    function selectRegion (val) {
        setState({...state, Address: val });
    }
    return(
        <div className="register-info-area">
            <div className="register-info">
                <h1>Register</h1>
                <div style={{display:"flex",flexDirection:'row'}}>
                        <div style={{display:"flex",flexDirection:'column'}}>
                            <input
                            onChange={(e)=>{
                                setState({...state,FirstName:e.target.value})
                            }} 
                            value={state.FirstName} type="text" name="first name" placeholder="first name"/>

                            <input onChange={(e)=>{
                                setState({...state,lastName:e.target.value})
                            }} 
                            value={state.lastName} type="text" name="last name" placeholder="last name" required="required"/>
                            
                            <input
                            onChange={(e)=>{
                                setState({...state,email:e.target.value})
                            }} 
                            value={state.email} type="email" name="email" placeholder="email"/>
                            
                            
                        </div>
                        <div style={{display:"flex",flexDirection:'column'}}>
                             <div style={{width:'100%',height:'100%'}}>
                                <PhoneInput
                                
                                international
                                defaultCountry="ET"
                                value={value}
                                onChange={(e)=>setState(setValue)}
                            />
                                </div>

                        </div>
                        
                        <div style={{display:"flex",flexDirection:'column'}}>
                            <CountryDropdown
                            style={{width:"200px"}}
                            value={state.country}
                            onChange={(val) => selectCountry(val)} />
                            <RegionDropdown
                            style={{width:"200px"}}
                            country={state.country}
                            value={state.region}
                            onChange={(val) => selectRegion(val)} />
                            <input placeholder="Address"
                            value={state.Address}
                            onChange={(e)=>{
                                setState({Address:e.target.value})
                            }} 
                            />
                        </div>
                        <div>
                                <input
                                onChange={(e)=>{
                                    setState({...state,levelOfStudy:e.target.value})
                                }} 
                                value={state.levelOfStudy} type="text" name="level of study" placeholder="level of study"/>
                            
                                <input
                                onChange={(e)=>{
                                    setState({...state,City:e.target.value})
                                }} 
                                value={state.City} type="text" name="city" placeholder="city"/>
                                
                                <input onChange={(e)=>{
                                    setState({...state,password:e.target.value})
                                }} 
                                value={state.password} type="password" name="password" placeholder="password" required="required"/>
                                <input
                                onChange={(e)=>{
                                    setState({...state,conpassword:e.target.value})
                                }} 
                                value={state.conpassword} type="password" name="confirm password" placeholder="confirm password"/>
                                
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:'column'}}>
                        <button onClick={()=>{
                            
                        }}><Link to="/register">Register</Link></button>
                    </div>
                </div>
            </div>
    );
}
