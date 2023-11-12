import React from 'react'
import "./Login.css"
function Login() {
  return (
   <div className='login-form'>
    <div className='login-container'>
      <h4 style={{textAlign:"center"}}>LOGIN</h4>
  <div className='input-field-login'>
  <h6>EMAIL</h6>
    <input type="email" className='email-input-field'/>
  </div>
  <div className='input-field-login'>
  <h6>PASSWORD</h6>
    <input type="password" className='email-input-field'/>
 </div>
 <p className='forgot-password'>Forgot password ?</p>
 <div className='login-btn-container'>
<button className='login-btn'>LOGIN</button>
 <p style={{fontWeight:"bolder"}}>Dont have account ? sign up</p>
 </div>
  </div>
 
   </div>
  )
}

export default Login
