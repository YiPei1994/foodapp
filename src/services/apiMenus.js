import supabase, { supabaseUrl } from './apiSupabase';

// fetach all menus
export const getMenus = async () => {
  const { data, error } = await supabase.from('menu_items').select('*');

  if (error) {
    throw new Error('Couldnt fetch menus.');
  }

  return data;
};
// create / edit menus

export async function createEditMenu(newMenu, id) {
  const hasImagePath = newMenu.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newMenu.image.name}`.replaceAll(
    '/',
    '',
  );
  const imagePath = hasImagePath
    ? newMenu.image
    : `${supabaseUrl}/storage/v1/object/public/menuImages/${imageName}`;

  // 1. Create/edit menu
  let query = supabase.from('menu_items');

  // A) CREATE
  if (!id) query = query.insert([{ ...newMenu, image: imagePath }]);

  // B) EDIT
  if (id)
    query = query.update({ ...newMenu, image: imagePath }).eq('item_id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Menu could not be created');
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('menuImages')
    .upload(imageName, newMenu.image);

  // 3. Delete the Menu IF there was an error uplaoding image
  if (storageError) {
    await supabase.from('menu_items').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Menu image could not be uploaded and the Menu was not created',
    );
  }

  return data;
}
// delete row
export const deleteMenu = async (id) => {
  const { data, error } = await supabase
    .from('menu_items')
    .delete()
    .eq('item_id', id)
    .single();

  if (error) {
    throw new Error('Couldnt delete menu.');
  }
  return data;
};
