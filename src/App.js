import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  // const cards = [];
  // const cardIds = props.storeData.lists.map(list => {
  //   for (let i = 0; i < props.storeData.lists.length; i++) {
  //     return list.cardIds[i];
  //   }
  //     //return list.cardIds[0];
  //     //return console.log(props.storeData.allCards[arr]);
  //   });
  
  // console.log(`cardIDs: ${cardIds}`);
  // const cardArray = cardIds.map(element => {
  //   return props.storeData.allCards[element];
  // });
  // console.log(cardArray);
  // for (let i = 0; i < cardIds.length; i++) {
  //   for (let j = 0; j < cardIds[i].length; j++) {
  //     console.log(cardIds[i][j]);
  //   }
  // }

  //  const cardArray = cardIds.find(element => {
  //   return element === props.storeData.allCards[element];
  // })

  // console.log(cardArray);

//cards={list.cardIds.map(element => props.storeData.allCards[element]


  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
    
      
    {props.storeData.lists.map(list => {
      // console.log(list.cardIds.map(element => props.storeData.allCards[element]));
      return <List key={list.id} header={list.header} cards={list.cardIds.map(element => props.storeData.allCards[element])}></List>;
    })}

    </div>
    </main>
  );
}


export default App;
