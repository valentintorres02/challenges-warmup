import { useState } from 'react';

const GetSelectedPostToEdit = () => {
  const [selectedPostToEdit, setSelectedPostToEdit] = useState('');

  const handleSelectedPostToEdit = (e) => {
    setSelectedPostToEdit(e.target.value);
  };

  return { selectedPostToEdit, handleSelectedPostToEdit };
};

export default GetSelectedPostToEdit;
