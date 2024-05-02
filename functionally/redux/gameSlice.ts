import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState, CardType, Player } from '../lib/types';

const initialState: GameState = {
  currentPlayer: '', // Set an initial player ID
  deckStates: {
    functionDeck: [],
    numberDeck: [],
    specialActionDeck: [],
  },
  playedCards: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame: (state, action: PayloadAction<GameState>) => {
      // Consider a safe merge here instead of full replacement if you want to preserve
      // parts of the existing state that might have changed.
      state = action.payload;
    },
    drawCards: (
      state,
      action: PayloadAction<{
        player: Player;
        deck: CardType;
        numCards: number;
        updatedGameState: GameState;
      }>,
    ) => {
      // Assuming updatedGameState has cards with playerId set - Immer helps with updates
      state.deckStates = action.payload.updatedGameState.deckStates;
      state.playedCards = action.payload.updatedGameState.playedCards;
      // Potentially update player.hand within updatedGameState before the action
    },
    // ... Add more reducers
  },
});

export const { initializeGame, drawCards } = gameSlice.actions;
export default gameSlice.reducer;
