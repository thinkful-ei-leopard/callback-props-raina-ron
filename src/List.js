import React from 'react';

function List(prop) {
  return (
      <section className='List'>
          <header>
              {prop.header}
          </header>
          <div className='List-cards'>
            
          </div>
      </section>
  );
}


export default List;