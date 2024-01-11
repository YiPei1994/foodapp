import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewOrderItems } from '../../services/apiOrder';
import toast from 'react-hot-toast';

export const useCreateNewItem = () => {
  const queryClient = useQueryClient();
  const {
    mutate: creatingNewItems,
    isLoading,
    error,
    isError,
  } = useMutation({
    mutationFn: createNewOrderItems,
    onSuccess: () => {
      toast.success('successfully added!');
      queryClient.invalidateQueries({ queryKey: ['order_items'] });
    },
  });

  return { creatingNewItems, isLoading, error, isError };
};
