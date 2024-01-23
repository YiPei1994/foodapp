import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteOrder } from '../../services/apiOrder';
import toast from 'react-hot-toast';

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  const { mutate: deletingOrder, isLoading } = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      /* toast.success('Order number deleted'); */
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deletingOrder, isLoading };
};
