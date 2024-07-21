import React from 'react';
import Link from 'next/link';
import { fetchCards } from '@/lib/cards/fetchCards';
import { CardType } from '@/lib/types';
import { CardByType } from './Card';

const AllCards: React.FC<{ cardType?: CardType }> = async ({
  cardType,
}: {
  cardType?: CardType;
}) => {
  const cards = await fetchCards(cardType);
  return (
    <>
      <h1>All Cards</h1>

      <ul className="flex flex-wrap">
        {cards.map((card) => (
          <li className="w-fit" key={card.id}>
            <Link href={`/cards/${card.type}/${card.id}`}>
              <CardByType card={card} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllCards;
