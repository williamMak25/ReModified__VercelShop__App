import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useParams } from 'react-router-dom'
import { getProducts } from '../../redux/feature/postSlice'
import './category.css'

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
    <div className='categoryContainer'>
        {filterItem.map((ite)=>{
            return(
                <div className='itemContainer' key={ite.title}>
                <h2>{ite.title}</h2>
                <img src={ite.image}alt='products'/>
                <p>$ {ite.price}</p>
                <NavLink to={`/products/${ite.id}`}><button>ItemDetail</button></NavLink>
            </div>
            )
        })}
    </div>
  )
}
