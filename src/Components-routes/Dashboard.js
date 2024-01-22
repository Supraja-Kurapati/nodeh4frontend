import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Dashboard = () => {
  const navigate=useNavigate()
  const [wel,setWel]=useState('')
  useEffect(()=>{
  const token=localStorage.getItem('token')
  console.log(token)
  if(!token){
   navigate('/login')
       alert("You Can't access Dashbord- Please check whether Log in or Not")

}
else{
  axios.get('http://localhost/5050/pages/dashboard',{headers:{authorization: `Bearer ${token}`}})
  .then((res)=>{
const response=res.data
alert(response.msg)
setWel(response.msg)
  })
}
},[navigate])
  return (
    <div>
This is DashBoard PAge
    </div>
  )
}

export default Dashboard