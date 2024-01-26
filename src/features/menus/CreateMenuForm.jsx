import { Button } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateMenu } from './useCreateMenu';
import { useEditMenus } from './useEditMenu';

export default function CreateMenuForm({ onClose, menu = {} }) {
  const { item_id: editId, ...editValues } = menu;
  const isEditSession = Boolean(editId);
  const { creatingMenu } = useCreateMenu();
  const { editMenus } = useEditMenus();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    if (isEditSession) {
      editMenus(
        { newMenusData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onClose();
          },
        },
      );
    } else
      creatingMenu(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onClose();
          },
        },
      );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-2 flex items-center justify-between ">
        <label htmlFor="item_name" className="w-1/5 font-bold uppercase">
          Menu name: <span>{errors?.item_name?.message}</span>{' '}
        </label>
        <input
          id="item_name"
          type="text"
          className="w-3/5 border border-yellow-300 px-4 py-2 focus:border-amber-500 focus:outline-none"
          defaultValue=""
          {...register('item_name', { required: 'required' })}
        />
      </div>
      <div className="mt-2 flex items-center justify-between ">
        <label htmlFor="item_type" className="w-1/5 font-bold uppercase">
          Menu type: <span>{errors?.item_type?.message}</span>{' '}
        </label>
        <input
          id="item_type"
          type="text"
          className="w-3/5 border border-yellow-300 px-4 py-2 focus:border-amber-500 focus:outline-none"
          defaultValue=""
          {...register('item_type', { required: 'required' })}
        />
      </div>
      <div className="mt-2 flex items-center justify-between ">
        <label htmlFor="price" className="w-1/5 font-bold uppercase">
          Menu price: <span>{errors?.price?.message}</span>{' '}
        </label>
        <input
          id="price"
          type="number"
          className="w-3/5 border border-yellow-300 px-4 py-2 focus:border-amber-500 focus:outline-none"
          defaultValue={0}
          {...register('price', { required: 'required' })}
        />
      </div>
      <div className="mt-2 flex items-center justify-between ">
        <label htmlFor="allergies" className="w-1/5 font-bold uppercase">
          Allergies: <span>{errors?.allergies?.message}</span>{' '}
        </label>
        <input
          id="allergies"
          type="text"
          className="w-3/5 border border-yellow-300 px-4 py-2 focus:border-amber-500 focus:outline-none"
          defaultValue=""
          {...register('allergies', { required: 'required' })}
        />
      </div>
      <div className="mt-2 flex items-center justify-between ">
        <label htmlFor="description" className="w-[25%] font-bold uppercase">
          Description: <span>{errors?.description?.message}</span>{' '}
        </label>
        <textarea
          id="description"
          type="text"
          className="w-3/5 border border-yellow-300 px-4 py-2 focus:border-amber-500 focus:outline-none"
          defaultValue=""
          {...register('description', { required: 'required' })}
        />
      </div>

      <div className="mt-2 flex items-center justify-between ">
        <label htmlFor="image" className="w-1/5 font-bold uppercase">
          Image: <span>{errors?.image?.message}</span>{' '}
        </label>
        <input
          id="image"
          accept="image/*"
          type="file"
          className="w-3/5 px-4 py-2 "
          {...register('image', {
            required: isEditSession ? false : 'This is required',
          })}
        />
      </div>

      <div className="mt-2 flex items-center justify-end py-6">
        <Button colorScheme="red" mr={4} type="reset" onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="whatsapp" type="submit">
          {!isEditSession ? 'Add' : 'Edit'}
        </Button>
      </div>
    </form>
  );
}
