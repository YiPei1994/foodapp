import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditMenu } from '../../services/apiMenus';
import toast from 'react-hot-toast';

export function useCreateMenu() {
  const queryClient = useQueryClient();
  const { mutate: creatingMenu, isLoding } = useMutation({
    mutationFn: createEditMenu,
    onSuccess: () => {
      toast.success('Succesfully added new menu.');
      queryClient.invalidateQueries({ queryKey: ['menu_items'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { creatingMenu, isLoding };
}
