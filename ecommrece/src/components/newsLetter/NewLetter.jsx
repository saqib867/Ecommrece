import { Send } from '@mui/icons-material'
import { Box, Icon } from '@mui/material'
import React from 'react'
import './newsLetter.css'


function NewLetter() {
  return (
    <Box className='newsletter'>
        <Box className='newsletter__container'>
             <h2>News Letter</h2>
             <p>Stay Tuned For Your Favorate product</p>
             <div>
                <input/>
                <Icon className='newsletter__btn'>
                   <Send/>
                </Icon>
             </div>
        </Box>
    </Box>
    
  )
}

export default NewLetter