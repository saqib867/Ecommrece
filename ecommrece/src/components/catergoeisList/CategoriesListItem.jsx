import { Box } from '@mui/material'
import React, { useCallback } from 'react'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router'
import CategoriesItem from '../CategoriesItems/CategoriesItem'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewLetter from '../newsLetter/NewLetter'
import Products from '../product/Products'
import './categoriesListItem.css'

function CategoriesListItem({catParam}) {
 
   const [filter,setFilter]=useState('')
   const [sort,setSort]=useState('')



  return (
    <Box className='categoriesListItem'>
        
         <Navbar/>
         <Box className='wrapper'>
         <h1 className='wrapper__title'>Dresses</h1>
            <Box className='wrapper__filter'>
                <Box className='filter__products'>
                    <h3>Filter Products </h3>
                    <Box className='products__list'>
                         <select name='color' onChange={handleFilters}>
                            <option disabled >Color</option>
                            <option>white</option>
                            <option>black</option>
                            <option>blue</option>
                            <option>yellow</option>
                         </select>
                         <select name='size' onChange={handleFilters}>
                            <option disabled >Size</option>
                            <option>XL</option>
                            <option>L</option>
                            <option>M</option>
                            <option>SM</option>
                            <option>XS</option>
                         </select>
                    </Box>
                </Box>
                <Box className='filter__sort'>
                       <h3>Sort Products </h3>
                        <Box className='products__sort'>
                         <select onChange={e=>setSort(e.target.value)}>
                            
                            <option disabled  >Sort</option>
                            <option value={'newest'}>Newest</option>
                            <option value={'asc'}>Price(asc)</option>
                            <option value={'des'}>Price(des)</option>
                         </select>
                         </Box>

                </Box>
            </Box>
         </Box>
         <Products cat={catParam} filters={filter} sort={sort}/>
         <NewLetter/>
         <Footer/>
    </Box>
  )
}

export default CategoriesListItem