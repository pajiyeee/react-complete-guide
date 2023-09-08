
# React | React 완벽가이드 with Redux, Next, TypeScript | Section ~4

**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview



https://github.com/pajiyeee/react-complete-guide/assets/124162355/46a67154-3952-49d9-8aab-8fec34b3739d




## **Section 1**

### 2. **react.js 는 무엇?**

화면전환도 거의 동시에 이루어지고 로딩으로 기다리지 않아도 됨

거의 모바일앱처럼 쓰는 웹사이트, 화면전환이 원활하게 이루어진다.

전통적인 웹사이트는 새로운 html 이 브라우저로 보내면 로딩되는동안 기다려야 했다.

자바스크립트는 개발자드이 브라우저에서 어떤 로직이든 실행 사용자들이 보는 것을 조작

자바스크립트는 DOM 이라는 것을 조작할 수 있는데, DOM을 통해 html 요소들이 화면에 렌더링 되는것

사용자들이 보는 것을 변경할 수 있다. HTML을 변경하지 않고도

리액트는 왜 쓸까?

1)클라이언트 사이드의 자바스크립트 라이브러리로 클라이언트사이드의 자바스크립트 코드를 작성하는데 도움을 준다.

2)웹사이트를 위한 최신의 반응형 사용자 인터페이스를 구축, 복잡한 사용자 인터페이스를 쉽게 만들 수 있도록 함

3)다음 강의에…

### 3. 왜 JavaScript 대신 **react?**

자바스크립트는 간단한 작업에 비해 코등 양이 많아진다.

프로젝트의 크기가 커질수록, 코드를 여러 번 반복하거나 훨씬 어렵고 복잡해진다.

모든 단계를 일일이 작성했던, 명령형 접근 방식(요소생성, 클릭이벤트 추가, 클래스 추가..)

시간이 많이 걸릴 것

리액트는 응용프로그램을 작은 컴포넌트로 분리하여 명확한 테스크를 갖도록하고, 유지보수가 용이하다.

복잡하고 다양한 사용자 인터페이스를 쉽게 구축

고수준의 구문을 제공하여 선언형 방식, 선언형 컴포넌트 중심의 방식으로 코드 작성

### 4. 리엑트로 단일 페이지 애플리케이션(SPA) 구축하기

리액트로 전체 페이지를 전환하는 것이 더 일반적

화면에 보이게 하는 모든 것들과 페이지 전환에도 리액트를 사용한다는 뜻

링크를 클릭하고 새로운 페이지가 로드될 때, 마치 페이지 전환한 것처럼 보이지만

실제로는 서버로부터 새로운 html을 요청하지 않음

대신 화면에 보이는 것들을 변경하기 위해 React 와 자바스크립트를 사용

첫 번쨰 요청 후에 리액트가 화면에 표시되는 내용을 이어 받아 제어하는 싱글 페이지 어플리케이션

### 5. React.js 대안 탐색하기

리액트는 컴포넌트 기반 라이브러리

따라서 내장된 기능이 많지는 않다.

추가로 서드 파티 라이브러리를 설치해야 함

리액트 자체는 컴포넌트에 중점을 맞추고 있기 때문에

앵귤러

컴포넌트 기반 UI 프레임워크

리액트보다 더 많은 내장 기능

처음부터 타입스크립트를 수용

작은 프로젝트엔 과할 수도

문법 또한 조금 다르다.

컴포넌트를 구축

Vue.js

앵귤러와 리액트를 합쳐놓은 것 같은

양 극단 사이에 있다

컴포넌트 기반의 UI 프레임워크

라으터 기능을 포함하여 커뮤니티 의존성 낮음

앵귤러처럼 과부하되지는 않다.

## **Section 2**

### 12. 변수 let 과 const

변수를 생성

var 도 있지만 let 과 const 쓰는 게 좋음

let 은 값을 수정할 수 있는 변수를 선언할 때 사용

const는 한 번 지정하면 절대 변하지 않는 값인 상수를 선언할 때 사용, 새로운 값을 생성할 두 없음


### 13. 화살표 함수

키워드 function 을 생략하여 더 짧게 쓸 수 있었다

자바스크립트의 this 의 많은 이슈를 해결해준다.

키워드 this 가 항상 정의한 객체를 나타내고, 실행 중 갑자기 바뀌지 않을 것

함수구문이 짧다면 return {} 를 생략하고 작성할 수 있음


### 14. Export 와 Import

차세대 자바스크립트에서는 모듈 방식의 코드를 작성할 수 있는 기능이 있어서

여러 개의 파일로 코드를 분할할 수 있다.

코드를 여러 파일로 나누고 html에 올바른 순서로 코드를 가져오기만 하면 된다.

**default export**

export default 키워드를 붙여 객체를 내보내면 import 할 때

import 객체이름 from 파일 경로

**named export**

여러 개를 export 하는 파일은 export 키워드를 붙여 내보내고 import 할 때

특정하게 원하는 것을 가져오기 위해

import {객체이름} from 파일 경로

import {객체이름 as 변경하고 싶은 이름} from 파일경로

import \* as 변경하고 싶은 이름 from 파일 경로 하면 모든 것을 변경하고 싶은 이름으로 가져올 수있다.


### 15. 클래스

클래스는 생성자 함수와 비슷하고

상속은 프로토타입과 비슷하다.

### 16. 클래스, 속성 및 메소드

프로퍼티는 클래스와 객체에 추가되는 변수 같은 것

메소드는 클래스와 객체에 추가되는 함수같은 것

프로퍼티와 생성자 함수를 설정하는 this 구문

프로퍼티

ES6

constructor() {this.myProperty = ‘value’}

ES7

클래스에 바로 프로퍼티를 할당할 수 있다

myProperty = ‘value’

→생성자 함수를 따로 호출하지 않아도 됨

생성자 함수

ES6

myMethod () {…}

ES7

myMethod = () ⇒ {…}

프로퍼티의 값으로 화살표 함수를 사용하기 때문에, this 키워드를 사용하지 않아도 됨

![스크린샷 2023-06-27 오후 9 29 16](https://github.com/pajiyeee/react-complete-guide/assets/124162355/0c841383-4e01-4df3-a68d-db5708ee5693)


### 17. 스프레드 및 나머지 연산자

Spread

배열의 원소나 객체의 프로퍼티를 나누는데 사용

배열이나 객체를 펼쳐 놓음

const newArray = […oldArray,1,2]

const newObject = {…oldArray, newProps:5}

Rest

스프레드와 같은 연산자이지만 약간 다르게 사용

함수의 인수목록을 배열로 합치는데 사용

function sortArgs(…args) {return args.sort()}

sortArgs 는 매개변수를 무제한으로 받음

매개변수로 1개든 몇개를 받든 모두 배열로 통합될 것

그런 다음 매개변수 목록에 배열 메소드를 적용하거나 무엇이든 원하는 편한 방법으로 매개변수를 저장할 수 있다.

![스크린샷 2023-06-27 오후 9 50 14](https://github.com/pajiyeee/react-complete-guide/assets/124162355/70803388-c142-4ff0-b506-f42561484b22)

### 18. 구조분해할당

Destructuring

배열의 원소나 객체의 프로퍼티를 추출해서 변수에 저장할 수 있도록 함

원소나 프로퍼티를 하나만 가져와서 변수에 저장

[a, b] = [’Hello’, ‘Max’]

{name} = {name: ‘Max’ age:28}

![스크린샷 2023-06-27 오후 9 57 50](https://github.com/pajiyeee/react-complete-guide/assets/124162355/effebde8-0b49-4f7a-abeb-3ab382749d97)


### 19. 참조형 및 원시형 데이터 타입

number , string, boolean 같은 것은 기본형 자료 타입

재할당하거나 변수를 다른 변수에 저장할 때마다 값을 복사한다

객체와 배열은 참조형 자료 타입으러 만약 재할당한다면 , 값이 아닌 포인터를 복사

그러므로 진짜 복사하고 싶다면 새로운 객체를 생성해서 전체 객체를 복사하는 것이 아니라

프로퍼티를 복사해야한다.

### 20. 배열 함수 새로 고침

map() 옛 배열을 원하는 값의 배열로 반환

## **Section 3 컴포넌트**

### 25. 컴포넌트? 왜 리엑트는 컴포넌트가 전부라고 하는가?

리액트는 사용자 인터페이스를 구축하는 자바스크립트 라이브러리

리액트를 사용하는 이유는 좀더 간단히 사용자 인터페이스를 구축할 수 있기 때문

꼭 필요하지 않지만 복잡하고 큰 프로젝트를 할 때 사용하기 좋다.

작업을 더 단순하게 하기 위해

컴포넌트란?

리액트는 컴포넌트가 전부

모든 사용자 인터페이스는 컴포넌트로 구성되기 때문

왜 컴포넌트?

재사용 가능 → 반복을 피할 수 있음

우려사항들을 분리할 수있도록 해줌 → 코드베이스를 작고 관리 가능한 단위로 유지할 수 있게 함

### 26. 리액트 코드는 ‘선언적 방식’

컴포넌트는 어떻게 만들어질까?

모든 컴포넌트에서 HTML,CSS, JavaScript를 결합하고

전체 사용자 인터페이스를 구축하기 위해 컴포넌트들을 결합

리액트는 HTML과 자바스크립트,CSS로 구성된 재사용 가능하고 반응하는 컴포넌트를 만들 수 있게 해줌

이런 컴포넌트를 만들기 위해 리액트는 선언적 접근 방식 사용

리액트가 하는 일은 실제 웹페이지에서 어떤 요소가 추가되거나, 삭제되고 업데이트되어야 하는지 해결하는 것

직접 구체적인 DOM을 업게이트하는 지침을 작성할 필요가 없다

리액트나 리액트 컴포넌트로 작업할 때는 최종상태와 어떤 상황에서 어떤 상태가 사용되는지 정의하면 된다.

리액트는 이 모든 작업을 숨어서 처리

### 32. JSX

JSX는 자바스크립트 XML 을 의미

HTML은 XML이라고 할 수 있음

소스에서 코드를 보게 되면 복잡해보이는데 우리가 만든 소스코드 뿐만 아니랑 전체 리액트 라이브러리 소스코드와 전체 리액트 돔 라이브러리 소스 코드를 포함(전체 리액트 패키지 코드)

JSX로 코드를 작성하면 브라우저에서 읽을 수 있도록 변환됨

### 33. JSX 작동방식

컴포넌트는 기본적으로 자체 html요소일 뿐

리액트로 목표 상대를 정의했고 리액트는 실제로 화면에 보이는 것을 업데이트하는 DOM 지시사항들을 생성하고 실행하는 역할

자바스크립트로 작성한다면

자바스크립트와 브라우저가 무엇을 해야하는지 단계별로 정확하게 지시

복잡하고 변경되는 요소들로 인해 복잡한 코드가 됨

리액트는 최종상태를 정의하기만 하면 리액트가 화면에 불러오기 위한 지시사항들을 뒷단에서 생성

### 43. 컴포지션(children props)

예약어

언제나 사용자 지정 컴포넌트에 있는 열고 닫는 태그 사이에 있는 컨텐츠일 것

![스크린샷 2023-06-28 오후 3 33 29](https://github.com/pajiyeee/react-complete-guide/assets/124162355/15894e2f-492e-45a4-adb7-eb06aed0651b)

props children 에 있는 css 를 적용하고 싶을 때

원래 클래스네임의 props.className이 추가 되도록 설정

래퍼 컴포넌트를 추출해서 쓰면 수많은 코드 중복을 피하고 다른 컴포넌트를 깔끔하게 유지시켜줌

합성의 또 다른 특징 → 컴포넌트를 결합할 때마다 합성을 이용하는 것

## **Section 4 state, 이벤트**

### 59. 이전 State에 의존하는 state 업데이트

![스크린샷 2023-06-28 오후 6 46 50](https://github.com/pajiyeee/react-complete-guide/assets/124162355/bf8a3fb5-4448-4b74-b602-92711ecd5e9d)


이런식으로 써도 상관없지만 어쩔땐 적절하지 않다

동시에 수많은 상태 업데이트를 계획한다면, 오래되었거나 잘못된 상태 스냅샷에 의존할 수도 있음

리액트는 이 안에 있는 함수 상태가 가장 최신 상태의 스냅샷이라는 것과 항상 계획된 상태를 염두에 두고 있다는 것을 보장

가장 최신 상태에서 업데이트할 수 있는 안전함을 보장

![스크린샷 2023-06-28 오후 6 53 35](https://github.com/pajiyeee/react-complete-guide/assets/124162355/4d51c249-317a-4481-84e4-6d519431e5dc)


### 60. 양식 제출 처리

브라우저는 폼이 제출될 때마다 웹페이지를 호스팅하고 있는 서버에 요청을 보내기 때문에 페이지가 다시 렌더링 된다. 그래서 event.preventDefault()

### 61. 양방향 바인딩

양방향 바인딩은 폼으로 작업할 때 유용

폼 전송에 따라 사용자의 입력을 모으거나 변경할 수 있게 해주기 때문

```jsx
const titleChangeHandler = event => {
  setEnteredTitle(event.target.value);
};

<input type="text" value={enteredTitle} onChange={titleChangeHandler} />;
```

### 62. 자식 대 부모 컴포넌트 통신 (상향식)

매개변수를 통해서 프롭스를 통해 함수전달

### 63~65. state 상태 끌어올리기

부모에 있는 함수를 자식이 쓰고자 할 때

```jsx
import React from 'react';
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
  const filterChanageHandler = changeYear => {
    console.log(changeYear);
  };

  return <ExpensesFilter onChangeFilter={filterChanageHandler} />;
};

export default Expenses;
```

```jsx
import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = props => {
  const dropdownChangeHandler = event => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter_control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          <option value="2025">2024</option>
          <option value="2024">2025</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
```

부모는 함수를 자식에게 props로 전달하고

자식에서는 함수 안에 함수를 만들어냄



