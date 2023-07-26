import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isFocus: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return { value: action.value, isFocus: state.isFocus };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isFocus: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isFocus: false };
  }

  return inputStateReducer;
};

const useInput = validateValue => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState,
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isFocus;

  const valueChangeHandler = event => {
    dispatch({ type: 'CHANGE', value: event.target.value });
  };

  const inputBlurHandler = event => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
