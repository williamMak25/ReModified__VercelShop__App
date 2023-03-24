
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../fireStoreContext/fireStoreContext'
import { auth } from '../../redux/firebase'


export const Profile = () => {
const {currentUser,userData,isLoading} = useAuth()
const [loginUserData,setLoginUserData] = useState([])
const [LogOut,setLogOut] = useState()
const navigate = useNavigate()
console.log(loginUserData)
useEffect(()=>{
  let id = currentUser.uid
  let loginUser = userData.filter((ite)=>ite.id === id)
  setLoginUserData(loginUser)
},[])

const handleLogOut = () =>{
  signOut(auth)
  .then(()=>{
    setLogOut(true)
    navigate('/')
  })
}
 
  return (
    <div className=''>
      { !loginUserData ? 
      (<div className='noUserContainer'>
        <h1>Please Wait Your Information..!</h1>
      </div>)
      :
    (<div className='py-5 container d-flex flex-column align-items-center justify-content-center'>
        <h3 className=''>User Profile</h3>
        <hr className='text-dark w-100'/>

          {loginUserData.map((ite)=> {
          return(
            <>
              <p className='mx-3'>User : <span className='text-primary'>{ite.name}</span></p>
              <p className='mx-3'>Address : <span className='text-primary'>{ite.address}</span></p>
              <p className='mx-3'>Country : <span className='text-primary'>{ite.country}</span></p>
              <p className='mx-3'>Postal Code : <span className='text-primary'>{ite.postalcode}</span></p>
              <p className='mx-3'>Phone Number : <span className='text-primary'>{ite.phnumber}</span></p>
            </>)}
          )}
          <p className='mx-3'>email : <span className='text-primary'>{currentUser.email}</span></p>
          <button onClick={handleLogOut} className='btn btn-danger'>Log Out</button>

    </div>)}
  </div>
  )
}
