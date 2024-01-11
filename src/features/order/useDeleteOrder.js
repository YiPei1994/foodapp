import { useMutation } from '@tanstack/react-query';
import { deleteOrder } from '../../services/apiOrder';
import toast from 'react-hot-toast';

export const useDeleteOrder = () => {
  const { mutate: deletingOrder, isLoading } = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      toast.success('Order number deleted');
    },
    onError: (err) => toast.error(err.message),
  });
  return { deletingOrder, isLoading };
};
