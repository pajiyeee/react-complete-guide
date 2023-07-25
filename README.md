# React | React 완벽가이드 with Redux, Next, TypeScript | Section13

**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview

## **Section13 : 클래스 컴포넌트**

### 174. 퍼스트 클래스 기반 컴포넌트 추가하기

리액트가 아닌 자바스크립트에 빌드하는 것

모던 자바스크립트는 클래스를 지원한다.

1. class 예약어를 입력

- class 에는 원하는 만큼 메소드를 여러 개 추가할 수 있다.
- render()메소드는 리액트에 필요한 특정 메소드, 리액트가 jsx코드 안에 컴포넌트가 사용된 것을 확인하면 그 때 호출되는 메소드
- render 메소드는 props 를 받지 않는다.
- Component를 import 하여 extends Component를 함
  → 예약어 this 를 가지고 {this.props.name}식으로 쓸 수 있게 해줌

함수형 컴포넌트

```jsx
const User = props => {
  return <li className={classes.user}>{props.name}</li>;
};
```

클래스형 컴포넌트

```jsx
import { Component } from 'react';

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
```

### 175. State 및 이벤트 작업

클래스의 매소드를 정의하는 방법에는 여러가지 있지만 보편적으로 쓰는 형태

```jsx
class Users extends Component {
  toggleUsersHandler = () => {
    setShowUsers(curState => !curState);
  };

  render() {
    return (
      <div className={classes.users}>
        <button onClick={toggleUsersHandler}>
          {showUsers ? 'Hide' : 'Show'} Users
        </button>
        {showUsers && usersList}
      </div>
    );
  }
}
```

state관리를 함수형 컴포넌트에서는 useState를 사용하여 숫자 문자열 불리언 값 등 어느 형태든 될 수 있지만

클래스형 컴포넌트에서는 객체 형태여야 함

```jsx
class Users extends Component {
  constructor() {
    this.state = { showUsers: true };
  }

  toggleUsersHandler = () => {
   ...
  };

  render() {
	 ...
  }
}
```

함수로 사용하여 상태를 변경하고자 할 떄는 this.setState()메서드를 이용한다.

- 메서드 안에는 항상 객체 형태
- 기존 상태를 오버라이드하지 않고 리액트가 현재 존재하는 상태와 여기에 전달하려는 객체를 결합시킨다.

```jsx
toggleUsersHandler = () => {
  this.setState({});
};
```

```jsx
toggleUsersHandler = () => {
  this.setState(curState => {
    return { showUsers: !curState.showUsers };
  });
};
```

this 예약어가 쓰여야 함

어떠한 리액트 훅도 안 쓰인다.

```jsx
import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  constructor() {
    this.state = { showUsers: true, more: 'Test' };
  }

  toggleUsersHandler = () => {
    this.setState(curState => {
      return { showUsers: !curState.showUsers };
    });
  };

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
```

### 176. 클래스형 컴포넌트 수명 주기

클래스형 컴포넌트는 리액트 훅을 사용할 수 없다.

그래도 생명주기는 존재함

모든 컴포넌트는 생명 주기를 가진다.

클래스컴포넌트에 쓸 수 있는 생명주기 매소드는

componentDidMount()메서드

- render와 같은 매소드로 리액트에서 임포트해온
- (컴포넌트가 평가되고 DOM에 렌더링될 떄)컴포넌트가 마운트된 직후에 이 메소드를 호출
- 빈 의존성 배열이 있는 useEffect를 사용한 것과 같다.

componentDidUpdate()메서드

- 컴포넌트가 갱신되면 호출
- 무언가 상태 같은 것이 변경되거나 하면 컴포넌트가 재평가, 재렌더링되면 그 때 호출
- 의존성 배열이 있는 useEffect와 동일

componentWillUnmount()

- 컴포넌트가 DOM에서 삭제되기 직전에 호출
- useEffect()에 있는 cleanup함수와 같다. → cleanup함수는 effect함수가 다시 호출되기 전에 호출
- 항상 DOM으로부터 삭제되기 전에 다시 호출

까지가 가장 보편적이고 가장 중요한 메소드

### 178. 클래스 컴포넌트 및 컨텍스트

useContext 대신에 쓸 수 있는 것

1. Context.consumer
2. static contextType = UsersContext

### 180. 오류 경계

클래스형 컴포넌트에서 쓰이는

```jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  componentDidCatch() {}
  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
```

```jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

처리해야 할 오류가 발생 가능한 어떤 컴포넌트든 감싸면 된다.

```jsx
<ErrorBoundary>
  <Users users={this.state.filteredUsers} />
</ErrorBoundary>
```
