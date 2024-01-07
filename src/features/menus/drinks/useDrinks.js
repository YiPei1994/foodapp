import { useQuery } from '@tanstack/react-query';
import { getDrinks } from '../../../services/apiDrinks';

export const useDrinks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['drinks'],
    queryFn: getDrinks,
  });

  return { data, isLoading };
};
