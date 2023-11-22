import React,{useState} from 'react'
import "./Signup.css"
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { signupActions } from '../../Redux/MiddlewareActions';
import { API } from '../../API/API';
import axios from "axios"
function Signup() {
  const dispatch = useDispatch();
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const payload ={
    firstname,lastname,email,password
  }
  const userdata = useSelector((state) => state.userReducer);

  const signupformSubmit=async(e)=>{
    e.preventDefault();
await dispatch(signupActions(payload))
    console.log(firstname,lastname,email,password)
    console.log(userdata ,'userdata');
}

 return (
    <div className='body'>
<div class="signup-container">
    <div class="profile-pic1">
        <CgProfile />
        </div>
    <div class="content">
      <form  onSubmit={signupformSubmit}>
        <div class="user-details">
          <div class="input-box" >
            <span class="details">First Name</span>
            <input type="text" placeholder="Enter your name" value={firstname} onChange={(e) => setFirstname(e.target.value)}  required />
          </div>
          <div class="input-box">
            <span class="details">LastName</span>
            <input type="text" placeholder="Enter your lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
         
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
         
        </div>
    
        <div class="button">
          <input type="submit" value={userdata.isLoading ? "loading........":"Register"} />
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Signup
