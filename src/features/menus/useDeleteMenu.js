import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMenu } from '../../services/apiMenus';
import toast from 'react-hot-toast';

export const useDeleteMenu = () => {
  const queryClient = useQueryClient();
  const { mutate: deletingMenu, isLoading } = useMutation({
    mutationFn: deleteMenu,
    onSuccess: () => {
      toast.success('Successfully deleted the menu.');
      queryClient.invalidateQueries({ queryKey: ['menu_items'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deletingMenu, isLoading };
};
