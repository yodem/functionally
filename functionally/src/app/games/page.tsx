import AllGames from '@/components/Game/AllGames';
import React, { Suspense } from 'react';

const GameList: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllGames />
    </Suspense>
  );
};

export default GameList;
