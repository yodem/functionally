import { Card } from '@/lib/types';
import { toKaTeX } from '@/lib/utils';
import React from 'react';
import KaTeXRenderer from '../Katex/KatexRenderer';

export const FunctionCard: React.FC<{ card: Card }> = ({ card }) => {
  // Function card component implementation
  return <KaTeXRenderer math={toKaTeX(card.value as string)} />;
};

export const NumberCard: React.FC<{ card: Card }> = ({ card }) => {
  // Number card component implementation
  return <div>{card.value}</div>;
};

export const ActionCard: React.FC<{ card: Card }> = ({ card }) => {
  // Action card component implementation
  return <div>Action Card</div>;
};

export const SpecialCard: React.FC<{ card: Card }> = ({ card }) => {
  // Special card component implementation
  return <div>Special Card</div>;
};
