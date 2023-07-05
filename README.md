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
