import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createEditMenu } from '../../services/apiMenus';

export function useEditMenus() {
  const queryClient = useQueryClient();

  const { mutate: editMenus, isLoading: isEditing } = useMutation({
    mutationFn: ({ newMenusData, id }) => {
      createEditMenu(newMenusData, id);
    },
    onSuccess: () => {
      toast.success('Menus successfully edited');
      queryClient.invalidateQueries({ queryKey: ['menu_items'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editMenus, isEditing };
}
