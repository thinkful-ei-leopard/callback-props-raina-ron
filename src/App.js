import React, { Component } from 'react';
import List from './List';
import './App.css';
import STORE from './store';

// Create 2 buttons: delete and "add random card"
// WHEN "delete" card is CLICKED on any Card (ie card C)
//    remove ALL references to that card from state (ie remove all cards C)
// WHEN "add random" card is CLICKED
// generate a random card, add it to the state and appropriate list

// Refactor App component to use STATE instead of PROPS <========= DONE IN APP.JS



const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}
 // not sure if React.Component is different from Component
class App extends React.Component {
  state = {
    store: STORE
  };

  handleDeletedCard = () => {
    
  };

  handleAddRandomCard = (itemId) => {
    // generate a random card, add it to the state and appropriate list
    
    const newCard = newRandomCard();
    const newList = this.state.store.lists.map(list => {
      // match the itemId to the list id
      // generate a new list and add the new random card to it
      if(itemId === list.id) {
        return {
          ...list,
          cardIds: [
            ...list.cardIds, newCard.id
          ] 
        } 
      }
      return list;
      // return an array which should look just like List
    });

    this.setState({
      store: {
        lists: newList,
        allCards: {
          ...this.state.store.allCards, 
          [newCard.id]: newCard
        }
        //      need ALL the cards in that list currently, then add newCard to it
      }
    }) 
  };
  
  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              addRandomCard={this.handleAddRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
