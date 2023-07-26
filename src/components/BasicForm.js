import useInput from '../hooks/use-input-reducer';
import '../index.css';

const BasicForm = props => {
  const {
    value: enteredFirstname,
    isValid: enteredFirstnameIsValid,
    hasError: firstnameInputHasError,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: resetFirstnameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLastname,
    isValid: enteredLastnameIsValid,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastnameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes('@'));

  const firstnameValidColor = firstnameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastnameValidColor = lastnameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailValidColor = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  let isFormValid = false;

  if (
    enteredFirstnameIsValid &&
    enteredLastnameIsValid &&
    enteredEmailIsValid
  ) {
    isFormValid = true;
  }

  const submitFormHandler = event => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    resetFirstnameInput();
    resetLastnameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstnameValidColor}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstname}
            onChange={firstnameChangeHandler}
            onBlur={firstnameBlurHandler}
          />
          {firstnameInputHasError && (
            <p className="error-text">First Name must not be empty.</p>
          )}
        </div>
        <div className={lastnameValidColor}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastname}
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
          />
          {lastnameInputHasError && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailValidColor}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
