import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreateCharacter = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/characters', data);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Character Name" required />
      <input {...register('description')} placeholder="Description" required />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateCharacter;
