import React from 'react';
import { fetchGameById } from '@/lib/games/fetchGame';

type PageProps = {
  params: {
    gameId: string;
  };
};

const Page: React.FC<PageProps> = async ({ params: { gameId } }) => {
  const gameState = await fetchGameById(gameId);

  return (
    <div>
      {/* Render the game state */}
      <h1>Current Player: {gameState.currentPlayer}</h1>
      <h2>Players:</h2>
      <ul>
        {gameState.players.map((player) => (
          <li key={player.id}>{player.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
