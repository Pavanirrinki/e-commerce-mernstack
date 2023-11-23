import React,{useState} from 'react'
import "./Login.css"
import axios from 'axios';
import { API } from '../../API/API';

function Login() {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const loginformsubmit = (e) =>{
    e.preventDefault();
   axios.post(API+"login",{email,password}).then((res)=>localStorage.setItem("userdata",JSON.stringify(res.data)))
  }
  return (
   <div className='login-form'>
    <div className='login-container'>
      <h4 style={{textAlign:"center"}}>LOGIN</h4>
  <div className='input-field-login'>
  <h6>EMAIL</h6>
    <input type="email" className='email-input-field' value={email} onChange={(e) => setEmail(e.target.value)} required/>
  </div>
  <div className='input-field-login'>
  <h6>PASSWORD</h6>
    <input type="password" className='email-input-field' value={password} onChange={(e) => setPassword(e.target.value)} required/>
 </div>
 <p className='forgot-password'>Forgot password ?</p>
 <div className='login-btn-container'>
<button className='login-btn' onClick={loginformsubmit}>LOGIN</button>
 <p style={{fontWeight:"bolder"}}>Dont have account ? sign up</p>
 </div>
  </div>
 
   </div>
  )
}

export default Login
