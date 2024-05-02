'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import { db } from '../firebaseConfig';

type Card = {
  id: string;
  type: string;
  value: string | number;
};
export default function Page() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const cardsRef = collection(db, 'Cards');
      const querySnapshot = await getDocs(cardsRef);
      const cardsData: Card[] = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        } as Card;
      });
      setCards(cardsData);
    };

    fetchCards();
  }, []);

  return (
    <div>
      <h1>All Cards</h1>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Link href={`/cards/${card.id}`}>
              <b>
                {card.type} - {card.value}
              </b>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
