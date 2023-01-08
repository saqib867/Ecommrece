import { Box } from '@mui/material'
import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { productList } from '../../slidesData'
import ProductsList from '../ProductList/ProductsList'
import './products.css'
import {publicUrl} from '../../axios'


function Products({cat,filters,sort}) {

const [filterProducts,setfilterProducts]=useState([])
const [products,setProducts]=useState([])

useEffect(()=>{
      
  const getProduct=async()=>{
      
    try {
      const result= await publicUrl.get(cat ?`/product/allproducts?qcategory=${cat}`
       :"/product/allproducts")
        setProducts(result.data)
    } catch (error) {
      console.log(error)
    }
      
       
  }
  getProduct()
       
},[cat])

useEffect(()=>{
        
      cat && setfilterProducts(products.filter((item)=>
       Object.entries(filters).every(([key,value])=>
       item[key].includes(value)
       )  
      )
      )
},[cat,filters,products])

// let fil=useMemo(()=>{

//         return filterProducts
// },[filterProducts])

useEffect(()=>{
         
      if(sort === 'newest'){

        setfilterProducts(prev=>[...prev].sort((a,b)=>a.createdAt - b.createdAt))
      } 
      else{
        setfilterProducts(prev=>[...prev].sort((a,b)=>b.price - a.price))
      }  

},[sort])


  return (
    <Box className='products'>
        <Box className='products__container'>
            {cat ?filterProducts.map((item,i)=>{
                return(
                      
                    
                     <ProductsList item={item} key={i}/>
                     
                )
            }):
            products.slice(0,8).map((item,i)=>{
              return(
                    
                   <ProductsList item={item} key={i}/>
                   
              )
          })
            }
            
        </Box>
    </Box>
  )
}

export default Products