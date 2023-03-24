import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getProducts } from '../../redux/feature/postSlice';
import './homepage.css'
export const HomePage = () => {

    const {posts,loading} = useSelector((state) => state.post)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[])


    

  return (
    <div className='container'>
    <div className=' row row-cols-lg-4 row-cols-md-3 row-cols-2 px-sm-2 p-1 mx-0 gx-0'> 
    {posts?.map((items)=>{
        return(

  <NavLink to={`/products/${items.id}`} className='col text-decoration-none text-dark effect'>
    <div className='d-flex flex-column justify-content-around align-items-center h-100' key={items.id}>
           
            <img src={items.image}alt='products' className='w-50 h-50'/>
            <small className=' text-center'>{items.title}</small>
            <p className='bg-success text-white px-2 rounded'>$ {items.price}</p>
          
        </div></NavLink>

        )
    })}
</div>
</div>
  )
}
