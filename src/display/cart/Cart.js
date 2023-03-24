import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addItems, getProducts, getTotalPrice, reduceItems, removeItems } from '../../redux/feature/postSlice'
import './cart.css'

export const Cart = () => {
const {filterItem,itemTotalPrice} = useSelector((state) => state.add)
const dispatch = useDispatch()
const navigate = useNavigate()

useEffect(()=>{
        dispatch(getProducts())
        dispatch(getTotalPrice())
},[dispatch])

const handleRemove = (ite) =>{
    dispatch(removeItems(ite))
    dispatch(getTotalPrice())
}

const handleAddItem = (ite) =>{
    dispatch(addItems(ite))
    dispatch(getTotalPrice())
}

const handleReduceItem = (ite) =>{
    dispatch(reduceItems(ite))
    dispatch(getTotalPrice())
}

  return (
<div className='container position-relative'>

    <hr className=' text-center mb-1'/>
    <h2 className='text-center mt-3'>Cart History</h2>
    <p className='bi bi-box-arrow-left text-center m-0 ' onClick={()=>navigate('/')} style={{cursor:'pointer'}}> Home</p>
    <hr className=' text-center mb-1 mt-0'/>
    {filterItem.length === 0 ?  
        (<div className='p-5 m-2'>
            <h1 className='text-center my-5'>Your Cart is Empty</h1>
        </div>)   
    :
    (<div className='container p-3 p-sm-1'>
        
        {filterItem.map((ite)=>{
            return( 
        <div className='position-relative d-flex flex-row justify-content-around align-items-center m-3 p-2 border-top border-bottom responsive_cart'>

            <div className='w-25'>
                <img className='img-fluid res_photo' src={ite.image}/>             
            </div>
            <div>
                <p className='text-center'>$ {ite.price}</p>  
                <div className='d-flex flex-row mb-2'>
                    <button className='btn btn-outline-dark' onClick={()=>handleReduceItem(ite)}>-</button>
                    <p className='text-center mx-2 mb-0 pt-2'>{ite.itemsQuantity}</p>
                    <button className='btn btn-outline-dark' onClick={()=>handleAddItem(ite)}>+</button>
                </div>
            </div>
            <div className=''>$ {ite.price * ite.itemsQuantity}</div>
            <i className="bi bi-x-lg position-absolute top-0 end-0"onClick={()=>handleRemove(ite)}></i>
        </div>)
        })}
        
        <div className='float-end m-2 p-2'>
            <p className='text-center w-100 pb-2 border-bottom border-dark'>Total price : ${itemTotalPrice.toFixed(2)}</p>
            
            <button className='btn btn-success w-100' onClick={()=>navigate('/payment')}>Paid</button>
        </div>
    </div>)}
</div>
  )
}
