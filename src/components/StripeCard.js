import React, {useState } from 'react'
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import sideBfiles from "../epFile/sideBfiles.zip"

import ClipLoader from "react-spinners/ClipLoader";

const StripeCard = () => {

  const stripe = useStripe();
  const elements = useElements();

 
  //const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [downloadPressed,setDownloadPressed] = useState(false)

  const [paymentDone, setPaymentDone] =useState(false)

  //console.log(clientSecret)

  
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };



const closeModel = ()=>{

  if(downloadPressed){

    console.log("close success model");
    setPaymentDone(false)
    const card = elements.getElement(CardElement)
    card.clear()
    
    setIsLoading(false);
  }
    
}

  const handleSubmit= async (e)=>
  {


    e.preventDefault();

    console.log("Handle submit")

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      setMessage('Stripe.js has not yet loaded.');
      console.log("Stripe not set")
     // return;
    }

    const {error: backendError, clientSecret} = 
    await fetch(`${process.env.REACT_APP_Payment_Server_Url}/create-payment-intent-poetry`, {
             method:"POST"
         })
         .then((res)=>res.json()
         
      .catch((error)=>
      console.log(error))
      
      
      )

      if(backendError)
     {
       console.log(backendError.message)
     }

    //  const clientSecret = clientSecretFetch

      console.log(clientSecret)

     setIsLoading(true);

      console.log("confirm payment")

      const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)
          },
        }
      );
        
      //if error alert message and clear form 
      if (stripeError) {
        // Show error to your customer (e.g., insufficient funds)
        setMessage(stripeError.message);
        console.log("Stripe error message:")
        console.log(stripeError.message)
        setIsLoading(false);
        return;
      }

    // if no error and intent status succed then route to download page with thank you and auto save, 
      //if not  clear form and ask for new card
      console.log("payment intent status:")
      console.log(paymentIntent.status);

      if(paymentIntent.status ==="succeeded"){
        console.log("save file and open model")

        setPaymentDone(true);
      console.log("static file download")       
      }
      
      if(downloadPressed){

        const card = elements.getElement(CardElement)
        card.clear()
        
        setIsLoading(false);
      }
  }
 
  return (
  <>

<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" className={`modal ${paymentDone?"modal-open" : "modal-close"} cursor-pointer`}>
  <label class="modal-box relative" for="">
    <h3 class="text-lg font-bold">Thank you for your purchase!</h3>
    <p class="py-4">Please click download to start your download!!</p>
    <p class="py-4">If you run into any problems please email us @: marumboinfo@gmail.com</p>
  <div class="modal-action">
      <label for="my-modal" class="btn" onClick={()=>closeModel()}>Close!</label>
  

      <a  className= {`${downloadPressed ? "btn btn-disabled":  "btn"}`}
        href= {` ${downloadPressed ? sideBfiles : ""}`}
        download="Playing_it_safe.zip"
        onClick={()=>setDownloadPressed(true)}
        >
        Download! </a>
    </div>
  </label>
</label>

    <div className="container flex text-center mx-auto flex-col text-black p-4 space-y-4 mb-16">

  
    <div className="container flex flex-col text-center space-y-4">

    <input type="text" 
        name="email"
        value={email}
        onChange={(e)=>{
          e.preventDefault();
          setEmail(e.target.value);
          console.log(e.target.value);
        }}
        placeholder="youremail@mail.com" 
        className=" text-md input input-bordered input-accent input-md" />

<form id="payment-form" onSubmit={handleSubmit}>
<CardElement id="card-element" options={{cardStyle,hidePostalCode: true }} />

<button disabled={isLoading || !stripe || !elements} id="submit" className="btn btn-accent mx-auto mt-2">
        <span id="button-text" >
          {isLoading ? <ClipLoader loading={isLoading}  /> : 
          
          "Purchase!"
          }
        </span>
      </button>

</form>
  

 {message && <div id="payment-message">{message}</div>}


{

      }

    </div>
    </div>
  </>
  )
}

export default StripeCard