import { fetchCardById } from '@/lib/cards/fetchCard';
import { CardByType } from '@/components/Card/Card';

const CardDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const card = await fetchCardById(id);

  return <CardByType card={card} />;
};

export default CardDetails;
