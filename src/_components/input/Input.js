import React from 'react';

import './Input.css'

const Input = ({ label, name, id, type = 'text', value, onChange }) => {
  return (
    <fieldset className='Input'>
      {type === 'textarea' ? 
        <textarea 
          name={name}
          id={id}
          onChange={onChange}
          placeholder="Tell me a joke, your favorite hobby, or about your open positions :)"
          required
        >{value}</textarea>
      : <input 
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required
      />}
      <label htmlFor={name}>{label}</label>
    </fieldset>
  );
};

export default Input;