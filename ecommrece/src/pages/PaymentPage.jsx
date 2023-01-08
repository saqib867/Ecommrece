import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux';
import eimg from '../eimg.PNG'
import axios from 'axios'

function PaymentPage() {

  const [stripeToken,setStripeToken]=useState('')
  const total=useSelector(state=>state.productState.total)

  const onToken=(token)=>{

    setStripeToken(token)
  }

useEffect(()=>{
   
      axios.post('http://localhost:5000/api/stripe/payment',{tokenId:stripeToken,amount:2000})
      .then(res=>{

         console.log(res.data)
      })
},[stripeToken])  


  return (
    <div>
     
       <StripeCheckout
       stripeKey='pk_test_51KyeKsLfmQwGfsJ0BpBwz9bklWJuDkGNmVWohozKv52xqi3UKhAu9kPlsphpl4qO4q4Pv00Dk5NDIntgK1VcmUOF00JFrqPio1'
       token={onToken}
       billingAddress
       image={eimg}
       shippingAddress
       description={`Your total is $ ${total}`}
       amount={total}
       panelLabel='pay bill'
       currency='USD'
       name='DEALS'
       >
        <button style={{backgroundColor:'black',color:'white',padding:'10px',fontSize:'25px'}}>PAY NOW</button>
       </StripeCheckout>
      
      
    </div>
  )
}

export default PaymentPage