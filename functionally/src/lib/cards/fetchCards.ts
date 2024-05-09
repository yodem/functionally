import { db } from '@/app/firebaseConfig';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { Card, CardType } from '../types';

const getRelevatQuery = (cardType?: CardType) => {
  if (cardType) {
    return query(collection(db, 'Cards'), where('type', '==', cardType));
  } else {
    return collection(db, 'Cards');
  }
};
export async function fetchCards(cardType?: CardType) {
  try {
    const q = getRelevatQuery(cardType);
    const querySnapshot = await getDocs(q);
    const cards = querySnapshot.docs.map((doc) => {
      const cardData = doc.data();
      const cardId = doc.id;
      return { ...cardData, id: cardId } as Card;
    });

    return cards;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
}
