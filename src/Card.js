import React from 'react';
import './Card.css';

function Card(prop) {
    
  return (
      <div className='Card'>
          <h3>{prop.title}</h3>
          <p>{prop.content}</p>
      </div>
  );
}


export default Card;