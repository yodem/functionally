import { fetchCardById } from '@/lib/cards/fetchCard';

const CardDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const card = await fetchCardById(id);
  return (
    <div>
      <p>Type: {card.type}</p>
      <p>Value: {card.value}</p>
    </div>
  );
};

export default CardDetails;
