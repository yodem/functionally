import { db } from '@/app/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Card } from '../types';
import { log } from 'console';

export async function fetchCardById(cardId: string): Promise<Card> {
  try {
    const cardDocRef = doc(db, 'Cards', cardId);
    const cardDocSnapshot = await getDoc(cardDocRef);

    if (cardDocSnapshot.exists()) {
      const cardData = cardDocSnapshot.data();
      const card = { ...cardData, id: cardId } as Card;

      return card;
    } else {
      throw new Error(`Card with ID ${cardId} does not exist`);
    }
  } catch (error) {
    console.error(`Error fetching card with ID ${cardId}:`, error);
    throw error;
  }
}
