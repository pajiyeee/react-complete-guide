import { useState } from 'react';

const useInput = validateValue => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isFocus;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = event => {
    setIsFocus(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsFocus(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
