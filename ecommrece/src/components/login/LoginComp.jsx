import { Avatar, Box } from '@mui/material'
import React, { useRef } from 'react'
import { useState } from 'react'
import './logincomp.css'
import eimg from '../../eimg.PNG'
import { Link } from 'react-router-dom'
import { publicUrl } from '../../axios'
import { useDispatch, useSelector } from 'react-redux'
import { logedIn } from '../../redux/userReducer'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import UseAxios from '../../utils/useAxios'


function LoginComp() {

      const emailRef=useRef('')
      const passwordRef=useRef('')
      const [email,setEmail]=useState('')
      const [password,setPassword]=useState('')
      const [emailErr,setEmailErr]=useState('')
      const [passwordErr,setPasswordErr]=useState('')
      const [responseErr,setResponseErr]=useState('')
      const [isLoggedIn,setIsLoggedIn]=useState(false)
      const {fetchData}=UseAxios()
      const dispatch=useDispatch()
      const user=useSelector(state=>state)
      
 
  const loginUser= async()=>{
        setIsLoggedIn(true)
     if(!email){
       setEmailErr('Email is required')
       setIsLoggedIn(false)
     }
    if(!password){
      setPasswordErr('Password is required')
      setIsLoggedIn(false)
    }
   if(email && password){
    
    
        // setEmail(emailRef.current.value)
        // setPassword(passwordRef.current.value)
      fetchData('login',{email,password}).then(data=>{
        if(data.data){
          if (data.data ==='0'){
           setResponseErr('Password is not correct')
           setIsLoggedIn(false)
          }
          else if(data.data ==='1'){
                   setResponseErr('User is not registered')
                   setIsLoggedIn(false)
          }
          else{
           dispatch(logedIn(data.data))
           setIsLoggedIn(false)
           window.location.reload()
          }
             
         }
         else{
          console.log("error ",data.e.code)
         }

      })
        
    
  }
  }    
  return (
    <Box className='loginComp'>
      <img src='https://www.pngmart.com/files/11/Plain-Shopping-Bag-PNG-Transparent-Image.png' 
        className='login__img'/>
        <Box className='login__wrapper' sx={{width:{xs:'100%',sm:'37%'},right:{xs:'0px',sm:'20%'},top:{xs:'0px',sm:'50px'}}}>
          
          <h1 className='heading__deals'>DEALS</h1>
            <Box className='wrapper__login'>
                
                <h2 style={{padding:'-5px'}}>Log In</h2>
                <div style={{color:'red',marginLeft:'10px',fontSize:'18px'}}>{responseErr}</div>
                <Box className='login__inputs'>
                   <Box className='login__inputs--input'>
                    <label>Email</label>
                    <input type={'email'}  onChange={(e)=>(setEmail(e.target.value),setEmailErr(''),setResponseErr(''))} />
                    <small style={{color:'red'}}>{ emailErr}</small>
                   </Box>
                   <Box className='login__inputs--input'>
                    <label>Password</label>
                    <input type={'password'}  onChange={(e)=>(setPassword(e.target.value),setPasswordErr(''))} />
                    <small style={{color:'red'}}>{passwordErr}</small>
                   </Box>
                  
                   <Box className='login__btn'>
                      <button onClick={loginUser}>{isLoggedIn?'Loging in ...': 'Log-In'}</button>
                   </Box>
                   <p style={{width:'95%',fontSize:'15px'}}>By creating an account, you agree with out term and conditon and privacy policy</p>
                       <div className='hr__line'></div>
                   <p>Don't have an account?
                     <Link style={{textDecoration:'none'}} to={'/register'}>
                       Create an account
                     </Link>
                    </p>
                </Box>
            </Box>
        </Box>
       
    </Box>
  )
}

export default LoginComp