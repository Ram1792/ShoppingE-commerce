import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Login = () => {
   const [name,setname]=useState("")
   const ddd={name}
   const eventclick=()=>{
       
        
   }

  return (
     <>
      <div className='login-page'>
     <div className='login-head'>
         <h1>Login</h1> 
        </div>
     <div className='login-input'>
        <input type="email" name="" id="" placeholder='Enter your email' onChange={(e)=>{setname(e.target.value)}} />
        <input type="password" name="" id="" placeholder='Enter your password' onChange={(e)=>{setname(e.target.value)}} />
     </div>
     <div className='login-btn-main'>
        <button className='loginbtn' onSubmit={eventclick}>Login</button>
        <button className='loginbtn' onSubmit={eventclick}>Sign-up</button>
       </div>
    </div>
     </>
  )
}

export default Login
