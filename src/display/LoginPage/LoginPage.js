import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../fireStoreContext/fireStoreContext'

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
    <div className='p-5'>
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <form onSubmit={(e) => handleSubmit(e)} className='d-flex flex-column h-100'>
                <h4 className='text-center'>Log in your account</h4>
                <label for='email' className='form-label mt-3'>Email</label>
                <input type='email' className='form-control' id='email' required onChange={(e)=>setEmail(e.target.value)} />
                <label for='email' className='form-label mt-3'>Password</label>
                <input type='password' className='form-control' id='password' required onChange={(e)=>setPassword(e.target.value)}/>
                <button className='btn btn-primary my-3'>Log In</button>
                <p>If You don't have a account? <NavLink to='/signup'>Sign Up</NavLink></p>
        </form>
        
    </div>
    </div>
    </>
  )
}
