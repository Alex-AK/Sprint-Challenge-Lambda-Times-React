import React from 'react';
import Card from './Card';

const Cards = props => {
  const printCards = props.cards.map(card => (
    <Card
      key={card.headline}
      headline={card.headline}
      tab={card.tab}
      author={card.author}
      img={card.img}
    />
  ));

  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {printCards}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;
