import supabase from './apiSupabase';

// fetch all orders
export const getOrders = async () => {
  const { data, error } = await supabase.from('orders').select('*');

  if (error) {
    throw new Error('Couldnt fetch Orders.');
  }

  return data;
};

// deleting order incase change of mind
export const deleteOrder = async (id) => {
  console.log(id);
  const { error } = await supabase.from('orders').delete().eq('order_id', id);

  if (error) {
    throw new Error('Coudnt find this table');
  }
};

// fetch status of order on specific id
export const getMyOrderStatus = async (id) => {
  const { data, error } = await supabase
    .from('orders')
    .select('status')
    .eq('order_id', id);

  if (error) {
    throw new Error('No Status found.');
  }

  return data;
};

// change order status
export const updateOrderStatus = async (newData) => {
  const { order_id, statusCooking } = newData;
  const { data, error } = await supabase
    .from('orders')
    .update({ status: statusCooking })
    .eq('order_id', order_id)
    .select();

  if (error) {
    throw new Error('Couldnt update status of order.');
  }
  return data;
};

// fetch all order items related to specific id
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

// creates new order items in order_items with its ids

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

// creating new order using table and customer ids
export const createNewOrder = async ({ table, customer }) => {
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

// fetch for last generated orderId related to specific table id
export const fetchLastOrderId = async (id) => {
  if (!id) return;
  const { data: tableData, error: tableError } = await supabase
    .from('orders')
    .select('order_id')
    .eq('table_id', id)
    .order('order_id', { ascending: false })
    .limit(1);

  if (tableError) {
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
