import { db } from '@/app/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import { GameState } from '../types';

const getRelevantQuery = () => {
  return collection(db, 'games');
};

export async function fetchGames() {
  try {
    const q = getRelevantQuery();
    const querySnapshot = await getDocs(q);
    const games = querySnapshot.docs.map((doc) => {
      const gameData = doc.data();
      const gameId = doc.id;
      return { ...gameData, id: gameId } as GameState;
    });

    return games;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
}
