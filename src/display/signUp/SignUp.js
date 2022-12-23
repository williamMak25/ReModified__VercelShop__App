import React from 'react'
import { useAuth } from '../../fireStoreContext/fireStoreContext'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './signUp.css'

export const SignUp = () => {
const {signUp,err} = useAuth()
const [username,setUsername] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [passwordConfirm,setPasswordComfirm] = useState('')
const navigate = useNavigate()

const handleSubmit = (e) =>{
    e.preventDefault()
    if(password !== passwordConfirm){
      alert('password not match')
    }else{
    signUp(email,password,username)
    navigate('/profile')}
}
  return (
    <>
    <div className='formContainer'>
        <form onSubmit={handleSubmit} className='signupForm'>
            <h1>Sign Up for your Account</h1>
          <div className='userNameContainer'>
            <input type='text' id='username' onChange={(e)=>setUsername(e.target.value)}required placeholder='username'/>
          </div>
          <div  className='emailContainer'>
            <input type='email' id='email' onChange={(e)=>setEmail(e.target.value)}required placeholder='email'/>
          </div>
          <div className='passwordContainer'>
            <input type='password' id='password' onChange={(e)=>setPassword(e.target.value)}required placeholder='pasword'/>
          </div>
          <div className='passwordConfirmContainer'>
            <input type='password' id='passwordConfirm' onChange={(e)=>setPasswordComfirm(e.target.value)}required placeholder='confirm password'/>
          </div>
            <button>Signup</button>
            <div>
              <h3>If you already have account? <NavLink to='/login'>Log In</NavLink></h3>
            </div>
      </form>
      </div>
    </>
  )
}
