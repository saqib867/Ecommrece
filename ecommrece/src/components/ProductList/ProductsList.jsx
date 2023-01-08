import { HeartBroken, Search, ShoppingCart } from '@mui/icons-material'
import { Box, Icon } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './productsList.css'
function ProductsList({item}) {
  return (
    <Box className='productList' sx={{padding:'10px'}}>

      <Box className='productList__container' >
         <img src={item.photo} style={{width:'300px',height:'300px',objectFit:'contain'}} />
         <div className='productList__circle'>{item.title}</div>
         <div className='productList__icons'>
            <Icon className='productList__icon'>
              <Link to={`/singleproduct/${item._id}`}> <Search/> </Link>
              </Icon>
            <Icon className='productList__icon'><HeartBroken/></Icon>
            <Icon className='productList__icon'><ShoppingCart/></Icon>
         </div>
      </Box>

    </Box>
  )
}

export default ProductsList