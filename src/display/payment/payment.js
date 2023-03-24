import React, { useState } from 'react'
import { AddressElement,CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './payment.css'
import { Cart } from '../cart/Cart';
import { useAuth } from '../../fireStoreContext/fireStoreContext';

export const Payment = () => {
  const {userInfo} = useAuth()
    const stripe = useStripe();
    const element = useElements();
    const [firstname,setfirstName] = useState('');
    const [lastname,setlastName] = useState('');
    const [address,setAddress] = useState('');
    const [postcode,setPostcode] = useState('');
    const [country,setCoutry] = useState('');
    const [phno,setPhno] = useState('');
    console.log(typeof phno)
    const handleSubmit = (e) =>{
      e.preventDefault()
      userInfo(firstname,lastname,address,postcode,country,phno)
    }
  return (
    <div className='container p-3' onSubmit={handleSubmit}>
        <form id='payment-form' className='form-control w-100 p-2'>
          <h2 className='text-center'>User Information</h2>
          <div>
            <label for='email' className='form-label'>Email</label>
            <input className="form-control"/>
          </div>
            <div className='input-group my-3'>
              <label for='firstname' className='input-group-text'>First name</label>
              <input id='firstname' className="form-control" onChange={(e)=>setfirstName(e.target.value)}/>
              <label for='lastname' className='input-group-text'>Last name</label>
              <input id='lastname' className="form-control" onChange={(e)=>setlastName(e.target.value)}/>
            </div>
          <div>
            <label for='address' >Address</label>
            <textarea id='address' className="form-control"onChange={(e)=>setAddress(e.target.value)}/>
          </div>
            <div className='input-group my-3'>
              <label for='country'  className='input-group-text'>Country</label>
              <input type='country' id='country' className="form-control" onChange={(e)=>setCoutry(e.target.value)}/>
              <label for='postalcode' className='input-group-text'>Post Code</label>
              <input id='postalcode' className="form-control" onChange={(e)=>setPostcode(e.target.value)}/>
            </div>
          <div>
            <label for='phno'>Phone Number</label>
            <input className="form-control" onChange={(e)=>setPhno(e.target.value)}/>
          </div>
          <div className='my-3'>
            <label for='card' className='mb-2'>Payment</label>
            <CardElement className='form-control'/>  
          </div> 
          <button className='bottom'>Cash Out</button> 
        </form>
    </div>
  )
}
