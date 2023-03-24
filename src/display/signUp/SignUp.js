import React from 'react'
import { useAuth } from '../../fireStoreContext/fireStoreContext'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './signup.css'


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
    <div className='d-flex flex-column justify-content-center align-items-center p-5'>
        <form onSubmit={handleSubmit} className=' d-flex flex-column '>
            <h4 className='text-center mb-3'>Create your account</h4>
            <label className='form-label'>User name</label>
            <input type='text' id='username' className='form-control' onChange={(e)=>setUsername(e.target.value)} required/>

            <label className='form-label'>Email</label>
            <input type='email' id='email' className='form-control' onChange={(e)=>setEmail(e.target.value)}required />

            <label className='form-label'>Password</label>
            <input type='password' id='password' className='form-control' onChange={(e)=>setPassword(e.target.value)}required/>

            <label className='form-label'>Comfirm password</label>
            <input type='password' id='passwordConfirm' className='form-control' onChange={(e)=>setPasswordComfirm(e.target.value)}required/>

            <button className='btn btn-primary my-3'>Signup</button>
            <div>
              <p>If you already have account? <NavLink to='/login'>Log In</NavLink></p>
            </div>
      </form>
      </div>
    </>
  )
}
