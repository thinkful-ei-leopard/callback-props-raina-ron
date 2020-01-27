import React from 'react';
import List from './List';
import Card from './Card';
import STORE from './store';


function App(STORE) {
  const cards = [];
  
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      STORE.lists.forEach(list => 
      <List header={list.header}
      card={list.cardIds.find(cardId => 
        cardId ===
        // LEFT OFF HERE
        )}
      />)
    </div>
    </main>
  );
}

export default App;
