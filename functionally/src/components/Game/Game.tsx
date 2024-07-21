import { GameState } from '@/lib/types';
import React from 'react';
import CardDetails from '@/app/cards/[type]/[id]/page';

type GameProps = {
  game: GameState;
};

const Game: React.FC<GameProps> = ({ game }) => {
  return (
    <div>
      <h1>Game ID: {game.id}</h1>
      <h2>Current Player: {game.currentPlayer}</h2>
      <h3>Players:</h3>
      <ul>
        {game.players.map((player) => (
          <li key={player.id}>{player.id}</li>
        ))}
      </ul>
      <h3>Number Deck:</h3>
      <ul>
        {game.deckStates.numberDeck.map((card) => (
          <li key={card.id}>
            <CardDetails params={{ id: card.id }} />
          </li>
        ))}
      </ul>
      <h3>Function Deck:</h3>
      <ul>
        {game.deckStates.functionDeck.map((card) => (
          <li key={card.id}>
            <CardDetails params={{ id: card.id }} />
          </li>
        ))}
      </ul>
      <h3>Played Cards:</h3>
      <ul>
        {game.playedCards.map((card) => (
          <li key={card.id}>
            <CardDetails params={{ id: card.id }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
