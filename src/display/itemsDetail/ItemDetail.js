import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getTotalPrice,reduceItems,getProducts,addItems} from '../../redux/feature/postSlice'
import './itemDetail.css'

export const ItemDetail = () => {

    const {posts} = useSelector((state)=> state.post)
    const [itemDetail,setItemDetail] = useState([])
    const {id} = useParams()
    const dispatch = useDispatch()
    const {filterItem,itemTotalPrice} = useSelector((state) => state.add)
    console.log(filterItem)
    console.log(itemDetail)
    useEffect(()=>{
        dispatch(getProducts());
        const currentItem = posts[id-1]
        setItemDetail(currentItem)
    },[dispatch])

    const handleAdditem = (itemDetail) => {
        dispatch(addItems(itemDetail))
    }
    const handleAddItem = (itemDetail) =>{
      dispatch(addItems(itemDetail))
      dispatch(getTotalPrice())
  }
  
  const handleReduceItem = (itemDetail) =>{
      dispatch(reduceItems(itemDetail))
      dispatch(getTotalPrice())
  }
  return (
    <div className='container p-5'>
      <p className='fs-4'>{itemDetail?.title}</p>
      <hr/>
      
    <div className='container  responsiveBox'>
      <div className='w-50'>  
        <img src={itemDetail?.image} className="img-fluid w-50 h-50 res_img"/> 
      </div>   
      <div className='d-flex flex-column align-items-start justify-content-center'>
          <p className='my-4'>Category : <span className=' px-2 py-1 rounded text-dark'>{itemDetail?.category}</span></p>
          <p >Price : <span className='text-success px-2 rounded'>$ {itemDetail?.price}</span> </p>

          <div className='d-flex flex-row justify-content-between align-items-center w-50 mb-2'>
              <button className='btn btn-outline-dark' onClick={()=>handleReduceItem(itemDetail)}>-</button>
              <p className='text-center mx-2 mb-0'>{filterItem.find(item => item.id === itemDetail.id) ? filterItem.find(item => item.id === itemDetail.id).itemsQuantity : 0}</p>
              <button className='btn btn-outline-dark' onClick={()=>handleAddItem(itemDetail)}>+</button>
          <p className='text-center mb-0 mx-2'> Qty</p>
          </div>
          <div className='my-3'>
            <NavLink to='/cart' className='my-2 bg-dark text-white text-decoration-none me-2 border border-dark border-1 rounded px-2 p-1'>Cart</NavLink>
            <NavLink to='/' className='my-2 bg-dark text-white text-decoration-none mx-2 border border-dark border-1 rounded px-2 p-1'>Back</NavLink>
          </div>
      </div>
    </div>
   
    <p className='text-start mt-4' >{itemDetail?.description}</p>
    </div>
  )
}
