import { Suspense } from 'react';
import AllCards from '@/components/Card/AllCards';

// `layout.tsx` will handle data fetching, this becomes a presentational component
export default async function CardsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllCards />
    </Suspense>
  );
}
