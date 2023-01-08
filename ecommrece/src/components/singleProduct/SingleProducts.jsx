import { Alert, Box } from '@mui/material'
import React, { useEffect } from 'react'
import {  useParams } from 'react-router'
import {Navigate,useNavigate} from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewLetter from '../newsLetter/NewLetter'
import {publicUrl} from '../../axios'
import './singleproduct.css'
import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'
import { addProduct, getQuantity } from '../../redux/Reducer'

function SingleProducts() {

   const id=useParams().id
   const [product,setProduct]=useState()
   const [productQuantity,setProductQuantity]=useState(1)
   const [color,setColor]=useState('')
   const [size,setSize]=useState('')
   const [ColorErr,setColorErr]=useState('')
   const [sizeErr,setSizeErr]=useState('')
   const [closeAlert,setCloseAlert]=useState(false)
   const navigate=useNavigate()
   const state=useSelector(state=>state.productState)
   const dispatch=useDispatch()
    
    
  useEffect(()=>{

           const getProduct=async()=>{
                         
                 const result= await publicUrl.put(`/product/findone/${id}`)
                 setProduct(result.data)
                
           }
           
          getProduct() 
  },[id]) 

const handleQuantity=(type)=>{

     if(type === 'dec'){

          productQuantity>1 && setProductQuantity(prev=>prev-1)
     }
     else if(type === 'inc'){
         
          setProductQuantity(prev=>prev+1)
     }
}

const addToCart=()=>{
     
     if (product){
          if(color ===''){
                 
            setColorErr('Please select color')
            setCloseAlert(true)
          }
          else if(size ===''){
               
               setSizeErr('Please select size')
               setCloseAlert(true)
          }
          else{
           dispatch(addProduct({...product,price:product?.price,productQuantity,color,size}))
           navigate('/checkout')
          }
          
     }
    
}

const closeModel=()=>{
     
      setCloseAlert(false)
      setColorErr('')
      setSizeErr('')
}
   
  return (
    <Box className='sigleProducts'>
        <Navbar/>
        {closeAlert && <Alert sx={{top:'30%',right:{sm:'0px',xs:'20%'},position:'absolute',width:'fit-content'}}
         severity='error' onClose={closeModel}>{ColorErr}{sizeErr}</Alert>}
        <Box className='signleProducts__wrapper'>
            <Box className='wrapper__image'>
                <img src={product?.photo}/>
            </Box>
            <Box className='wrapper__info'>
                <h2  >{product?.title}</h2>
                <p> 
                 {product?.desc}
                 </p>
                 <p style={{fontSize:'35px'}}> $ {product?.price}</p>
                 <Box className='wrapper__info--info'>
                    <Box className='info__color'>
                      <h3>Color</h3>
                      <Box className='info__color--color'>
                      {product?.color.map((v,i)=>{
                        return(
                          
                          <div style={{backgroundColor:`${v}`}} key={i}
                          onClick={()=>setColor(v)}
                          ></div>
                          
                        )
                      })}
                     </Box>
                    </Box>
                    <Box className='info__size'>
                      <h3>Size</h3>
                      <select  onChange={e=>setSize(e.target.value)}>
                        { product?.size.map((v,i)=>{
                           return(<option  key={i} >{v}</option>)
                        }) }
                        
                      </select>
                    </Box>
                 </Box>

                 <Box className='wrapper__quantity'>
                        <Box className='quantity'>
                            <div className='sign' onClick={()=>handleQuantity('dec')} >-</div>
                            <div className='num'>{productQuantity}</div>
                            <div className='sign' onClick={()=>handleQuantity('inc')}>+</div>
                        </Box>
                        <button className='cart__button' onClick={addToCart}>
                          
                          Add to cart</button>
                 </Box>
            </Box>
        </Box>
        <NewLetter/>
        <Footer/>
    </Box>
  )
}

export default SingleProducts