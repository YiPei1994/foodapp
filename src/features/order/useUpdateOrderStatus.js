import { useMutation } from '@tanstack/react-query';
import { updateOrderStatus } from '../../services/apiOrder';

export const useUpdateOrderStatus = () => {
  const { mutate: updatingStatus, isLoading } = useMutation({
    mutationFn: updateOrderStatus,
  });

  return { updatingStatus, isLoading };
};
