
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../fireStoreContext/fireStoreContext'
import { auth } from '../../redux/firebase'
import './profile.css'

export const Profile = () => {
const {currentUser,userData,Loading} = useAuth()
const [loginUserData,setLoginUserData] = useState([])
const [LogOut,setLogOut] = useState()
const navigate = useNavigate()

useEffect(()=>{
  let id = currentUser.uid
  let loginUser = userData.filter((ite)=>ite.id === id)
  setLoginUserData(loginUser)
},[loginUserData])

const handleLogOut = () =>{
  signOut(auth)
  .then(()=>{
    setLogOut(true)
    navigate('/')
  })
}
 
  return (
    <div className='warp'>
      { LogOut ? 
      (<div className='noUserContainer'>
        <h1>Please Wait Your Information..!</h1>
      </div>)
      :
    (<div className='profileContainer'>
       <div className='userDataContainer'>
       <h1>User Profile</h1>
        {loginUserData.map((ite)=> {
          return <p><b>User Name :</b><span> {ite.username}</span></p>}
          )}
          <p><b>Email :</b><span> {currentUser.email}</span></p>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
 
    </div>)}
  </div>
  )
}
