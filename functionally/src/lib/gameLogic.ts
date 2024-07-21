import { actionFunctions } from './cards/cardActions';
import { Player, Card, CardType, SpecialCardType } from './types';
import * as math from 'mathjs';

const calculateYValue = (
  functionCard: Card,
  xValue: number | string,
): number => {
  const expression = math.parse(functionCard.value.toString());
  const func = expression.compile();
  return func.evaluate({ x: xValue });
};

const attack = (
  attacker: Player,
  defender: Player,
  numberCard: Card,
): boolean => {
  if (numberCard.type !== CardType.Number) return false;

  const attackerY = calculateYValue(
    attacker.currentFunctionCard,
    numberCard.value,
  );
  return true; // Placeholder for now
};

const defend = (
  defender: Player,
  numberCard: Card,
  attackerY: number,
): boolean => {
  if (numberCard.type !== CardType.Number) return false;

  const defenderY = calculateYValue(
    defender.currentFunctionCard,
    numberCard.value,
  );
  return defenderY > attackerY;
};
const applyAction = (actionCard: Card, targetCard: Card): Card => {
  if (actionCard.type in actionFunctions) {
    return actionFunctions[actionCard.value as SpecialCardType](targetCard);
  } else {
    throw new Error('Unsupported action card type');
  }
};

// ... implement resolveAttackPhase (more complex logic for the loop and point awarding)
