import { useState } from 'react';

const ChangeDisplay = () => {
  const [errorMessageDisplay, setErrorMessageDisplay] = useState('hidden');
  const [editFormDisplay, setEditFormDisplay] = useState('');

  const makeErrorMessageVisible = () => {
    setErrorMessageDisplay('');
    setEditFormDisplay('hidden');
  };

  const makeErrorMessageInvisible = () => {
    setErrorMessageDisplay('hidden');
    setEditFormDisplay('');
  };

  return {
    errorMessageDisplay, editFormDisplay, makeErrorMessageVisible, makeErrorMessageInvisible,
  };
};

export default ChangeDisplay;
