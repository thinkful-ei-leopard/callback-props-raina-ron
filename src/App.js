import React from 'react';
import List from './List';
import Card from './Card';
import STORE from './store';


function App(STORE) {
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
    </div>
    </main>
  );
}

export default App;
