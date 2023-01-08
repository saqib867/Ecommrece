import { createSlice } from "@reduxjs/toolkit"

const initialState={
    
    userId:null,
    cartQuantity:0,
    total:0,
    products:[]

}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
          
        addProduct:(state,action)=>{

            state.products.push(action.payload)
            state.cartQuantity=state.cartQuantity + 1
            state.total=state.total+action.payload.price *action.payload.productQuantity
    },
       emptyCart:(state,action)=>{

          state.products=[]
          state.cartQuantity=0
          state.total=0
       },
       removeItem:(state,action)=>{
             
            
            state.products= state.products.filter(item=>item._id !== action.payload)
            state.cartQuantity=state.cartQuantity - 1
            
       }
  }})
  
  // Action creators are generated for each case reducer function
  export const { addProduct,emptyCart,removeItem} = productSlice.actions
  
  export default productSlice.reducer