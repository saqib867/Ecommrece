import React, { useEffect, useState } from 'react'
import { publicUrl } from '../axios'

const UseAxios =()=> {
    
       const [data,setData]=useState('')
       const [err,setErr]=useState('')
      

           const fetchData=async(route,routeData)=>{
                 console.log("route data ",routeData)
                  try {
                        const res=await publicUrl.post(`/auth/${route}`,routeData)
                        
                        return {data:res.data}
                  } catch (error) {
                        return {e:error}
                  }
                     
                
           }
      

  return {data,err,fetchData}
}

export default UseAxios