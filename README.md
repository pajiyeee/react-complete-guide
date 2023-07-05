# React | React 완벽가이드 with Redux, Next, TypeScript | Section 9

**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview

## **Section 9: 프래그먼트 작업, Portals & "Refs"**

### 110. JSX 제한사항 및 해결방법

**제한**

1. JSX는 루트 JSX요소가 한 개여야 한다.

→ 값을 반환하거나 저장하려면 반드시 그 값은 JSX요소가 1개

**해결**

1)인접한 요소들은 하나의 태그로 감싸 하나로 반환

2)reurn 내부를 네이티브 자바스크립트 배열로 반환하기, 쉼표 넣기

→문제 : 리액트는 JSX의 배열을 다루는 방법은 알고 있어 JSX요소 배열을 반환할 수 있지만

하지만 그렇게 했을 때 경고가 나온다. 배열로 할 때마다 리액트는 모든 요소에 대한 키를 필요로 함. 키 프롭으로 해결할 수 있겠지만 태그 하나로 감싸는 것보다 더 손이 많이 감

**<div> Soup**

하나로 감싸는 태그를 div 로 한다면 문제가 있다.

불필요한 div 또는 기타 요소가 많이 있을 수 있다.

CSS중첩 선택자에 있어서도 문제 있겠지만

궁극적으로 너무 많은 HTML 요소를 렌더링하면 애플리케이션이 느려질 것

→불필요한 내용을 렌더링하는 것은 일반적으로 프로그래밍에서 좋은 생각이 아님

**Wrapper 컴포넌트**

따로 js 파일에 Wrapper 컴포넌트를 만들어서 해결할 수 있다.

단순히 children 만 반환

```jsx

const Wrapper = props => {
  return props.children;
};
export default Wrapper;/components/Helpers/Wrapper.js
```

_./components/Helpers/Wrapper.js_

이 기능을 리액트와 함께 지원하고 있다.

**<React.Fragment> or <>**

빈 Wrapper 를 반환

또 다른 기능인 **React Portals** 도 비슷한 일을 한다.

깔끔한 코드를 만들 수 있음

**Modal**

문제

모든 종류의 오버레이 관련 컴포넌트(모달창, 사이드 드로어…) 에서 일어나는 문제

실제 돔에 들어가는 내용은 div로 감싸진 코드

DOM에 렌더링된 모달 코드는 작동은 하지만 의미적인 관점이나 간결한 HTML구조를 갖췄는지의 관점으로 보면 좋지 않다.

왜냐하면 기본적으로 모달은 페이지 위에 오버레이되어 나타나는데, 만약 다른 HTML 코드 안에 중첩되어 있다면 기술적으로 스타일링 덕분에 작동해도 좋은 코드나 좋은 구조는 아니다.

오버레이 내용이 중첩되어 있을 때, 스크린 히더가 렌더링되는 HTML코드를 해석할 때 일반적인 오버레이라고 인식하지 못할 수도 있다.

그리고 HTML 코드 안 깊은 곳에 자리잡아 이 모달이 다른 모든 내용에 대한 오버레이인지 명확하지 않다.

접근성 측면에서도 안 좋음

해결

모달 HTML내용을 일반적인 곳이 아니라 다른 곳에서 렌더링하면

**리액트 포털**을 사용하면 렌더링된 HTML코드는 모달 내용이 렌더링되는 곳에서 분리되게 할 수 있다.

**React Portals**

1)컴포넌트를 이동시킬 장소 필요

일단, 그 장소를 표시하기 위해서는 index.html 로 가서 다른 <div id=”… “>를 추가

→루트를 여러 개 만들어서 여러 종류의 컴포넌트가 그 루트로 찾아가게 함

**before**

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
```

**after**

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="backdrop-root"></div>
  <div id="overlay-root"></div>
  <div id="root"></div>
</body>
```

2)그런 다음 컴포넌트에게 그 곳에 포털을 가져야 한다고 알려줘야 함

해당하는 컴포넌트에서 컴포넌트들을 분리해서 그 컴포넌트들을 포함한 컴포넌트 밖으로 뺀다.

그리고 포함하고 있는 컴포넌트 내부에는 reac-dom 라이브러리에서 ReactDom을 import 하여 코드를 넣는다.

ReactDom의 createPortal 메소드를 호출하여 2개의 인수를 갖는데,

첫 번쨰는 렌더링 되어야 하는 리액트 노드고, 두 번째는 이 요소가 렌더링되어야 하는 실제 DOM 컨테이너 가리키는 포인터를 넣는다.

이미 렌더링된 기존 애플리케이션 내부로 포털시키는 것

**before**

```jsx
const ErrorModal = props => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
```

**after**

```jsx
...
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
			...
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
```

React-dom 은 리액트에서 웹브라우저로 가져오기 위해 만든 로직들과 기능을 DOM에서의 작업들과 호환되도록 해주는 라이브러리

→리액트용 어뎁터
