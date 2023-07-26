# React | React 완벽가이드 with Redux, Next, TypeScript | Section16

**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview

## **Section16 : 양식 및 사용자 입력 작업**

### 209. 양식 제출 처리 및 사용자 입력 값 가져오기

만약 인풋 값이 폼으로 제출될 때 한 번만 value 값이 필요하다면 ref 가 낫다.

```jsx
import { useRef } from 'react';

const SimpleInput = props => {
  const inputRef = useRef();

  const submitFormHandler = event => {
    event.preventDefault();

    const enteredValue = inputRef.current.value;
    console.log(enteredValue);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input ref={inputRef} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
```

즉각적인 유효성 검증을 위해 키 입력마다 입력 값이 필요하면,

그리고 입력된 값을 초기화하고 싶을 때 state를 사용하면 된다.

```jsx
import { useState } from 'react';

const SimpleInput = props => {
  const [inputName, setInputName] = useState();

  const inputNameHandler = event => {
    setInputName(event.target.value);
  };

  const submitFormHandler = event => {
    event.preventDefault();
    console.log(inputName);
    setInputName('');
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputNameHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
```

ref도 입력된 값을 초기화할 수 있지만 깔끔한 코드가 안 나온다.

DOM에 접근해서 값을 초기화하는데 보통 지양해야 하는 방법

```jsx
~~inputRef.current.value = ’’~~
```

### 210~211. 기본 검증 추가하기

브라우저에서 유효성 검증을 하는 방식은 사용자 측면에서 빠른 반응을 할 수 있어서 좋다.

그래도 입력한 값들은 서버 측면에서도 검증되어야 하는데 브라우저에 있는 코드가 사용자에 의해 편집될 수 있기 때문 → 개발자 도구> 소스 탭에 들어가면 코드 편집할 수 있음

빈 값일 때 뒷 코드가 실행되지 않게 하려면

예시)

```jsx
const submitFormHandler = event => {
  event.preventDefault();
  if (inputName.trim === '') {
    return;
  }
  console.log(inputName);
  setInputName('');
};
```

에러 여부에 따라 인풋창 컬러가 달라지게, 에러메시지

유효성 검사에 대한 state를 만들어 활용

예시)

```jsx
import { useState } from 'react';

const SimpleInput = props => {
  const [inputName, setInputName] = useState('');
  const [isValidName, setIsValidName] = useState(true);

  const inputNameHandler = event => {
    setInputName(event.target.value);
  };

  const submitFormHandler = event => {
    event.preventDefault();
    if (inputName.trim() === '') {
      setIsValidName(false);
      return;
    }
    console.log(inputName);
    setInputName('');
  };

  const inputValidColor = isValidName ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={inputValidColor}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputNameHandler} />
        {!isValidName && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
```

### 212. “was touched” State 처리하기

아래 코드처럼 처음부터 유효성 검사를 true 로 설정하는 것은 부정확한 설정, 임시방편

단지 에러인지 여부 판단을 위해 존재해야 하는데 처음부터 true 로 설정하면…

만약 useEffect에서 유효성 검사 State를 활용한다 하면 처음부터 true인 상태가 반영되는 것

처음부터 false 인 것이 옳은 것

```jsx
const [isValidName, setIsValidName] = useState(true); // X

const [isValidName, setIsValidName] = useState(false); // O
```

따라서 상태를 하나 더 추가

인풋에 입력을 했지만 빈 값일 때와 인풋을 입력을 아직 안하고 빈 값인 상태로 나눔

```jsx
import { useEffect, useState } from 'react';

const SimpleInput = props => {
  const [inputName, setInputName] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(false);

  useEffect(() => {
    if (isValidName) {
      console.log('Name Input is Valid!');
    }
  }, [isValidName]);

  const nameInputInvalid = !isValidName && isInputFocus;

  const inputNameHandler = event => {
    setInputName(event.target.value);
  };

  const submitFormHandler = event => {
    event.preventDefault();

    setIsInputFocus(true);

    if (inputName.trim() === '') {
      setIsValidName(false);
      return;
    }
    console.log(inputName);
    setInputName('');
  };

  const inputValidColor = nameInputInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={inputValidColor}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={inputName}
          onChange={inputNameHandler}
        />
        {nameInputInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
```

### 213. 초점을 잃은 리액트

submit 버튼 클릭했을 때 에러를 보여주는 건 사용자 경험 측면에서 느린 반응일 수도 있다.

입력창을 클릭하다 포커스를 다시 아웃 시킬 때도 에러가 뜨게 하면 되는데,

focus에 관해 함수를 만든다.

```jsx
...
const inputNameBlurHandler = event => {
    setIsInputFocus(true);

    if (inputName.trim() === '') {
      setIsValidName(false);
      return;
    }
  };
...

return (
    <form onSubmit={submitFormHandler}>
				...
        <input
          type="text"
          id="name"
          value={inputName}
          onChange={inputNameHandler}
          onBlur={inputNameBlurHandler}
        />
				...
    </form>
  );
```

### 214. 리팩토링 및 State 파생

키 입력을 바로바로 확인하기 위해 onChange 함수에도 조건문

```jsx
const inputNameHandler = event => {
  setInputName(event.target.value);

  if (inputName.trim() === '') {
    setIsValidName(false);
    return;
  }
};
```

키 입력이 올 때마다 유효한 값인지 최대한 빨리 유효하지 않음에 대한 에러를 제거해야 한다.

아래처럼 바꾼다. 저렇게 되면 조건문 뒤에 실행할 코드가 없어지므로 return은 사라짐

```jsx
const inputNameHandler = event => {
  setInputName(event.target.value);

  if (inputName.trim() !== '') {
    setIsValidName(true);
  }
};
```

blur에 관한 함수에서도 return 삭제

```jsx
const inputNameBlurHandler = event => {
  setIsInputFocus(true);

  if (inputName.trim() === '') {
    setIsValidName(false);
  }
};
```

또 inputName state를 이용하여 value를 업데이트하고 있지만

이러한 상태들은 리액트에서 비동기적으로 처리되어 즉각적인 반영되지 않음

인풋 상태를 업데이트 하는데에 쓰인 사용된 데이터와 같은 데이터인

event.target.value 사용해서 조건문에 활용

```jsx
const inputNameHandler = event => {
  setInputName(event.target.value);

  if (event.target.value.trim() !== '') {
    setIsValidName(true);
  }
};
```

반복되는 코드들을 리팩토링

먼저, isValidName state는 inpuName state를 활용해도 괜찮기 때문에 상수로 바꾼다.

```jsx
const [inputName, setInputName] = useState('');
const [isInputFocus, setIsInputFocus] = useState(false);

const isValidName = inputName.trim() !== '';
```

이렇게 하면 조건문을 쓰였던 부분들을 리팩토링할 수 있다.

setInputName 함수를 통해 전체가 리렌더링되고 키가 입력될 때마다 다시 검증

```jsx
const [inputName, setInputName] = useState('');
const [isInputFocus, setIsInputFocus] = useState(false);

const isValidName = inputName.trim() !== '';

const nameInputInvalid = !isValidName && isInputFocus;

const inputNameHandler = event => {
  setInputName(event.target.value);
};

const inputNameBlurHandler = event => {
  setIsInputFocus(true);
};

const submitFormHandler = event => {
  event.preventDefault();

  setIsInputFocus(true);

  if (!isValidName) {
    return;
  }
  setInputName('');
  setIsInputFocus(false);
};
```

### 215. 전체 양식 유효성 관리

입력값이 여러 개일 때, 상태를 추가하고 useEffect 를 활용할 수 있다.

```jsx
const [formIsValid, setFormIsValid] = useState(false);
const [inputName, setInputName] = useState('');
const [isInputFocus, setIsInputFocus] = useState(false);

const isValidName = inputName.trim() !== '';

const nameInputInvalid = !isValidName && isInputFocus;

useEffect(() => {
	if (isValidName) {
		setFormIsValid(true);
	} else {
		setFormIsValid(false);
	}
}, [isValidName])

return (
	...
        <button disabled={!formIsValid}>Submit</button>
	...
  );
```

하지만 useEffect를 쓰나마나 같기 때문에 상태가 아닌

단순히 form 유효성 검사 기본값을 false로 하고 조건문만 써서 표현할 수 있다.

```jsx
const [inputName, setInputName] = useState('');
const [isInputFocus, setIsInputFocus] = useState(false);

const isValidName = inputName.trim() !== '';

const nameInputInvalid = !isValidName && isInputFocus;

let formIsValid = false;

if (isValidName) {
  formIsValid = true;
}
```

### 218~219. 커스텀 입력 훅 추가

```jsx
//use-input.js

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
```

```jsx
//SimpleInput.js

import useInput from '../hooks/use-input';

const SimpleInput = props => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes('@'));

  const nameValidColor = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailValidColor = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameValidColor}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailValidColor}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
```

Formik

폼을 만드는 써드 파티 라이브러리

다양한 usecase와 로직이 있음

### 223. useReducer() 사용하기

상태나 업데이트 로직이 많거나 복잡할 때 사용

```jsx
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
```
