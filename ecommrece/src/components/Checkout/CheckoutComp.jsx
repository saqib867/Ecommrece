import { Box, Button, Icon, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewLetter from '../newsLetter/NewLetter'
import './checkoutComp.css'
import eimg from '../../eimg.PNG'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import  { privateUrl, publicUrl } from '../../axios'
import { addProduct, emptyCart, removeItem } from '../../redux/Reducer'
import { CancelOutlined } from '@mui/icons-material'

function CheckoutComp() {
     
  const finalProduct=useSelector(state=>state.productState)
  console.log("final product.length ",finalProduct.products)
  const userId=useSelector(state=>state.userReducer.user._id)
  const dispatch=useDispatch()
  const [stripeToken,setStripeToken]=useState('')
  const navigate=useNavigate()

 
  const onToken=(token)=>{

    setStripeToken(token)
  }

  const removeProduct=(id)=>{

            dispatch(removeItem(id))
            console.log("id ",id)
  }

  useEffect(()=>{ 
   
    stripeToken && privateUrl.post('/stripe/payment',{tokenId:stripeToken.id,amount:(finalProduct?.total*100)+15})
    .then(res=>{
      
          console.log('checkout=> ',res.data)
          const orderData={

            price:res.data.amount/100,
            address:res.data.billing_details?.address.country +', '+res.data.billing_details?.address.city +', '+res.data.billing_details?.address.postal_code,
            userId,
            product:finalProduct.products
          }
          privateUrl.post('/order/',orderData)
          .then(orderRes=>{
               
               dispatch(emptyCart())
               navigate('/order')
          })
          .catch(err=>console.log("error ",err))
    })
    .catch(err=>console.log('error ',err))
},[stripeToken]) 

const continueShoping=()=>{

       navigate('/')
}  

const clearCart=()=>{
     
       dispatch(emptyCart())
       navigate('/')
}
  return (
    <Box className='checkoutComp'>
        <Navbar/>
        <Box className='checkout__wrapper'>
            <h1>Your Cart</h1>
            <button onClick={()=>navigate('/order')}>Your Orders</button>
            {finalProduct.products.length>0 ? <Box className='checkout'>
               <Box className='checkout__shop'>
                  <button className='shop__btn' onClick={continueShoping}>Continue Shopping</button>
                  <Box className='shop__lines'>
                    <p>Shopping Bags(2)</p>
                    <p>Your wishlist(0)</p>
                  </Box>
                  <button className='checkout__btn' onClick={clearCart}>Clear Cart</button>
               </Box>
               <Box className='checkout__details'>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
                  {finalProduct.products?.map((v,i)=>{

                    return(
                      <Box className='checkout__items' key={i}>
                        <IconButton onClick={()=>removeProduct(v?._id)}  sx={{position:'absolute',top:'0px',left:'0px'}} >
                          <CancelOutlined/>
                          </IconButton>
                      <Box className='checkout__item'>
                         <img src={v?.photo}/>
                         <Box className='item__details'>
                              <div>
                                <h4>Title: </h4>
                                <p> {v?.title}</p>
                              </div>
                              <div>
                                <h4>ID: </h4>
                                <p >{v?._id.slice(12,23)}</p>
                              </div>
                              <div>
                                <h4>Size: </h4>
                                <p>{v?.size}</p>
                              </div>
                              <div>
                                <h4>color: </h4>
                                <p style={{backgroundColor:`${v?.color}`,width:'15px',height:'15px',borderRadius:'50%'}}></p>
                              </div>
                              
                         </Box>
                      </Box>
                      <Box className='checkout__price'>
                             
                               <div>
                                <h4>Quantity :</h4>
                                <p>{v?.productQuantity}
                                </p>
                                
                               </div>
                               <p>$ {v?.price}</p>
                             
                      </Box>
                  </Box>    
                    )
                  })}
                  
                  </Box>
                  <Box className='checkout__summary'>
                          <h2>ORDER SUMMARY</h2>
                          <Box className='summary__details'>
                          <div>
                              <p>Sub total</p>
                              <p>$ {finalProduct?.total}</p>
                          </div>
                          <div>
                              <p>Shipping cost</p>
                              <p>$ 10</p>
                          </div>
                          <div>
                              <p>Discount</p>
                              <p>$ 5</p>
                          </div>
                          <div>
                              <p>Total</p>
                              <p>$ {finalProduct?.total + 15}</p>
                          </div>
                          <StripeCheckout
                               stripeKey='pk_test_51KyeKsLfmQwGfsJ0BpBwz9bklWJuDkGNmVWohozKv52xqi3UKhAu9kPlsphpl4qO4q4Pv00Dk5NDIntgK1VcmUOF00JFrqPio1'
                               token={onToken}
                               billingAddress
                               image={eimg}
                               shippingAddress
                               description={`Your total is $ ${finalProduct?.total+15}`}
                               amount={finalProduct?.total * 100 +15*100}
                               panelLabel='pay bill'
                               currency='USD'
                               name='DEALS'
                               
                               >
                            <button  className='summary__button'
                           
                            >Checkout</button>
                        </StripeCheckout>   
                      </Box>
                  </Box>
               </Box>
            </Box>:
              <Box sx={{fontSize:'23px',marginTop:'20px'}}>There is no item in your cart</Box>
            }
        </Box>
        <Footer/>
    </Box>
  )
}

export default CheckoutComp