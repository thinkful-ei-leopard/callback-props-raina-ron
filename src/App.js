import React from 'react';
import List from './List';
import './App.css';

function App(props) {

  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
    
    {props.storeData.lists.map(list => {
      return <List key={list.id} header={list.header} cards={list.cardIds.map(element => props.storeData.allCards[element])}></List>;
    })}

    </div>
    </main>
  );
}


export default App;
