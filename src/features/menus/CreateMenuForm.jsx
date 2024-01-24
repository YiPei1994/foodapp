import { Button } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateMenu } from './useCreateMenu';

export default function CreateMenuForm({ onClose }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { creatingMenu } = useCreateMenu();
  function onSubmit(data) {
    if (!data) return;
    const image = typeof data.image === 'string' ? data.image : data.image[0];

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
          {...register('description', { required: 'required' })}
        />
      </div>
      <div className="mt-2 flex items-center justify-between ">
        <label htmlFor="image" className="w-1/5 font-bold uppercase">
          Image: <span>{errors?.image?.message}</span>{' '}
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          className="w-3/5  px-4 py-2 "
          {...register('image', { required: 'required' })}
        />
      </div>
      <div className="mt-2 flex items-center justify-end py-6">
        <Button colorScheme="red" mr={4} type="reset" onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="whatsapp" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
}
