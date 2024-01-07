import supabase from './apiSupabase';

export const getDrinks = async () => {
  const { data: drinks, error } = await supabase.from('drinks').select('*');

  if (error) {
    throw new Error('Cant fetch drinks');
  }

  return drinks;
};
