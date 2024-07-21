import React from 'react';
import { fetchGameById } from '@/lib/games/fetchGame';
import Game from '@/components/Game/Game';

type PageProps = {
  params: {
    gameId: string;
  };
};

const Page: React.FC<PageProps> = async ({ params: { gameId } }) => {
  const gameState = await fetchGameById(gameId);

  return <Game game={gameState} />;
};

export default Page;
