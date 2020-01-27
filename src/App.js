import React from 'react';
import List from './List';
import Card from './Card';



function App(props) {
  const cards = [];
  const cardIds = props.storeData.lists.map(list => {
    return list.cardIds;
  });
  // console.log(cardIds);

  for (let i = 0; i < cardIds.length; i++) {
    for (let j = 0; j < cardIds[i].length; j++) {
      
    }
  }

  //  const cardArray = cardIds.find(element => {
  //   return element === props.storeData.allCards[element];
  // })

  // console.log(cardArray);


  
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">

      
    {props.storeData.lists.map(list => {

      return <List key={list.id} header={list.header} c></List>;
    })}
      {/* STORE.lists.forEach(list => {
        <List header={list.header}
      card={list.cardIds.find(cardId => cardId === STORE.allCards[cardId])}
      /> */}
    </div>
    </main>
  );
}


export default App;
