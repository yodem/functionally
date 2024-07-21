import React from 'react';
import Link from 'next/link';
import { fetchGames } from '@/lib/games/fetchGames';

const AllGames: React.FC = async () => {
  const games = await fetchGames();
  return (
    <>
      <h1>All Games</h1>

      <ul>
        {games.map((game) => (
          <li className="w-fit" key={game.id}>
            <Link href={`/games/${game.id}`}>
              <div>{game.id}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllGames;
