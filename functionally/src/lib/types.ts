// File: lib/types.ts
export enum CardType {
  Function = 'function',
  Number = 'number',
  Action = 'action', // Generic action
  Special = 'special',
  // ... Add more specific special types? (Cut, ReplaceNumber)
}

export enum SpecialCardType {
  // Integral = 'Integral',
  Derivative = 'Derivative',
  // ... Add more
}

export type Card = {
  type: CardType;
  value: string | number;
  playerId?: string; // To track card ownership
};

export type Player = {
  id: string;
  name: string;
  hand: Card[];
  currentFunctionCard: Card;
  score: number;
};

export type AttackState = {
  attacker: string; // Player ID
  defender: string; // Player ID
};

export type GameState = {
  currentPlayer: string; // ID of the player whose turn it is
  deckStates: {
    numberDeck: Card[];
    functionDeck: Card[];
    specialActionDeck: Card[];
  };
  playedCards: Card[];
  attackState?: AttackState; // Represents the ongoing attack phase
};
