import React from 'react'
import "./Signup.css"
import { CgProfile } from 'react-icons/cg';
function Signup() {
  return (
    <div className='body'>
<div class="signup-container">
    <div class="profile-pic1">
        <CgProfile />
        </div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div class="input-box">
            <span class="details">LastName</span>
            <input type="text" placeholder="Enter your lastname" required />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required />
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
        </div>
    
        <div class="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Signup
