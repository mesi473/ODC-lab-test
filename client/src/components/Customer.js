import React from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default function Customer() {
    const [value, setValue] = useState()
    const [state,setState]=React.useState({
        email:'',
        password:'',
        lastName:'',
        FirstName:'',
        DateB:'',
        PhoneNumber:value,
        Address:'',
        City:'',
        password:'',
        conpassword:'',
        country:'',
    })
    
    function selectCountry (val) {
        setState({...state, country: val });
    }
    
    function selectRegion (val) {
        setState({...state, Address: val });
    }
    return(
        <div className="login-page">
            <div className="login-area">
                <div className="log">
                    <h1>Register</h1>
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
                    
                    <input onChange={(e)=>{
                        setState({...state,DateB:e.target.value})
                    }} 
                    value={state.DateB} type="date" name="Date Birth" placeholder="Date Birth" required="required"/>
                    
                    <PhoneInput
                        international
                        defaultCountry="ET"
                        value={value}
                        onChange={(e)=>setState(setValue)}
                        />
                    
                    <CountryDropdown
                            style={{width:"200px"}}
                            value={state.country}
                            onChange={(val) => selectCountry(val)} />
                            <RegionDropdown
                            style={{width:"200px"}}
                            country={state.country}
                            value={state.region}
                            onChange={(val) => selectRegion(val)} />
                            <input placeholder="street/ሰፈር"
                            value={state.street}
                            onChange={(e)=>{
                                setState({street:e.target.value})
                            }} 
                    />
                    
                    
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
                    
                     
                    <Link  to="/admin/dashboard" onClick={()=>{
                        
                    }}>Register</Link>
                </div>
            </div>
        </div>
    )
}
