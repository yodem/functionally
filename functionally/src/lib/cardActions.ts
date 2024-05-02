import { GameState, Card, CardType, SpecialCardType } from './types';
// import mathIntegal from 'mathjs-simple-integral';
import * as math from 'mathjs';
// ... cutFunction (from previous example)

// const integral = (functionCard: Card): Card => {
//   if (functionCard && typeof functionCard.value === 'string') {
//     try {
//       const integralResult = mathIntegal.integral(functionCard.value, 'x'); // Corrected to use integral instead of derivative
//       functionCard.value = integralResult.toString(); // Result might be an expression or a function
//     } catch (error) {
//       // Handle errors (mathjs might not be able to handle all functions)
//     }
//   }
//   return functionCard;
// };

export const derivative = (functionCard: Card): Card => {
  if (functionCard && typeof functionCard.value === 'string') {
    try {
      const derivativeResult = math.derivative(functionCard.value, 'x');
      functionCard.value = derivativeResult.toString();
    } catch (error) {
      console.error('Error calculating derivative:', error);
    }
  }
  return functionCard;
};
const drawCard = (
  gameState: GameState,
  player: string,
  deckType: CardType,
): GameState => {
  // Logic for Drawing Cards:
  // 1. Find the appropriate deck in gameState.deckStates
  // 2. Remove a card from the deck
  // 3. Add the card to the player's hand (find player in gameState)
  // 4. Update gameState
  return gameState;
};

// ... Add more action functions

export const actionFunctions: Record<
  SpecialCardType,
  (targetCard: Card) => Card
> = {
  // [SpecialCardType.Integral]: integral,
  [SpecialCardType.Derivative]: derivative,
  // ... add more actions here
};
