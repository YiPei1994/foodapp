import { useQuery } from '@tanstack/react-query';
import { getItemsFromOrderId } from '../../services/apiOrder';
import { useSearchParams } from 'react-router-dom';

export const useReadOrder = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('order');

  const { refetch, isLoading, data } = useQuery({
    queryFn: () => getItemsFromOrderId(id),
    queryKey: ['order_items'],
    enabled: false,
  });

  return { refetch, isLoading, data };
};
