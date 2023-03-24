import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useParams } from 'react-router-dom'
import { getProducts } from '../../redux/feature/postSlice'

export const Category = () => {
    const [filterItem,setFilterItem] = useState([])
    const {posts} = useSelector((state) => state.post)
    const {type} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
        let filteredProducts = posts.filter((ite)=>{
            return ite.category === type
          })
          setFilterItem(filteredProducts)
    },[posts])
    
    

    
  return (
    <div className='container'>
    <div className='container row row-cols-lg-4 row-cols-md-3 row-cols-1 p-5'>
        {filterItem.map((ite)=>{
            return(
              <NavLink to={`/products/${ite.id}`} className='text-decoration-none text-dark effect'>
              <div className='d-flex flex-column justify-content-around align-items-center h-100' key={ite.id}>
                     
                      <img src={ite.image}alt='products' className='w-50 h-50'/>
                      <small className=' text-center'>{ite.title}</small>
                      <p className='bg-success text-white px-2 rounded'>$ {ite.price}</p>
                    
                  </div></NavLink>
            )
        })}
    </div>
    </div>
  )
}
