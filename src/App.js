import React from 'react';
import List from './List';
import './App.css';

function App(props) {

  const listList = props.store.lists.map(list => {
    const cards = list.cardIds.map(card => props.store.allCards[card])
    return (
      <List header={list.header} cards={cards} />
    );
  })

  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {listList}
      </div>
    </main>
  );
}

export default App;