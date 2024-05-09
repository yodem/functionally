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
  id: string;
  type: CardType;
  value: string | number;
  playerId?: string; // To track card ownership
};

export type Student = {
  firstName: string;
  lastName: string;
  id: string;
  school: string;
  grade: number;
};
export type Player = {
  id: string; // reference to student ID
  hand: Card[]; // Cards in hand, reference to card IDs
  currentFunctionCard: Card; // reference to card ID with type function
  score: number;
};

export type AttackState = {
  attacker: string; // reference to student ID
  defender: string; // Player ID
};

export type GameState = {
  id: string;
  currentPlayer: string; // ID of the player whose turn it is,
  players: Player[];
  deckStates: {
    numberDeck: Card[];
    functionDeck: Card[];
    // specialActionDeck: Card[];
  };
  playedCards: Card[];
  // attackState?: AttackState; // Represents the ongoing attack phase
};
