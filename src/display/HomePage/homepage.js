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
    <div className='warpContainer'>
    <div className='warpper'> 
    {posts?.map((items)=>{
        return(

        <div className='ProductsContainer' key={items.id}>
            <h2>{items.title}</h2>
            <img src={items.image}alt='products'/>
            <p>$ {items.price}</p>
           <NavLink to={`/products/${items.id}`}><button>ItemDetail</button></NavLink>
        </div>

        )
    })}
</div>
</div>
  )
}
