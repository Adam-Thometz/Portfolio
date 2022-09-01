import React from 'react';

import './Input.css'

const Input = ({ label, name, id, type = 'text', value, onChange }) => {
  return (
    <fieldset className='Input'>
      <label htmlFor={name}>{label}</label>
      {type === 'textarea' ? 
      <textarea 
        name={name}
        id={id}
        onChange={onChange}
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
    </fieldset>
  );
};

export default Input;