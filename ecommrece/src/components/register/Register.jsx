import { Visibility } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { publicUrl } from '../../axios'
import UseAxios from '../../utils/useAxios'
import './register.css'

function RegisterComp() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [repeatPassword,setRepeatPassword]=useState('')
  const [userName,setUserName]=useState('')
  const [showPassword,setShowPassword]=useState(false)
  const [nameErr,setNameErr]=useState('')
  const [usernameErr,setusernameErr]=useState('')
  const [emailErr,setEmailErr]=useState('')
  const [passwordMatchErr,setPasswordMatchErr]=useState('')
  const [responseErr,setResponseErr]=useState('')
  const [okResponse,setOkresponse]=useState('')
  const [isRegister,setIsRegister]=useState(false)
  const {fetchData}=UseAxios()
  const passwordRegex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

const register= async(e)=>{

    e.preventDefault()
      setIsRegister(true)
      if(!name){
        setNameErr('name is required')
        setIsRegister(false)
      }
      if(!userName){
         setusernameErr('username is required')
         setIsRegister(false)
      }
      if(!email){
        setEmailErr('Email is required')
        setIsRegister(false)
      }
      if(password !== repeatPassword){
          setPasswordMatchErr('Password did not matched')
          setIsRegister(false)
      }
     if(name && userName && email && password.match(passwordRegex)){

    

        const registerRespose = await fetchData('register',{name,userName,email,password })
        if(registerRespose.data){
         if(registerRespose.data==='0'){
              setResponseErr('Some thing went wrong')
              setIsRegister(false)
         }
         else if(registerRespose.data==='1'){
               
               setResponseErr('User is already rigestered')
               setIsRegister(false)
         }
         else{
                setOkresponse('Account has been created.Login to your account')
                setIsRegister(false)
         } 
        }
        else{
          console.log("error",registerRespose.e.code)
        }
    
     } 
     else{
         
         setIsRegister(false)
     }
   
     
}

  return (
    <Box className='registerComp'>
      <img src='https://www.pngmart.com/files/11/Plain-Shopping-Bag-PNG-Transparent-Image.png' 
        className='register__img'/>
        <Box className='registerComp__wrapper' sx={{width:{xs:'100%',sm:'38%'},right:{xs:'0px',sm:'20%'},top:{xs:'0px',sm:'10px'}}}>
          <h1 className='heading__deals'>DEALS</h1>
            <Box className='wrapper__register'>
                <h2 style={{padding:'-5px'}}>Creact Account</h2>
                <Box className='register__inputs'>
                    <div style={{color:'red',fontSize:'16px'}}>{responseErr}</div>
                    <div style={{color:'green',fontSize:'15px'}}>{okResponse}</div>
                   <Box className='register__inputs--input'>
                    <label>Your Name</label>
                    <input onChange={(e)=>(setName(e.target.value),setResponseErr(''))}/>
                    <small style={{color:'red'}}>{nameErr}</small>
                   </Box>
                   <Box className='register__inputs--input'>
                    <label>Email</label>
                    <input type={'email'} onChange={(e)=>setEmail(e.target.value)} />
                    <small style={{color:'red'}}>{emailErr}</small>
                   </Box>
                   <Box className='register__inputs--input'>
                    <label>User Name</label>
                    <input type={'text'} onChange={(e)=>setUserName(e.target.value)} />
                    <small style={{color:'red'}}>{usernameErr}</small>
                   </Box>
                   <Box className='register__inputs--input'>
                    <label>Password</label>
                     <div >
                      <input type={'password'} onChange={(e)=>setPassword(e.target.value)} />
                      </div>
                      <small style={{color:!password ?'black' : (password.length<6 ?'red':'green')}}>
                        Password must be 6-20 charector in length.</small>
                      <small  style={{color:!password ?'black' : ((password.match(passwordRegex))?'green':'red')}}>
                         Atleast one digit, one uppercase and one lowercase letter</small>
                   </Box>
                   <Box className='register__inputs--input'>
                    <label>Re-enter Password</label>
                    <div >
                      <input type={'password'} onChange={(e)=>setRepeatPassword(e.target.value)} />
                      </div>
                      <small style={{color:'red'}}>{passwordMatchErr}</small>
                   </Box>
                   <Box className='register__btn'>
                      <button onClick={register}>{ isRegister? 'Registering...':'Create an Account'}</button>
                   </Box>
                   <p style={{width:'95%',fontSize:'15px'}}>By creating an account, you agree with out term and conditon and privacy policy</p>
                       <div className='hr__line'></div>
                   <p>Already have an account? <Link to='/login'>Login instead</Link></p>
                </Box>
            </Box>
        </Box>
       
    </Box>
  )
}

export default RegisterComp