import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import CategoriesListItem from '../components/catergoeisList/CategoriesListItem'

function CategorieList() {

  const location=useParams()?.category
  
  return (
    
    <Box>
         <CategoriesListItem catParam={location} />
    </Box>
  )
}

export default CategorieList