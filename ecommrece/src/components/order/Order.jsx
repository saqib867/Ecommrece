import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import OrderList from './OrderList'
import {privateUrl} from '../../axios'
import './order.css'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'

function Order(props) {

  const [show,setShow]=useState(false)
  const [orderProduct,setOrderProduct]=useState([])
  const [singleOrder,setSingleOrder]=useState([])
  const userId=useSelector(state=>state.userReducer.user._id)

  const showOff=()=>{

      setShow(false)
      setSingleOrder([])
  }


useEffect(()=>{

         const  getProduct=async()=>{
                 try {
                  
                  const product= await privateUrl.get(`/order/find/${userId}`)
                   setOrderProduct(product.data)
                   setShow(true)
                 } 
                 catch (error) {
                     console.log('ordre error',error)
                 }
          }

          getProduct()
},[])



const showOrder=(id)=>{
       let prod=[]
  orderProduct.map(v=>{
       
        if(v._id===id){
            v.product.forEach(element => {
                     prod.push(element)
            });
        }
  })  
   setSingleOrder(prod)
  
}

  return (
    <Box  >
      <Navbar/>
       
        <Box className='order' sx={{display:'flex',flexDirection:'column'}}>
        { singleOrder.length>0 && <OrderList showOff={showOff} order={singleOrder} />}
          <h3> Your Orders</h3>
          <Box className='order__wrapper' sx={{display:'flex',flexDirection:{sm:'column',xs:'column'}}}>
              <Box className='order__heading' sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},justifyContent:'space-around'}}>
                <h4>ID</h4>
                <h4>price</h4>
                <h4>Address</h4>
                <h4>Date</h4>
              </Box>
              {!orderProduct ? "No Order Yet" : orderProduct?.map((v,i)=>{

                return(
                  <Box key={i} className='order__desc'
                  onClick={()=>showOrder(v?._id)} 
                  sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},justifyContent:'space-around'}}>
                  <div><h4>ID: </h4><p>#{v?._id.slice(12,24)}</p></div>
                  <div><h4>Price: </h4><p>$ {v?.price}</p></div>
                  <div><h4>Address: </h4><p>{v?.address}</p></div>
                  <div><h4>Date: </h4><p>{new Date(v?.createdAt).getDay()+'-'+new Date(v?.createdAt).getMonth()+'-'+new Date(v?.createdAt).getFullYear()}</p></div>
                </Box>
                )
              })
             
           }
             
          </Box>
         
        </Box>
    </Box>
  )
}

export default Order