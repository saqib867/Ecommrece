import React from 'react'
import { Box, Icon } from '@mui/material'
import { Call, Facebook, GitHub, Mail, Phone, Room, WhatsApp } from '@mui/icons-material'
import './footer.css'

function Footer() {
  return (
    
        <Box className='footer'>
            <div className='footer__left'>
                <h2>DEALS</h2>
                <p>Collaboratively administrate empowered markets via plug-and-play networks.
                     Dynamically procrastinate B2C users after installed base benefits.
                     Dramatically visualize customer directed convergence without revolutionary ROI.
                 </p>
                 <div className='footer__left--icons'>
                    <Icon  className='l-icons'><Facebook sx={{color:'blue'}}/></Icon>
                    <Icon className='l-icons'><GitHub/></Icon>
                    <Icon className='l-icons'><WhatsApp sx={{color:'green'}}/></Icon>
                    <Icon className='l-icons'><Call sx={{color:'red'}}/></Icon>
                 </div>
            </div>
            <div className='footer__center'>
                <h3>Useful Links</h3>
               <div>
                <ul>
                    <li>Home</li>
                    <li>Man fashion</li>
                    <li>Accessorieis</li>
                    <li>Order tracking</li>
                    <li>Foot wear</li>
                </ul>
                <ul>
                     <li>Women fashion</li>
                    <li>Bags</li>
                    <li>My Account</li>
                    <li>Terms and Condition</li>
                    <li>Account</li>
                </ul>
              </div>  
            </div>
            <div className='footer__right'>

                <h3>Contact</h3>
                <div>
                    <div>
                    <Room/> <p>I8 Islamabad, Fedral Area.</p>
                    </div>
                    <div>
                    <Phone/> <p>+92 3075957135</p>
                    </div>
                    <div>
                    <Mail/> <p>saqibhussain9910@gmail.com</p>
                    </div>
                </div>
            </div>
        </Box>
  )
}

export default Footer