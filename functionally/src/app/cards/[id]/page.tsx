import { useRouter } from 'next/router';
import { getDoc, doc } from 'firebase/firestore';
// import { db } from '../lib/firebase';

const CardDetails = () => {
  const router = useRouter();
  const { cardId } = router.query;

  // ... Add state and useEffect to fetch the card details based on 'cardId'

  return <div>{/* Display card.type and card.value */}</div>;
};

export default CardDetails;
