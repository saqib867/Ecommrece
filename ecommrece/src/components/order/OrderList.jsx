import { Box, Icon } from '@mui/material'
import { HighlightOff } from '@mui/icons-material'
import React from 'react'
import './orderList.css'

function OrderList({show,showOff,order}) {
  return (
    <Box className='orderlist' >
      
        <Box className='orderlist__container'>
        <h4>Order details</h4>
            <Icon  sx={{position:'absolute',top:'0px',right:'0px',cursor:'pointer'}} onClick={showOff} ><HighlightOff/></Icon>
            <Box className='order__wrapper' sx={{display:'flex',flexDirection:{sm:'column',xs:'column'}}}>
              <Box className='order__heading' sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},justifyContent:'space-around'}}>
                <h4>Name</h4>
                <h4>Color</h4>
                <h4>Size</h4>
                <h4>Price</h4>
                <h4>Qty</h4>
                <h4>Photo</h4>
              </Box>
           {
            order?.map((v,i)=>{
              return(

                <Box key={i} className='order__desc'
                  sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},justifyContent:'space-around',position:'relative'}}>
                  <div><h4>Name: </h4><p>{v?.title}</p></div>
                  <div><h4>Color: </h4><p>{v?.color}</p></div>
                  <div><h4>Size: </h4><p>{v?.size}</p></div>
                  <div><h4>Price: </h4><p>$ {v?.price * v?.productQuantity}</p></div>
                  <div><h4>Qty: </h4><p>{v?.productQuantity}</p></div>
                  <div><h4>Photo: </h4><p>< img src={v?.photo} className="order__img" /></p></div>
                  
                </Box>
              )
            })
           }
           </Box>
        {/* <table style={{width:'100%'}} className='orderlist__table' >
        <tbody style={{paddingTop:'20px'}}>
            <tr>
                
                <th>Name</th>
                <th>Color</th>
                <th>Size</th>
                <th>Qty</th>
                <th>Price</th>
                <th colSpan={3}>Photo</th>
                <th></th>
                <th></th>
            </tr>
           { order.map((v,i)=>{

              return(

                <tr key={i}>
                  <td>{v?.title}</td>
                  <td>{v?.color} </td>
                  <td>{v?.size}</td>
                  <td>{v?.productQuantity}</td>
                  <td>{v?.price * v?.productQuantity}</td>
                  <td><img src={v?.photo} style={{width:'50px',height:'50px'}} /></td>
                </tr>  
              )
           })
       
            }
            </tbody>
         </table> */}
        </Box>
    </Box>
  )
}

export default OrderList