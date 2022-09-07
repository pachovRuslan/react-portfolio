import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import './form.css';

function Forms() {
  const form = useRef();
  const SERVICE_ID = "service_a3pjtlk";
  const TEMPLATE_ID = "template_p22zvfc";
  const PUBLIC_KEY = "yINXHbCbyJM7_tD-G";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      })
    });
  e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form" >
          <div className="form_input">
        <input type="text" name="user_name" placeholder="Your Name" />
      </div>
      <div className="form_input">
        <input type="email" name="user_email" placeholder="Your Email"  />
      </div>
      <div className="form_input">
        <input row="10" placeholder="Write Message" name="message"></input>
      </div>
      <button className="submit_btn" type="submit" value="Send">
        submit
      </button>
     
    </form>
  );
  
}

export default Forms;
