import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateOrderStatus } from '../../services/apiOrder';

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: updatingStatus, isLoading } = useMutation({
    mutationFn: updateOrderStatus,
    onSuccess:() => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    }
    
  });

  return { updatingStatus, isLoading };
};
