import React from 'react';

function Card(prop) {
    
  return (
      <div className='Card'>
          <h3>{prop.title}</h3>
          <p>{prop.content}</p>
      </div>
  );
}


export default Card;