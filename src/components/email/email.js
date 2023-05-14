import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Email() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_llx5gwa', 'template_5umhs7i', form.current, 'MNCg1zRPvQA9eLu1_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
        <h4 className="name" style={{  fontFamily: 'Bebas Neue', textAlign: 'left', fontSize: '40px' }}><span id="we">C</span>ontact <span id="we">F</span>orm</h4>
    <form ref={form} onSubmit={sendEmail}>
      <label style={{  fontFamily: 'Bebas Neue' }}>Name </label>
      <input type="text" name="user_name" />
      <label style={{  fontFamily: 'Bebas Neue'}}>Email </label>
      <input type="email" name="user_email" />
      <label style={{  fontFamily: 'Bebas Neue' }}>Message </label>
      <textarea name="message" placeholder='Hi...' style={{width: '93%', height: '100px'}}/>
      <input type="submit" value="Send" />
    </form>
    </>
  );
};



export default Email;