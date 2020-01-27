import React from 'react';
import List from './List';

function Card(prop) {
    
  return (
      <div className='Card'>
          <h3>{prop.title}</h3>
          <p>{prop.content}</p>
      </div>
  );
}


export default Card;