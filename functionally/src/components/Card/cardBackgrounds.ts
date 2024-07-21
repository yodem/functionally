import { CardType } from '@/lib/types';
import functionBg from '@public/function.jpg';
import numberBg from '@public/number.jpg';
import actionBg from '@public/special.jpg';
import specialBg from '@public/special.jpg';
import { StaticImageData } from 'next/image';
export const getImageSrc = (cardType: CardType) => {
  const imageSrcMap: Record<CardType, StaticImageData> = {
    function: functionBg,
    number: numberBg,
    action: actionBg,
    special: specialBg,
  };
  return imageSrcMap[cardType];
};
