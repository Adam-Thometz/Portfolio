import React from 'react';

import './Contact.css';

import ContactForm from './form/ContactForm';
import Links from './links/Links';
import NavContact from '../_components/navbar-contact/NavContact';

const Contact = () => {
  return (
    <main className='Contact'>
      <h1>Contact</h1>
      <ContactForm />
      <Links />
      <NavContact />
    </main>
  );
};

export default Contact;