import supabase from './apiSupabase';

export const getOrders = async () => {
  const { data, error } = await supabase.from('orders').select('*');

  if (error) {
    throw new Error('Couldnt fetch Orders.');
  }

  return data;
};

export const getItemsFromOrderId = async (id) => {
  const { data, error } = await supabase
    .from('order_items')
    .select(`menu_items:item_id(*),quantity`)
    .eq('order_id', id);

  if (error) {
    throw new Error("Couldn't fetch item names");
  }

  return data;
};

export const createNewOrder = async ({ table, customer }) => {
  console.log(table, customer);
  const existingRecord = await supabase
    .from('orders')
    .select('customer_id')
    .eq('customer_id', customer);

  if (existingRecord.data.length === 0) {
    const { error } = await supabase
      .from('orders')
      .insert([{ table_id: table, customer_id: customer }])
      .select();

    if (error) {
      throw new Error("Couldn't add new table");
    }
  } else {
    throw new Error(
      'You have made order already. Please check your order window.',
    );
  }
};

export const fetchLastOrderId = async (id) => {
  const { data: tableData, error: tableError } = await supabase
    .from('orders')
    .select('order_id')
    .eq('table_id', id)
    .order('order_id', { ascending: false })
    .limit(1);

  if (tableError) {
    console.log(tableError.message);
    throw new Error(
      'Failed to fetch the last order ID for the specified table_id',
    );
  }

  if (tableData.length === 0) {
    throw new Error(`No orders found for the table_id: ${id}`);
  }

  const lastOrder = tableData[0];
  const lastOrderId = lastOrder.order_id;

  return lastOrderId;
};

export const createNewOrderItems = async (items) => {
  const { data, error } = await supabase
    .from('order_items')
    .insert(items)
    .select();

  if (error) {
    throw new Error('Couldnt create new order items');
  }
  return data;
};

export const deleteOrder = async (id) => {
  const { error } = await supabase.from('orders').delete().eq('table_id', id);

  if (error) {
    throw new Error('Coudnt find this table');
  }
};
