import { ArrowBack, ArrowLeft, ArrowLeftOutlined, ArrowRightAltOutlined, ArrowRightOutlined} from '@mui/icons-material'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import { slideDate } from '../../slidesData'
import './slider.css'

 

function Slider() {

    const [count,setCount]=useState(0)
    

const sliderClick=(btn)=>{
      
      if(btn==='right'){
        count>=slideDate.length-1 ? setCount(pre=>pre-1) :setCount(pre=>pre+1)
      }
       else{

          count<=0 ? setCount(pre=>pre+1) : setCount(pre=>pre-1)
      }
 }     
 
 
  return (
    <Box className='slider'>
        <div className='slider__container'>
        
          <div className='slider__all'>
        { slideDate.map((v,i)=>{
            return(
         
                  <div className='slider__info'  key={i}
                   style={{backgroundColor: v?.bg,transform:`translateX(${count*(-100)}vw)`}}  >
                  <img src={v.im}/>
                  <div className='info__container'>
                      <div>{v.sale}</div>
                      <p>{v.desc}</p>
                      <button>{v.btn}</button>
                  </div>
                </div>
                
            )
        })
         
        }  
          </div>
          <div onClick={()=>sliderClick('left')} >
          <ArrowLeftOutlined className='slider__button--left' />
        </div>
           <div onClick={()=>sliderClick('right')}>
            <ArrowRightOutlined className='slider__button--right' />
            </div>
        </div>
    </Box>
  )
}

export default Slider