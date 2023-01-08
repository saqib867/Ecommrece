import { Box } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './CategoriesItems.css'

function CategoriesItem({item}) {


  return (
    <Box className='categoriesItem'>
      <Link to={`/categorylist/${item?.categories}`}>
      <Box className='categoriesItem__wrapper'>
        <img src={item.photo} />
        <div>
          <h1>{item.title}</h1>
          <h2>{item.desc}</h2>
          <button>Shop Now</button>
        </div>
      </Box>
      </Link>
    </Box>
  )
}

export default CategoriesItem