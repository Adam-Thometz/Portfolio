import React, { useState } from 'react';

import './ContactForm.css';

import Input from '../../_components/input/Input';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  return (
    <form className='ContactForm'>
      <h2>Send me a message</h2>
      <section className='ContactForm-user-info'>
        <Input label="Name" name="name" id="name" value={formData.name} onChange={handleChange} />
        <Input label="Email" name="email" id="email" value={formData.email} onChange={handleChange} type='email' />
      </section>
      <Input label="Message" name="message" id="message" value={formData.message} onChange={handleChange} type='textarea' />
      <input className='Input-submit' type='submit' />
    </form>
  );
};

export default ContactForm;