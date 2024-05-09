import { GetServerSideProps } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import { db } from '@/app/firebaseConfig';

type Card = {
  id: string;
  type: string;
  value: string;
  // add other card properties here
};

const Page = ({ cards }: { cards: Card[] }) => {
  return (
    <div>
      <h1>All Cards</h1>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Link href={`/cards/${card.id}`}>
              <b>
                {card.type} - {card.value}
              </b>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const cardsRef = collection(db, 'Cards');
  const querySnapshot = await getDocs(cardsRef);
  const cards: Card[] = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as Card;
  });

  return {
    props: {
      cards,
    },
  };
};

export default Page;
