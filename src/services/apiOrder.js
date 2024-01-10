import supabase from './apiSupabase';

export const getOrders = async () => {
  const { data, error } = await supabase.from('orders').select('*');

  if (error) {
    throw new Error('Couldnt fetch Orders.');
  }

  return data;
};

export const getItemsFromOrderId = async (id) => {
  console.log(id);
  const { data, error } = await supabase
    .from('order_items')
    .select(`menu_items:item_id(*),quantity`)
    .eq('order_id', id);

  if (error) {
    throw new Error("Couldn't fetch item names");
  }

  return data;
};
