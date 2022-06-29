import React, {useState } from 'react'
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

const StripeCard = () => {

  const stripe = useStripe();
  const elements = useElements();

 
  //const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);


  //console.log(clientSecret)
 
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
    await fetch("/create-payment-intent-poetry", {
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
  
      if (stripeError) {
        // Show error to your customer (e.g., insufficient funds)
        setMessage(stripeError.message);
        console.log(stripeError.message)
        //return;
      }

      console.log(paymentIntent.status);

      setIsLoading(false);
  }
 
  return (
  <>
  
    <div>Stripe Card</div>


    <form id="payment-form" onSubmit={handleSubmit}>
    <CardElement id="card" options={{ hidePostalCode: true }} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  </>
  )
}

export default StripeCard