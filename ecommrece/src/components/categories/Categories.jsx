import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import CategoriesItem from '../CategoriesItems/CategoriesItem'
import './categories.css'
import {publicUrl} from '../../axios'
import { useMemo } from 'react'


function Categories() {

const [cat,setCat]=useState([])


useEffect(()=>{
 
  publicUrl.get('/product/allproducts')
  .then(res=>{
       
      console.log("res.data ",res)
       setCat(res.data)
  })
  .catch(err=>console.log(err))

},[])  


  return (
    <Box className='categories'>
      <div>
        { cat?.slice(0,3)?.map((item,i)=>{
          return(
            <CategoriesItem item={item} key={i}/>
          )
        })
        
        }
        </div>
    </Box>
  )
}

export default Categories