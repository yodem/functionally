import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { fetchCards } from '@/lib/cards/fetchCards';
import { CardType } from '@/lib/types';

const AllCards: React.FC<{ cardType?: CardType }> = async ({
  cardType,
}: {
  cardType?: CardType;
}) => {
  const cards = await fetchCards(cardType);
  return (
    <>
      <h1>All Cards</h1>

      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Link href={`/cards/${card.type}/${card.id}`}>
              <b>
                {card.type} - {card.value}
              </b>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllCards;
