import React from 'react'
import { Navbar } from '../components/Navbar'
import backCover from '../images/backCover.jpg'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeCard from '../components/StripeCard';


const stripePromise = loadStripe(process.env.REACT_APP_Public_Key);


const Buy =() => {

   
    
  return (
      <>
    <Navbar />
    <div className="container flex flex-col items-center p-2 mx-auto">

    <div className="container items-center text-center justify-around flex mx-auto pt-2 mb-4">
    
    <h1 className="font-bold text-6xl"> How to Purchase!</h1>

    </div>
    <div className="container justify-around items-center text-center mx-auto pt-2 mb-4">
           <p className="text-xl text-center">
        Thank you for deciding to support my work by purchasing a copy of the project. <br />
        The album can be bought for a minimum of <span className="font-bold">MWK5,000</span>, <span className="font-bold">RWF5,000 </span> or <span className="font-bold">$5.</span>

           </p>

        </div>

    <div className="container flex items-center text-center mx-auto pt-2 mb-4">
           <p className="text-xl text-center items-center  mx-auto">
        Take a screenshot of proof of payment and WhatsApp +265 996 282 948 or email: marumboinfo@gmail.com and we will send you a copy of the project. 
           </p>

        </div>

    <div className="container items-center text-center justify-around sm:flex-col lg:flex-row xl:flex space-y-4 mx-auto space-x-2 p-4 md:space-y-4 ">
    
        <div classname=" flex items-center w-full  md:w-2/3 lg:w-1/2">
            <img src={backCover} 
            height={600}
            width={600}
            alt="Back cover"
            className="rounded dropshadow-xl"
            />
        </div>

        <div className="flex flex-col space-y-4">
        
        <h1 className="font-bold text-center text-2xl"> Payment options for the project!</h1>
        
        <div className="flex  flex-col space-y-1">
            <h1 className="font-bold text-center text-2xl"> Bank:</h1>
            <h1 className="font-bold text-center text-xl"> Bank transfer to National Bank</h1>
            <h1 className="font-bold text-center text-xl"> Bank account name: Marumbo Sichinga</h1>
            <h1 className="font-bold text-center text-xl"> Bank account number: 1000202947</h1>
            <h1 className="font-bold text-center text-xl"> Bank branch: Henderson Street</h1>
        </div>
        
        <div className="flex  flex-col space-y-1">
            <h1 className="font-bold text-center text-xl"> Airtel Money:</h1>
            <h1 className="font-bold text-center text-xl"> Airtel Money number: 0996282984</h1>

        </div>
        <div className="flex  flex-col space-y-1">
            <h1 className="font-bold text-center text-xl"> Mtn Mobile Money(Rwanda):</h1>
            <h1 className="font-bold text-center text-xl"> Momo: 0787398716</h1>

        </div>
       

        </div>

    </div>
      
    <div className="container items-center text-center justify-around flex mx-auto pt-2 mb-4">
    
    <h1 className="font-bold text-4xl"> Direct download!</h1>

    </div>
    <div className="container items-center justify-around text-center mx-auto pt-2 mb-4">
           <p className="text-xl">
        You can purchase the album through a direct download by debit/credit card payment, powered by Stripe!
           </p>

        </div>

        <div>
        <Elements stripe={stripePromise} >
      <StripeCard/>
    </Elements>
        </div>

    </div>
        
      </>

  )
}

export default Buy