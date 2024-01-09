import supabase from './apiSupabase';

export const getOrders = async () => {
  const { data, error } = await supabase.from('orders').select('*');

  if (error) {
    throw new Error('Couldnt fetch Orders.');
  }

  return data;
};
