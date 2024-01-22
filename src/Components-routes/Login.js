import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

const handleLogin=()=>{
  try {
    const response=axios.post('https://nhfour.onrender.com/pages/login',{email,password})
    .then((res)=>{
      console.log(res.data,"User Login Data")
      if(res.data.msg==="Login successful!!"){
        console.log("login success")
        localStorage.setItem("token",res.data.token)
      }
     if(res.data.msg==="You Havent Registered Yet"){
      alert("you Haven't Registered Yet")
      navigate('/register')
     }
    })
    console.log(response.data,"Response Data")
  } catch (error) {
    console.log(error,"Error in Login");
  }
}


  return (
    <div>
        <label>Email: </label><br/>
<input type='text'  value={email} onChange={(e)=>setEmail(e.target.value)} required id="myInput"/><br/>

<label>Password: </label><br/>
<input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
<br/>
<br/>
<button onClick={handleLogin}>LogIn</button>

    </div>
  )
}

export default Login