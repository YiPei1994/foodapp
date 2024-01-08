import { useQuery } from '@tanstack/react-query';
import { getMenus } from '../../services/apiMenus';

export const useReadMenus = () => {
  const { data: menus, isLoading } = useQuery({
    queryKey: ['menu_items'],
    queryFn: getMenus,
  });

  return { menus, isLoading };
};
