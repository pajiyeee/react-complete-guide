import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const emptyInput = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {
  const [formValid, setFormValid] = useState({
    name: true,
    address: true,
    postCode: true,
  });
  const nameRef = useRef();
  const addressRef = useRef();
  const postCodeRef = useRef();

  const confirmHandler = event => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredPostCode = postCodeRef.current.value;

    const enteredNameIsValid = !emptyInput(enteredName);
    const enteredAddressIsValid = !emptyInput(enteredAddress);
    const enteredPostCodeIsValid = isFiveChars(enteredPostCode);

    setFormValid({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      postCode: enteredPostCodeIsValid,
    });

    const formValid =
      enteredNameIsValid && enteredAddressIsValid && enteredPostCodeIsValid;

    if (!formValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      postCode: enteredPostCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formValid.name ? '' : classes.invalid
  }`;

  const addressControlClasses = `${classes.control} ${
    formValid.address ? '' : classes.invalid
  }`;

  const postCodeControlClasses = `${classes.control} ${
    formValid.postCode ? '' : classes.invalid
  }`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">받는 분</label>
        <input ref={nameRef} type="text" id="name" />
        {!formValid.name && <p>Please enter a valid</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">주소</label>
        <input ref={addressRef} type="text" id="address" />
        {!formValid.address && <p>Please enter a valid</p>}
      </div>
      <div className={postCodeControlClasses}>
        <label htmlFor="postcode">우편번호</label>
        <input ref={postCodeRef} type="text" id="postcode" />
        {!formValid.postCode && <p>Please enter a valid</p>}
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={classes.button}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
