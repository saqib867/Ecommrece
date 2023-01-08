import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Box} from '@mui/material'
import Slider from '../components/Slider/Slider'
import Categories from '../components/categories/Categories'
import Products from '../components/product/Products'
import NewLetter from '../components/newsLetter/NewLetter'
import Footer from '../components/footer/Footer'

function Home() {

 

  return (
    <Box sx={{overflowX:'hidden',width:'100%'}} >
     
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewLetter/>
        <Footer/>
    </Box>
  )
}

export default Home