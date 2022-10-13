import React, { useState } from "react";

import ImageGrid from "../components/ImageGrid";
import { Navbar } from "../components/Navbar";
import TypeAnimation from "react-type-animation";
import BioSection from "../components/BioSection";
import { send } from "emailjs-com";

const Bio = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendWhatsapp = async() => {
  
    console.log("save message whatsapp");

    const { error: messageDbSaveError, messageDbSaveResult } = await fetch(
      `${process.env.REACT_APP_Payment_Server_Url}/messages/create`,
      {
        method: "POST",
       
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          messageBody: message,
          target: "Whatsapp",
        }),
      }
    ).then((res) =>
      res
        .json()
        .catch((error) => console.log(error))
    ).catch(error=> console.log(error));

    if(messageDbSaveError){
      console.log("whatsapp message error")
      console.log(messageDbSaveError.message)
    }
    
    if(messageDbSaveResult){
      console.log("whatsapp message save")
      console.log(messageDbSaveResult.message)
    }
    console.log("Call whatsapp")

    const messageUriEncoded = encodeURIComponent(message);
    const number = 265996282948;

    window.open(`https://wa.me/${number}?text=${messageUriEncoded}`);
    setName("");
    setEmail("");
    setMessage("");
    setShowSuccess(true);
    setInterval(() => {
      setShowSuccess(false);
    }, 3000);
    console.log("Whatsapp function");
  
  };

  const sendEmail = async() => {
  
    console.log("save message email");

    const { error: messageDbSaveError, messageDbSaveResult } = await fetch(
      `${process.env.REACT_APP_Payment_Server_Url}/messages/create`,
      {
        method: "POST",
     
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          messageBody: message,
          target: "Email",
        }),
      }
    ).then((res) =>
      res
        .json()
        .catch((error) => console.log(error))
    );

    if(messageDbSaveError){
      console.log("email message error")
      console.log(messageDbSaveError.message)
    }
    
    if(messageDbSaveResult){
      console.log("email message save")
      console.log(messageDbSaveResult.message)
    }

    let toSend = {
      from_name: name,
      to_name: "man maru",
      message: message,
      reply_to: email,
    };

    send("service_pucvjni", "template_dfo6g8g", toSend, "3qxjmZMptRx7UTmWU")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
        setShowSuccess(true);
        setInterval(() => {
          setShowSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setName("");
        setEmail("");
        setMessage("");
        setShowError(true);
        setInterval(() => {
          setShowError(false);
        }, 3000);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex-col items-center">
      

        <div className="flex text-center items-center justify-around mx-auto px-8 mb-8">
          <TypeAnimation
            cursor={true}
            sequence={["Welcome to my bio!", 6000, "But first pictures!", 6000]}
            className="text-4xl bold md:text-6xl"
            repeat={2}
          />
        </div>
        <div className="flex text-center items-center justify-around lg:justify-center lg:justify-items-center lg:px-6 lg:mx-auto">
          <ImageGrid />
        </div>

        <BioSection />

        <div className="container flex text-center mx-auto flex-col text-black p-4 space-y-4 mb-16">
        <div
          className={` ${
            showSuccess ? "" : "hidden"
          } alert alert-success shadow-lg`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Message sent!</span>
          </div>
        </div>

        <div
          className={`${showError ? "" : "hidden"} alert alert-error shadow-lg`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Unable to send message try again later.</span>
          </div>
        </div>
          <h1 className="text-center text-2xl ">
            {" "}
            If you have gotten this far then maybe you want to be my friend!
          </h1>
          <p className="text-center text-xl">
            Fill the form below and I will get back to you as quickly as I can!
          </p>

          <div className="container flex flex-col pt-8 mx-auto space-y-4 text-center justify-center items-center">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
                console.log(e.target.value);
              }}
              placeholder="Please enter your name!"
              className="text-2xl input input-bordered input-accent input-lg md:w-96"
            />

            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
                console.log(e.target.value);
              }}
              placeholder="youremail@mail.com"
              className=" text-2xl input input-bordered input-accent input-lg md:w-96"
            />

            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                e.preventDefault();
                setMessage(e.target.value);
                console.log(e.target.value);
              }}
              className="text-2xl textarea textarea-accent textarea-bordered  md:h-48 md:w-96 "
              placeholder="Message"
            ></textarea>

            <div className="flex mx-auto justify-around space-x-4">
              <button className="btn btn-accent" onClick={() => sendEmail()}>
                {" "}
                Email me!
              </button>

              <button className="btn btn-accent" onClick={() => sendWhatsapp()}>
                WhatsApp me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
