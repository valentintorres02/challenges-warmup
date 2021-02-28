import { useState } from 'react';

const CreateNewBody = () => {
  const [newBody, setNewBody] = useState('');

  const handleBodyChange = (e) => {
    setNewBody(e.target.value);
  };

  return {
    newBody, handleBodyChange,
  };
};

export default CreateNewBody;
