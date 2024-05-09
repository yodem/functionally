import { Suspense } from 'react';
import AllCards from '@/components/Card/AllCards';
import { CardType } from '@/lib/types';

// `layout.tsx` will handle data fetching, this becomes a presentational component
export default async function CardsPage({
  params: { type },
}: {
  params: { type: CardType };
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllCards cardType={type} />
    </Suspense>
  );
}
