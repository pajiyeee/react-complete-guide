# React | React 완벽가이드 with Redux, Next, TypeScript | Section 10

**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview

## **Section10 : Reducer를 사용하여 부작용 처리 & 컨텍스트 API사용**

### 119. “Side Effects”란? useEffect 소개

Main Job

useState Hook, Props etc

Side Effects

애플리케이션에서 일어나는 다른 모든 것

state 가 변할 때마다 컴포넌트 전체가 렌더링됨

http 리퀘스트에 대한 응답으로 버그나 무한루프에 빠질 수도 있다.

함수가 다시 실행될 때마다 요청을 보내면 응답으로 이 함수를 다시 트리거하는 state 를 변경하게 되니까

그래서 사이드 이펙트가 함수에 들어가서는 안됨

→useEffect를 활용하면 됨

`useEffect(() ⇒ {…}. [dependencies])`

의존성 배열이 변경될 때마다 함수가 실행

### 120. useEffect() 훅

리액트 state로 관리하면 새로고침했을 때 다시 리셋된다.

→ 애플리케이션을 다시 로드하 때 전체 리액트 스크립트가 다시 시작된다.

→ 그래서 가장 최근 실행에서 얻은 변수는 사라진다.

다시 시작해도 유지하기 위해선(앱이 다시 시작했을 때 데이터가 유지되었는지 확인할 수 있는 곳 필요)

→useEffect 사용

setIsLoggedIn(true)

브라우저 저장소의 정보를 저장하려는 것

브라우저에는 저장할 수 있는 저장소가 여러 개 있는데 일반적으로 쿠키 또는 로컬 저장소 사용

작업하기 쉬운 로컬 저장소 사용할 것

브라우저에 내장된 저장 매커니즘 localStorage.setItem(’아무 식별자’, ‘아무 식별자(로그인여부 확인)’)

```jsx
const loginHandler = (email, password) => {
  localStorage.setItem('isLoggedIn', '1');
  setIsLoggedIn(true);
};
```

로그인하고 개발자 도구에서 Application > Local Storage 들어가면

![스크린샷 2023-07-05 오후 6.00.28.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80cce45a-29a0-437d-8ba7-9b9f9fa5247e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-05_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.00.28.png)

이제 새로고침하고 들어가면 로컬스토리지에 저장되어 있는지 확인되면 로그인 되게 하는것

localStorage.getItem(’식별자’)

→하지만 이렇게 하면 해당하는 함수를 다시 실행하게 되고 무한루프에 빠질 수도 있다.

```jsx
const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
if (storedUserLoggedInInformation === '1') {
  setIsLoggedIn(true);
}
```

그래서 useEffect 를 써서 언제 실행될지 제어한다.

의존성배열이 없다면 처음에 컴포넌트가 렌더링될 때 한 번만 실행

의존성배열이 있다면 의존성배열이 바뀔 때마다 실행

로그인은 처음에만 한 번 실행해서 확인하면 되기 때문에 의존성배열 없이

```jsx
useEffect(() => {
  const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
  if (storedUserLoggedInInformation === '1') {
    setIsLoggedIn(true);
  }
}, []);
```

데이터 가져오기는 사이드이펙트, UI와 데이터 저장소 접근 자체는 관련이 없다.

로그아웃 시 localStorage.removeItem(’식별자’)해서 제거

```jsx
const logoutHandler = () => {
  localStorage.removeItem('isLoggedIn');
  setIsLoggedIn(false);
};
```

### 121. useEffect&종속성

사이드이펙트로 사용하는 함수를 의존성 배열에

```jsx
useEffect(() => {
  setFormIsValid(
    enteredEmail.includes('@') && enteredPassword.trim().length > 6
  );
}, [enteredEmail, enteredPassword]);

const emailChangeHandler = event => {
  setEnteredEmail(event.target.value);
};

const passwordChangeHandler = event => {
  setEnteredPassword(event.target.value);
};
```

useEffect를 이용한 유효성 검사는 로컬 저장소로 작업하지 않는, http 리퀘스트를 보내지 않는다.

대신 리액트 state를 업데이트하고 있는 것

키 입력의 응답으로 확인하고 업데이트하는 것도 사이드 이펙트

### 123. useEffect에서 cleanup

처음에 렌더링될 때, sideEffect 함수가 실행되고 그 다음으로 사이드이펙트가 실행되기 전에 cleanup 이 실행

setTimeout()을 설정했다면, 새로운 타이머를 설정하기 전에 마지막 타이머를 지움

clearTimeout()은 브라우저에 내장되어 있는 함수

```jsx
useEffect(() => {
  const identifier = setTimeout(() => {
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  }, 500);

  return () => {
    clearTimeout(identifier);
  };
}, [enteredEmail, enteredPassword]);
```

만약 의존성 빈 배열이라면, 로그인하고 컴포넌트가 DOM에서 제거되면 cleanup함수가 실행

### 125. useReducer()훅 소개

state를 관리하는 거는 useState와 같지만 여러 state가 같이 바뀌거나 더 복잡한 state에 유용

useState() 종종 사용 및 관리가 어려워지거나 오류가 발생하기 쉽다. → 버그 생기기 쉬움

함께 속하는 state가 있는 경우 useReducer를 쓰는 게 좋다.

하나의 state를 호출하는데 또 다른 state를 가져다 쓰는 건 해서는 안 되는 일 → 어떤 경우엔 작동이 안되기도, 제 시간에 처리 안될 수도

### 126. useReducer()훅 사용

```jsx
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
```

state: 최신 상태의 스냅샷

dispatchFn: 상태를 업데이트해주는 스냅샷(액션을 디스패치)

reducerFn : 리액트는 새 액션이 디스패치될 때마다 리듀서 함수 호출하면 이 함수는 리액트가 관리하는 최신의 state스냅샷을 가져온다. 그리고 이 리듀서 함수 실행을 트리거하는 디스패치된 액션을 가져온다. 또 새로운 업데이트된 state를 반환

initialState : 초기 state 설정

initialState : 초기 state를 설정하기 위해 실행해야 하는 함수

예)

useReducer 는 입력값과 유효성을 결합하여 사용할 수 있다.

그리고 전체 폼 state를 관리하는데도 쓸 수 있음

```jsx
const emailReducer = (state, action) => {
  return { value: '', isValid: null };
};

const Login = () => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });
};
```

리듀서함수를 컴포넌트 바깥으로 뺐다.

이 리듀서 함수에는 컴포넌트 함수 내부에 만들어진 어떤 데이터도 필요하지 않기 때문

리듀서 함수는 최신 state스냅샷과 디스패치된 액션을 매개변수로 받음

```jsx
setFormValid(
  emailState.value.include('@') && event.target.value.trim().length > 6
);
```

```jsx
const validateEmailHandler = () => {
  setEmailIsValid(emailState.isValid);
};
```

dispatchFn 는 안에 객체로 보통 들어가는데 어떤 식별자를 갖고 있는 어떤 필드를 가진 객체, 필드는 대부분 명명된 타입

type 과 추가로 페이로드(전송할 데이터) 작성할 수 있다.

**입력값**

```jsx
dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
```

위와 같은 내용을 이메일 인풋값을 입력해서 저장하는 함수에 쓴다.

‘USER_INPUT’처럼 대문자로 써준 건 일종의 규약 같은, 어떤 일이 일어나는지 설명해줌

사용자의 입력한 내용을 저장하고 싶으니까 페이로드 추가한 것

그 다음에 액션을 가져다 쓸 수 있는데

```jsx
const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {return {value: action.val, isValid: action.val.includes('@')}
	return {value: '', isValid: false};
}
```

**유효성 검사**

```jsx
dispatchEmail({ type: 'INPUT_BLUR' });
```

유효성 검사하는 함수에 기입

type 말고는 따로 추가할 데이터 없음

```jsx
const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {return {value: action.val, isValid: action.val.includes('@')}
	if (action.type === 'INPUT_BLUR') {return {value: state.value, isValid: state.value.includes('@')};}
	return {value: '', isValid: false};
}
```

유효성을 검사할 때 value가 최신인 상태로 놔두길 원하기 때문에 state.value

### 127. useEffect() 수정

```jsx
useEffect(() => {
  const identifier = setTimeout(() => {
    setFormIsValid(emailState.isValid && passwordState.isValid);
  }, 500);

  return () => {
    clearTimeout(identifier);
  };
}, [emailState, passwordState]);
```

이메일과 패스워드 값이 바뀔 때마다 실행되는데 너무 자주 실행되는

수정해보기

```jsx
const { isValid: emailIsValid } = emailState;
const { isValid: passwordIsValid } = passwordState;
```

객체구조분해할당하는데 별칭을 만들어 사용할 수 있음

### 129. useState() 와 useReducer()

useState: 주요 state, 개별의 간단한 몇종류 안되는 state

useReducer: 복잡한 state로직

### 130. 리액트 Context(Context API) 소개

props를 전달하기만 하고 실제 해당 컴포넌트에서는 안 쓰이는 경우

→앱이 커질수록 불편해짐

따라서 이렇게 하는 대신 props를 실제로 필요한 데이터를 부모로부터 받는 컴포넌트에서만 사용할 수 있도록, 부모는 데이터를 관리하지도 필요하지도 않기 때문

→컴포넌트 전체에 쓸 수 있는 리액트에 내장된 내부적인 state 저장소가 있음 ⇒ React Context

**React Context**

컴포넌트 전체 state 저장소에서 액션을 트리거할 수 있음

그 다음 관련된 컴포넌트에 직접 전달할 수 있음

긴 프롭 체인을 만들지 않고

src 폴더 안에 store/state 폴더를 만든다

auth-context.js

컴포넌트를 만드는 게 아니므로 표기법 달리 하는 게 좋음

React.creatContext()

기본 컨텍스트를 만든다. 기본 state로 그냥 텍스트를 써도 됨

```jsx
import React from 'react';

React.createContext('my state!');
```

근데 대부분의 경우 객체이다.

```jsx
const AuthContext = React.createContext({ isLoggedIn: false });

export default AuthContext;
```

컴포넌트는 아니지만 컴포넌트를 포함할 객체이기 때문에 AuthContext

1)먼저 리액트에게 컨텍스트 있다고 알려줘야 한다.

컴포넌트들은 그것에 접근권한이 있어야 한다.

해당 컨텍스트를 리스닝할 수 있어야 한다.

이 컨텍스트가 필요한 컴포넌트 파일에 가서 감싸줘야 한다.

```jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

...

  return (
    <React.Fragment>
      <AuthContext.Provider>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
```

하지만 AuthContext자체가 컴포넌트 되지 않을 것

AuthContext.Provider 는 컴포넌트로 모든 컴포넌트 자식들을 포함해서 해당 컨텍스트에 접근할 수 있다.

점으로 속성에 접근할 수 있다.

그 다음 리스닝을 해야 하는데 두 가지 방법이 있음

AuthContext 소비자 또는 리액트 훅을 이용해서

일반적으로 리액트 훅을 사용

먼저 소비자는

<AuthContext.Consumer>

```jsx
const Navigation = props => {
  return (
    <AuthContext.Consumer>
      <nav className={classes.nav}>...</nav>
    </AuthContext.Consumer>
  );
};

export default Navigation;
```

소비자는 자식을 가지고, 사실 함수

인수로 컨텍스트의 데이터를 가져온다.

return 엔 JSX 코드가 온다. 해당 데이터에 접근할 수 있는 코드

여기선 nav의 모든 코드

```jsx
<AuthContext.Consumer>
  {ctx => {
    return <nav className={classes.nav}>...</nav>;
  }}
</AuthContext.Consumer>
```

그러면 내부 코드는 props로 적었던 게 ctx 됨

```jsx
{
  ctx.isLoggedIn && (
    <li>
      <a href="/">Users</a>
    </li>
  );
}
```

그치만 기본값이 있으면 Consumer 는 Porvider 가 필요하지 않음

Provider 에서 속성으로 value={기본값}을 적어주면 됨

```jsx
<AuthContext.Provider value={{isLoggedIn: false}}>
```

Provider 쓰고 있는 컴포넌트에서 isLoggedIn state를 관리하고 있기 때문에 isLoggedIn으로 밸류값을 넣을 수 있다.

이 밸류 객체는 isLoggedIn 이 변경될 때마다 리액트에 의해 업데이트.

이렇게 하면 Consumer 하는 모든 컴포넌트에 이 value 가 전달된다.

```jsx
<AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
```

이렇게 해서 props를 전달하지 않고도 쓸 수 있지만, 함수를 쓰고 코드를 return 하는 건 안 좋다.

다른 방법으로는, useContext 훅

```jsx
useContext();
```

컨텍스트에세 사용하려는 컨텍스트 포인터를 전달한다.

```jsx
useContext(AuthContext);
```

이렇게 하면 컨텍스트 value를 전달할 수 있다.

```jsx
const ctx = useContext(AuthContext);
```

```jsx
return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        ...
    </nav>
)
```

로그아웃 할 때의 프롭스도 그대로 남아있는데 Provider 에서 value 에 추가해줄 수 있다.

로그아웃 함수가 동작하도록

문자열이나 객체로 전달할 수 없지만 함수는 전달할 수 있다

```jsx
<AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
```

```jsx
{
  ctx.isLoggedIn && (
    <li>
      <button onClick={ctx.onLogout}>Logout</button>
    </li>
  );
}
```

대부분 프롭스를 전달해서 사용

프롭스는 컴포넌트를 구성하고 그것들을 재사용할 수 있도록 하는 매커니즘이기 때문

때문에 많은 컴포넌트를 통해 전달하고자 하는 것이 있을 때, 아니면

매우 특정적인 일을 하는 (네비게이션 같은) 컴포넌트로 전달하는 경우에만 컨텍스트를 사용하는 게 좋다.

### 134. 사용자 정의 컨텍스트 제공자 구성요소 빌드 및 사용

기본 컨텍스트에 나중에 value 값으로 들어갈 함수를 추가해도 좋다.

더미로

왜냐하면 IDE환경에서 자동완성을 더 좋게 하기 위해

```jsx
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});
```

컨텍스트를 독립적으로 실행할 수 있는 파일로 만들 수 있다.

모든 컴포넌트는 기본적으로 하나의 임무만 갖기 때문에 이렇게 분리해서 쓰는 방식을 선호하기도 함

```jsx
//auth-context.js
import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
```

```jsx
//index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
```

```jsx
//App.js
function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
```

```jsx
//Home.js
const Home = props => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
```

### 135. Context 제한 사항

자주 바뀌는 state가 있으면 쓰지 않는 게 좋음→그래도 컨텍스트를 쓰고 싶은 경우엔? 이런 경우는 리덕스를

### 136. “Hooks의 규칙” 배우기

1. 리액트 훅은 리액트 함수로 use 로 시작한다.

- 훅은 리액트 함수 컴포넌트 또는 커스텀 훅에서만 사용할 수 있다.

  2)리액트 훅은 리액트 컴포넌트 함수 또는 커스텀 훅 함수의 최상위 수준에서만 호출할 수 있다.

- 중첩함수나 블럭문에서 호출하지 말 것

3. useEffect() 에서는 항상 내부에 쓰인 것들을 의존성 배열에 추가해야 한다.

### 137. 입력 컴포넌트 리팩토링

```jsx
import React from 'react';
import classes from './Input.module.css';

const Input = props => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
```

```jsx
<Input
  type="email"
  id="email"
  label="E-Mail"
  isValid={emailIsValid}
  value={emailState.value}
  onChange={emailChangeHandler}
  onBlur={validateEmailHandler}
/>
```

### 139. forword Refs 알아보기

useImperativeHandle(,() ⇒ {return {사용할 모든 데이터}})

명령적으로 사용할 수 있게 해줌

일반적인 state프롭 관리를 통하지 않고 부모 컴포넌트의 state를 통해 컴포넌트를 제어하지 않고 프로그래밍적으로 컴포넌트에서 무언가를 직접 호출하거나 조작해서 사용하게 해주는 것

하지만 이건 잘 사용하지 않음

만약 외부 ref를 사용한다면

```jsx
const Input = React.forwardRef((props, ref) ⇒ {

const inputRef = useRef();

const activate = () ⇒ {
inputRef.current.focus();
};

useImperativeHandle(ref, () ⇒ {
return {focus: activate}
})

return (
<input ref={inputRef}>
)

})
```

컴포넌트 내부에서 쓰인 Input컴포넌트의 속성으로 ref 가 무언가에 바인딩하면 Input 컴포넌트 함수에서는 매개변수로 들어간 ref가 연결을 설정한다.

이것만으로 작동하진 않고 한번 더 감싸주는데 두번쩨 인수인 ref를 활성화하기 위해 React.forwardRef()로 감싸준다.

ref를 전달했기 때문에 사용되는 컴포넌트에서도 ref 프롭을 사용할 수 있다.

ref 프롭을 노출하거나 ref와 함께 제어하거나 사용할 수 있다.

이렇게 쓰는 경우는 피하는 게 좋지만 포커싱이나 스크롤에 사용하면 좋음
