import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getProducts,addItems} from '../../redux/feature/postSlice'
import './itemDetail.css'

export const ItemDetail = () => {

    const {posts} = useSelector((state)=> state.post)
    const [itemDetail,setItemDetail] = useState([])
    const {id} = useParams()
    const dispatch = useDispatch()
    console.log(itemDetail)
    
    useEffect(()=>{
        dispatch(getProducts());
        const currentItem = posts[id-1]
        setItemDetail(currentItem)
    },[dispatch])

    const handleAdditem = (itemDetail) => {
        dispatch(addItems(itemDetail))
    }

  return (
    <div className='itemDetailContainer'>
        <p className='title'>{itemDetail.title}</p>
        <p className='price'>$ {itemDetail.price}</p>
        <img src={itemDetail.image} className="photo"/>
        <p className='description'>{itemDetail.description}</p>
        <div>
        <button className='cartBut' onClick={() => handleAdditem(itemDetail)}>Add to Cart</button>
        <NavLink to='/'><button className='toHome'>Home</button></NavLink>
        </div>
    </div>
  )
}
