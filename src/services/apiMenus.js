import supabase from './apiSupabase';

// fetach all menus
export const getMenus = async () => {
  const { data, error } = await supabase.from('menu_items').select('*');

  if (error) {
    throw new Error('Couldnt fetch menus.');
  }

  return data;
};
