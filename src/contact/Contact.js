import React, { useState, useRef } from 'react';

import './Contact.css';

import Input from '../_components/input/Input';

import emailjs from '@emailjs/browser';
import { userId, serviceId, templateId } from '../_data/emailInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const form = useRef();
  const submit = useRef();
  
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const sendEmail = e => {
    e.preventDefault();
    submit.current.value = "Sending..."
    emailjs.sendForm(serviceId, templateId, form.current, userId)
    .then(() => {
      alert('Thank you for contacting me! I will get back to you when I can.');
      submit.current.value = "Submit";
    }, () => {
      alert('Something went wrong. Please try again later.');
      submit.current.value = "Submit";
    });
  };

  return (
    <form ref={form} className='Contact' onSubmit={sendEmail}>
      <h2>Send me a message!</h2>
      <p>Tell me anything! A joke, a Switch game I should try, or your open positions :)</p>
      <section className='Contact-user-info'>
        <Input label="Name" name="name" id="name" value={formData.name} onChange={handleChange} />
        <Input label="Email" name="email" id="email" value={formData.email} onChange={handleChange} type='email' />
      </section>
      <Input label="Message" name="message" id="message" value={formData.message} onChange={handleChange} type='textarea' />
      <input ref={submit} className='Contact-submit' type='submit' value='Submit' />
    </form>
  );
};

export default Contact;