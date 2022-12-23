import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../fireStoreContext/fireStoreContext'
import './header.css'
export const Header = () => {

  const {currentUser} = useAuth()
  const [menuClass,setMenuClass] = useState('displayOff');
  const [isMenuClicked,setMenuClicked] = useState(false);



  const handleClick = () => {
     if(!isMenuClicked){
      setMenuClass('buggerBar');
     }
     else{
      setMenuClass('displayOff')
     }
     setMenuClicked(!isMenuClicked);
  }


  return (
  <>
    <div className={menuClass}>
      <span onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span>
    <div className='sideBarInfo'>
      <li><NavLink to="/category/men's clothing">Men's Clothing</NavLink></li>
      <li><NavLink to="/category/women's clothing">Women's clothing</NavLink></li>
      <li><NavLink to='/category/electronics'>Electronic</NavLink></li>
      <li><NavLink to='/category/jewelery'>Jewelery</NavLink></li>
    </div>
    </div>
    <div className='relative'>
    <div className='headerContainer'>
<div className='sideBarContainer' onClick={handleClick}>
  <Link to='/'><li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></li></Link>
</div>
<div className='shopNameContainer'>
      <NavLink to='/'><li className='shopName'>VercelShop.com</li></NavLink>
</div>
<div className='profileAndCartContainer'>
      {(currentUser.length === 0) ? ( <Link to='/login'><li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></li></Link>) 
      :
      (<Link to='/profile'><li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></li></Link>)}  
       <NavLink to='/cart'><li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg></li></NavLink>
</div>
    </div>
  </div>
  </>
  )
}
