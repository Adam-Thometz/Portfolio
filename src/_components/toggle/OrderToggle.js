import React from 'react';

import './OrderToggle.css';

const OrderToggle = ({ currToggle, handleSort }) => {
  return (
    <div className='OrderToggle'>
      <div className={`OrderToggle-switch ${currToggle ? 'recent' : 'growth'}`} onClick={handleSort}>
        <div className='OrderToggle-button'></div>
        <span>Most Recent</span>
        <span>Growth View</span>
      </div>
      <span>Toggle to see {currToggle ? 'Growth View' : 'Most Recent'}</span>
    </div>
  );
};

export default OrderToggle;