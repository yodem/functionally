import { v4 as uuidv4 } from 'uuid'; // For generating card IDs
import { Card, CardType, Player } from './types';

// ... other imports
const createFunctionDeck = (): Card[] => {
  const functionTypes = ['Add', 'Subtract', 'Multiply', 'Divide']; // Example function types
  return functionTypes.map((type) => ({
    id: uuidv4(),
    type: CardType.Function,
    value: type,
  }));
};
const createSpecialActionDeck = (): Card[] => {
  const actions = ['Skip Turn', 'Play Twice', 'Reverse']; // Example special actions
  return actions.map((action) => ({
    id: uuidv4(),
    type: CardType.Special,
    value: action,
  }));
};
// const initializeGame = () => {
//   // ... Logic to create decks (example: number cards)
//   const createDeck = (type: CardType, length: number): Card[] => {
//     return Array.from({ length }, (_, i) => ({
//       id: uuidv4(),
//       type,
//       value: i + 1,
//     }));
//   };

//   // ... Logic to create decks (example: number cards)
//   const numberDeck = createDeck(CardType.Number, 20);

//   const playerNames = ['Player 1', 'Player 2']; // or get player names from a configuration file or parameter
//   const players = playerNames.map((name) => ({ name, hand: [] /*...*/ }));

//   // ... Logic to deal cards, assign functions
//   const functionDeck: Card[] = createFunctionDeck(); // Assuming createFunctionDeck is a function that returns an array of Card objects.
//   const specialActionDeck: Card[] = createSpecialActionDeck(); // Similarly, for special action cards.
//   const newGameState: GameState = {
//     // ... rest of your game state
//     deckStates: {
//       functionDeck,
//       numberDeck,
//       specialActionDeck,
//     },
//     currentPlayer: players[0].name,
//     playedCards: [],
//   };
// };

const drawCards = (player: Player, deck: CardType, numCards: number) => {
  // ... (Similar to the previous example, accessing state via useSelector)
};

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getRandomCard = (cards: Card[]) => {
  return cards[Math.floor(Math.random() * cards.length)];
};

export const toKaTeX = (expression: string) => {
  // Replace fractions
  expression = expression.replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}');

  // Replace exponents
  expression = expression.replace(/(\w)\^(\d+)/g, '$1^{$2}');

  // Replace square roots
  expression = expression.replace(/sqrt\(([^)]+)\)/g, '\\sqrt{$1}');

  // Handle multiplication explicitly (optional, as juxtaposition also works)
  expression = expression.replace(/\*/g, '\\cdot ');

  return expression;
};
