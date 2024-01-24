import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMenu } from '../../services/apiMenus';
import toast from 'react-hot-toast';

export function useCreateMenu() {
  const queryClient = useQueryClient();
  const { mutate: creatingMenu, isLoding } = useMutation({
    mutationFn: createMenu,
    onSuccess: () => {
      toast.success('Succesfully added new menu.');
      queryClient.invalidateQueries({ queryKey: ['menu_items'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { creatingMenu, isLoding };
}
