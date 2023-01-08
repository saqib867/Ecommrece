import React, { useState } from 'react'
import {privateUrl} from '../axios'

function CreateProduct() {

      const [title,setTitle]=useState('')
      const [desc,setDesc]=useState('')
      const [photo,setPhoto]=useState('')
      const [categories,setCategories]=useState('')
      const [color,setColor]=useState([])
      const [size,setSize]=useState([])
      const [price,setPrice]=useState(0)
// e.target.checked?setCategories(pre=>[...pre,'women']):setCategories(pre=>pre.filter(item=>item !=='women'
 const submit=()=>{

     privateUrl.post('/product/',{title,desc,categories,size,color,price,photo})
     .then(res=>{
        
          console.log('res=> ',res.data)
     })
     .catch(err=>console.log(err))
 }     

  return (
    <div style={{backgroundColor:'#cccc00'}} >
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <label>image</label>
             <input style={{margin:'10px'}} onChange={e=>setPhoto(e.target.value)} />   
            <label>Title</label>
             <input style={{margin:'10px'}} onChange={e=>setTitle(e.target.value)} />
             <label>Description</label>
             <input style={{margin:'10px'}} onChange={e=>setDesc(e.target.value)} />
             <label>Categories</label>
             <div style={{display:'flex',alignItems:'center'}}>
                <label style={{fontSize:'12px'}}>
                    Men
                   <input type={'checkbox'} onChange={e=>e.target.checked && setCategories('men')} />
                </label>
                <label style={{fontSize:'12px'}}>
                    Women
                   <input type={'checkbox'} onChange={e=>e.target.checked && setCategories('women')} />
                </label>
                <label style={{fontSize:'12px'}}>
                    baby
                   <input type={'checkbox'} onChange={e=>e.target.checked && setCategories('baby')} />
                </label>
             </div>
             <label>Color</label>
             <div style={{display:'flex',alignItems:'center'}}>
                
                <span style={{backgroundColor:'rgb(245,245,240)',margin:'10px'}}>
                    <input type={'checkbox'}  onChange={e=> e.target.checked?setColor(pre=>[...pre,'white']):setColor(pre=>pre.filter(item=>item !=='white'))} />
                </span>
                <span style={{backgroundColor:'black',margin:'10px'}}>
                    <input  type={'checkbox'}  onChange={e=> e.target.checked?setColor(pre=>[...pre,'black']):setColor(pre=>pre.filter(item=>item !=='black'))} />
                </span>
                <span style={{backgroundColor:'gray',margin:'10px'}}>
                    <input type={'checkbox'} onChange={e=> e.target.checked?setColor(pre=>[...pre,'gray']):setColor(pre=>pre.filter(item=>item !=='gray'))} />
                </span>
                <span style={{backgroundColor:'yellow',margin:'10px'}}>
                    <input type={'checkbox'}  onChange={e=> e.target.checked?setColor(pre=>[...pre,'yellow']):setColor(pre=>pre.filter(item=>item !=='yellow'))}/>
                </span> 
                <span style={{backgroundColor:'blue',margin:'10px'}}>
                    <input type={'checkbox'}  onChange={e=> e.target.checked?setColor(pre=>[...pre,'blue']):setColor(pre=>pre.filter(item=>item !=='blue'))} />
                </span>
                <span style={{backgroundColor:'red',margin:'10px'}}>
                    <input type={'checkbox'}   onChange={e=> e.target.checked?setColor(pre=>[...pre,'red']):setColor(pre=>pre.filter(item=>item !=='red'))}/>
                </span>
             </div>
             <label>size</label>
             
             <div style={{display:'flex',alignItems:'center'}}>
                
                <label style={{fontSize:'12px',margin:'10px'}}>
                    XL
                    <input type={'checkbox'}  onChange={e=> e.target.checked?setSize(pre=>[...pre,'XL']):setSize(pre=>pre.filter(item=>item !=='XL'))} />
                </label>
                <label style={{fontSize:'12px',margin:'10px'}}>
                    L
                    <input  type={'checkbox'}  onChange={e=> e.target.checked?setSize(pre=>[...pre,'L']):setSize(pre=>pre.filter(item=>item !=='L'))} />
                </label>
                <label style={{fontSize:'12px',margin:'10px'}}>
                    M
                    <input type={'checkbox'} onChange={e=> e.target.checked?setSize(pre=>[...pre,'M']):setSize(pre=>pre.filter(item=>item !=='M'))} />
                </label>
                <label style={{fontSize:'12px',margin:'10px'}}>
                    SM
                    <input type={'checkbox'}  onChange={e=> e.target.checked?setSize(pre=>[...pre,'SM']):setSize(pre=>pre.filter(item=>item !=='SM'))}/>
                </label> 
                <label style={{fontSize:'12px',margin:'10px'}}>
                    XS
                    <input type={'checkbox'}  onChange={e=> e.target.checked?setSize(pre=>[...pre,'XS']):setSize(pre=>pre.filter(item=>item !=='XS'))} />
                </label>
              
             </div>
             <label>price</label>

             <input type={'number'} style={{margin:'10px'}} onChange={e=>setPrice(e.target.value)} />

             <button onClick={submit} >submit</button>
            
        </div>
    </div>
  )
}

export default CreateProduct