import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createMenu } from '../../services/apiMenus';

export function useEditMenus() {
  const queryClient = useQueryClient();

  const { mutate: editMenus, isLoading: isEditing } = useMutation({
    mutationFn: ({ newMenusData, id }) => createMenu(newMenusData, id),
    onSuccess: () => {
      toast.success('Menus successfully edited');
      queryClient.invalidateQueries({ queryKey: ['item_menus'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editMenus, isEditing };
}
