import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewOrder } from '../../services/apiOrder';

export const useCreateTable = () => {
  const queryClient = useQueryClient();
  const {
    mutate: creatingTable,
    isLoading,
    error,
    isError,
  } = useMutation({
    mutationFn: createNewOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  return { creatingTable, isLoading, error, isError };
};
