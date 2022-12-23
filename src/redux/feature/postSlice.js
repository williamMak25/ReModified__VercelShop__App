import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('post/getProducts',async ()=> {
  const response = await axios.get('https://fakestoreapi.com/products')
  return [...response.data]
  
})
const postSlice = createSlice({
   
    name : 'post',
    initialState: {
        posts: [],
        filterItem: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [],
        loading: false,
        error: '',
        itemsQuantity:0,
        itemTotalPrice: 0
    },
    reducers:{
        addItems:(state,action)=>{
            const itemIndex = state.filterItem.findIndex(item => item.id ===action.payload.id)
            if(itemIndex >= 0){
                state.filterItem[itemIndex].itemsQuantity += 1;
            }
            else{
                const tempItem = {...action.payload,itemsQuantity: 1}
                state.filterItem.push(tempItem)
                console.log(tempItem)
            }
            localStorage.setItem('cartItem',JSON.stringify(state.filterItem))
        },
        removeItems:(state,action)=>{
            const remainItem = state.filterItem.filter((item)=>{
                return item.id !== action.payload.id
            })
            state.filterItem = remainItem;
            
            localStorage.setItem("cartItem", JSON.stringify(state.filterItem))
        },
        reduceItems:(state,action)=>{
            const itemInde = state.filterItem.findIndex( ite => ite.id === action.payload.id)
            if(state.filterItem[itemInde].itemsQuantity > 1){
                state.filterItem[itemInde].itemsQuantity -= 1;
            }else if(state.filterItem[itemInde].itemsQuantity === 1){
                const newItem = state.filterItem.filter(ite => ite.id !== action.payload.id)
                state.filterItem = newItem;
            }
            localStorage.setItem("cartItem", JSON.stringify(state.filterItem))

        },
        getTotalPrice:(state,action) =>{
            let {totalPrice,quantity} = state.filterItem.reduce(
                (cartTotal,filterItem) =>{
                    const {price,itemsQuantity} = filterItem
                    const totalPrice = price * itemsQuantity;

                    cartTotal.totalPrice += totalPrice;
                    cartTotal.quantity += itemsQuantity

                    return cartTotal
                },{
                    totalPrice: 0,
                    quantity: 0
                }
            )
            state.itemsQuantity = quantity;
            state.itemTotalPrice = totalPrice;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getProducts.pending,(state) => {
            state.loading = true;
        })
       builder.addCase(getProducts.fulfilled,(state,action) => {
            state.loading = false;
            state.posts = action.payload;
        })
        builder.addCase(getProducts.rejected, (state,action) => {
            state.loading = true;
            state.error = action.error.message
        })
    }
})

export default postSlice.reducer
export const {addItems,removeItems,reduceItems,getTotalPrice} = postSlice.actions
