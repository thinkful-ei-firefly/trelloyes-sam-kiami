import React from 'react';
import Card from './Card';

function List(props) {
  const cardList = props.cards;
  const cardHTML = cardList.map(function(card) {
    return (
      <Card key={card.key} title={card.title} content={card.content} />
    );
  })

  return (
    <section class="List">
        <header class="List-header">
          <h2>{props.header}</h2>
        </header>
        <div class="List-cards">
          {cardHTML}
        </div>
    </section>
  );
}

export default List