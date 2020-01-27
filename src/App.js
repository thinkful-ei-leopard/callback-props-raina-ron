import React from 'react';
import List from './List';
import Card from './Card';



function App(props) {
  const cards = [];
  console.log(props.storeData);
  
  
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">

      <List></List>
    {props.storeData.lists.map(list => {
      return console.log(list.header);
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
