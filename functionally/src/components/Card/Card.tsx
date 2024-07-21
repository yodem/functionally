import { CardType, Card } from '@/lib/types';
import { ReactNode } from 'react';
import {
  ActionCard,
  FunctionCard,
  NumberCard,
  SpecialCard,
} from './CardComponents';
import { getImageSrc } from './cardBackgrounds';

export const CardByType: React.FC<{ card: Card }> = ({ card }) => {
  const CardsMap: Record<CardType, ReactNode> = {
    action: <ActionCard card={card} />,
    function: <FunctionCard card={card} />,
    number: <NumberCard card={card} />,
    special: <SpecialCard card={card} />,
  };

  return (
    <div
      style={{
        backgroundImage: `url(${getImageSrc(card.type).src})`,
      }}
      className="flex-column m-1 flex h-96 w-56 items-center justify-center bg-cover bg-center"
    >
      <div className="flex text-lg text-blue-400">{CardsMap[card.type]}</div>
    </div>
  );
};
