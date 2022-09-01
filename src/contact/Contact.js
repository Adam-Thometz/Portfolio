import React from 'react';

import './Contact.css';

import ContactForm from './form/ContactForm';
import Links from './links/Links';
import Navbar from '../_components/navbar/Navbar';

const Contact = () => {
  return (
    <main className='Contact'>
      <Navbar />
      <h1>Contact</h1>
      <ContactForm />
      <Links />
    </main>
  );
};

export default Contact;