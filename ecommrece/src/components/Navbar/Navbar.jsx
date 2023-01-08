import React from 'react'
import {Avatar, Box, IconButton, Input} from '@mui/material'
import {Search, ShoppingBasket} from '@mui/icons-material'
import './navbar.css'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logedIn } from '../../redux/userReducer'
import logo from '../../eimg.PNG'

function Navbar() {

  const quantity=useSelector(state=>state.productState.cartQuantity)
  const [showInput,setShowInput]=useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  
  return (
    <Box className='navbar'>
        <Box className='navbar__wrapper'>
            <div className='navbar__left'>
                <Avatar src={logo} sx={{cursor:'pointer'}} onClick={()=>navigate('/')} />
                <Box className='left__search' sx={{display:{sm:'flex',xs:showInput?'flex':'none'},width:{sm:'55%',xs:showInput && '65vw'}}}>
                    <input/>
                    <IconButton onClick={()=>setShowInput(false)} ><Search/></IconButton>
                </Box> 
                <IconButton sx={{display:{sm:'none',xs:showInput?'none':"block"}}}  onClick={()=>setShowInput(true)} ><Search/></IconButton>
            </div>
            <Box className='navbar__center' sx={{display:{sm:'block',xs:showInput?'none':'block'}}}> 
                 DEALS
            </Box>
            <div className='navbar__right'>

                <div className='right__options'>
                    
                    <Box className='logout' 
                    sx={{display:{sm:'block',xs:showInput?'none':'block'}}}
                    onClick={()=>dispatch(logedIn(''))}>Logout</Box>
                    <div className='right__options--basket'>
                        <Link to={'/checkout'} ><ShoppingBasket/></Link>
                      {quantity>0 && <div className='basket__quantity'>{ quantity}</div>}
                    </div>
                </div>
            </div>
        </Box>
    </Box>
  )
}

export default Navbar