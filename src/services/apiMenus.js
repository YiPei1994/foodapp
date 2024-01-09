import supabase from './apiSupabase';

export const getMenus = async () => {
  const { data, error } = await supabase.from('menu_items').select('*');

  if (error) {
    throw new Error('Couldnt fetch menus.');
  }

  return data;
};
