const ValidationForm = (action, inputToValidateOne, inputToValidateTwo) => {
  if (inputToValidateOne && inputToValidateTwo) {
    return console.log(`${action} post. ${inputToValidateOne}. ${inputToValidateTwo}`);
  } return alert('Completa todos los campos!');
};

export default ValidationForm;
