import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../fireStoreContext/fireStoreContext'
import './Login.css'

export const LoginPage = () => {
    const {signIn,Loading} = useAuth()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn(email,password)
        navigate('/profile')
    }

  return (
    <>
    <div className='warp'>
    <div className='loginFormContainer'>
        <form onSubmit={handleSubmit} className='loginForm'>
            <h1>Log In Your Account</h1>
            <div className='loginEmailContainer'>
                <input type='email' id='email' required onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            </div>
            <div className='loginPasswordContainer'>
                <input type='password' id='password' required onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
            </div>
            <button>Log In</button>
            <div className='infoContainer'>
                <h3>If You don't have a account? <NavLink to='/signup'>Sign Up</NavLink></h3>
            </div>
        </form>
        
    </div>
    </div>
    </>
  )
}
