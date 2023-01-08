import { createSlice } from "@reduxjs/toolkit"

const initialState={
    
    userId:null,
    price:0,
    products:[],
    address:''

}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
          
        order:(state,action)=>{

            state.products.push(action.payload)
            state.cartQuantity=state.cartQuantity + 1
            state.total=state.total+action.payload.price *action.payload.productQuantity
       

    },
  }})
  
  // Action creators are generated for each case reducer function
  export const { order} = orderSlice.actions
  
  export default orderSlice.reducer