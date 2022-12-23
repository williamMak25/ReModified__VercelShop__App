import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, getProducts, getTotalPrice, reduceItems, removeItems } from '../../redux/feature/postSlice'
import './cart.css'
export const Cart = () => {

const {filterItem,itemTotalPrice} = useSelector((state) => state.add)
const dispatch = useDispatch()
console.log(itemTotalPrice)

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
<div className='cartPageContainer'>
    {filterItem.length === 0 ?  
        (<div>
            <h1>Your Cart is Empty</h1>
        </div>)   
    :
    (<div className='carContainer'>
        {filterItem.map((ite)=>{
            return( 
        <div className='cart'>

            <div className='itemDescription'>
                <p>{ite.title}</p>
                <img style={{width:50,height:50,margin:10}} src={ite.image}/>             
                <button onClick={()=>handleRemove(ite)}>Remove</button>
            </div>
                
            <p className='cartPrice'>$ {ite.price}</p>
                
            <div className='itemQuantityContainer'>
                    <button onClick={()=>handleReduceItem(ite)}>-</button>
                    <p className='quantity'>{ite.itemsQuantity}</p>
                    <button onClick={()=>handleAddItem(ite)}>+</button>
            </div>
            <div className='totalPrice'>$ {ite.price * ite.itemsQuantity}</div>
        </div>)
        })}
        <div className='subtotal'>
            <h2>Total price</h2>
            <h1>$ {itemTotalPrice}</h1>
            <button className='paidBut'>Paid</button>
        </div>
    </div>)}
</div>
  )
}
