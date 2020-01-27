import React from 'react';
import Card from './Card';

function List(prop) {
  return (
      <section className='List'>
          <header>
              {prop.header}
          </header>
          <div className='List-cards'>
              {console.log(prop.cards)}
              {prop.cards.map(card => {
                  return <Card key={card.id} title={card.title} content={card.content} />;
              })}
            <Card key={prop.cards.id} title={prop.cards.title} content={prop.cards.content} />
          </div>
      </section>
  );
}


export default List;