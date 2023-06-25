import React from 'react';
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from 'react';
import emailjs from "@emailjs/browser";



const Contact = () => {
  const formRef = useRef();
  const handleSubmit =(e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_puy9ngn",
        "template_nwmk8ya",
        formRef.current,
        "mvdk-1S32S2UqOl46"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt=" " className="c-icon" />
              +12 3456 7890
            </div>
            <div className="c-info-item">
              <img src={Email} alt=" " className="c-icon" />
              info@miheejeong.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt=" " className="c-icon" />1 Sunshine Street,
              Sunshine Bay, Auckland, New Zealand.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always freelancing if the
            right project comes along.
          </p>
          <form ref={formRef} onSubmit ={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  id="" cols="30" rows="5" placeholder= "message" name = "message" ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact