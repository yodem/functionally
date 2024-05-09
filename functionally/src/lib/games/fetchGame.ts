import { db } from '@/app/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { GameState } from '../types';

export async function fetchGameById(gameId: string): Promise<GameState> {
  try {
    const gameDocRef = doc(db, 'games', gameId);
    const gameDocSnapshot = await getDoc(gameDocRef);

    if (gameDocSnapshot.exists()) {
      const gameData = gameDocSnapshot.data();
      const game = { ...gameData, id: gameId } as GameState;

      return game;
    } else {
      throw new Error(`Game with ID ${gameId} does not exist`);
    }
  } catch (error) {
    console.error(`Error fetching game with ID ${gameId}:`, error);
    throw error;
  }
}
