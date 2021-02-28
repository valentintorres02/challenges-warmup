import { useState } from 'react';

const CreateNewTitle = () => {
  const [newTitle, setNewTitle] = useState('');

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return {
    newTitle, handleTitleChange,
  };
};

export default CreateNewTitle;
