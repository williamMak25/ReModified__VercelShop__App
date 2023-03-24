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
      <p className="bi bi-arrow-left-circle m-0"onClick={handleClick}></p>
      <div className='sideBarInfo overflow-hidden'> 
        <li className='list-group-item m-3'><NavLink to="/category/men's clothing" className='text-decoration-none text-dark'>Men's Clothing</NavLink></li>
        <li className='list-group-item m-3'><NavLink to="/category/women's clothing" className='text-decoration-none text-dark'>Women's clothing</NavLink></li>
        <li className='list-group-item m-3'><NavLink to='/category/electronics' className='text-decoration-none text-dark'>Electronic</NavLink></li>
        <li className='list-group-item m-3'><NavLink to='/category/jewelery'className='text-decoration-none text-dark'>Jewelery</NavLink></li>
      </div>
    </div>

    <nav className='navbar sticky-top bg-warning flex justify-content-around navContainer'>
      <div className='toggle' onClick={handleClick}>
        <Link to='/'className='text-decoration-none text-white'><li className='list-group-item mx-2'><i className="bi bi-list"></i></li></Link>
      </div>
      <NavLink to='/'className='text-decoration-none text-white me-3'><li className='list-group-item mx-2'>VercelShop.com</li></NavLink>
      <div className='navbar res_disable'>
        <li className='list-group-item mx-2'><NavLink to="/category/men's clothing" className='text-decoration-none text-white'>Men's Clothing</NavLink></li>
        <li className='list-group-item mx-2'><NavLink to="/category/women's clothing" className='text-decoration-none text-white'>Women's clothing</NavLink></li>
        <li className='list-group-item mx-2'><NavLink to='/category/electronics'className='text-decoration-none text-white'>Electronic</NavLink></li>
        <li className='list-group-item mx-2'><NavLink to='/category/jewelery'className='text-decoration-none text-white'>Jewelery</NavLink></li>
      </div>
      <div className='d-flex flex-row justify-content-between p-0'>
        {(currentUser.length === 0) ? ( <Link to='/login' className='text-decoration-none  text-white'><h2 className='list-group-item mx-2'><i className="bi bi-person"></i></h2></Link>) 
        :
        (<Link to='/profile' className='text-decoration-none text-white  pb-0'><li className='list-group-item mx-2'><i className="bi bi-person"></i></li></Link>)}  
        <NavLink to='/cart' className='text-decoration-none text-white'><li className='list-group-item mx-2'><i className="bi bi-bag"></i></li></NavLink>
      </div>
    </nav>
  </>
  )
}
