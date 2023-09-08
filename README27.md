# React | React 완벽가이드 with Redux, Next, TypeScript | Section27


https://github.com/pajiyeee/react-complete-guide/assets/124162355/f7ed2b52-3133-4699-9e45-a8ea9de40353


**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview

## **Section27 : 리액트 + 타입스크립트**

타입스크립트를 CRA이용해서 설치

https://create-react-app.dev/docs/adding-typescript

```jsx
npx create-react-app my-app --template typescript
```

### 425. 타입스크립트 왜?

자바스크립트보다 더 확장된 프로그래밍 언어

- 정적 타입을 갖는다.
  - 자바스크립트는 동적 타입
    예) 두 개의 매개변수를 받아 덧셈을 해서 값을 반환하는 함수가 있을 때, 숫자뿐 아니라, 문자도 됨
    →이게 문제되지 않아 보이지만, 대규모 플젝에선 많은 사람들이 동일한 코드 베이스에서 작업할 거기 때문에, 함수나 객체를 의도치 않은 방식으로 사용하게 될 것
    →타입스크립트가 필요한 이유, 코드를 실행하기 전에 정해진 타입으로 안 쓰면 에러를 나타내줌

### 427. 타입스크립트 기본 구성

```jsx
//Primitives : number, string, boolean

let age: number;
age = 12.1;

let username: string;
username = "Jiyeoun";

let isStudent: boolean;
isStudent = true;
```

```jsx
//More Complex types

let hobbies: string[];
//문자열 배열만 저장
hobbies = ['Sports', 'Cooking'];

let person = {
  name: string;
	age: number;
};
//person 이 어떤 객체인지 설명하면 됨
person = {
	name: 'Jiyeoun',
	age: 32
}

let people: {
  name: string;
	age: number;
}[];
//person객체 형태의 배열을 만들면
```

타입으로 any를 쓰면 타입에 대해 알려줄 게 없다고 말하는 것.

어떤 값이든 저장

### 429. 타입 추론

```jsx
//Type Inference
let course = "React -complete";
course = 12341; // 에러
```

타입 지정할 때 위와 같이 변수를 만들고 바로 초기화하면, 타입스크립트는 할당된 값의 자료형을 볼 것

그리고 변수에 저장된 값이 문자열이라는 것을 알게 됨.

그럼 해당 값이 이 변수의 타입으로 여기고 사용하는 것.

그래서 다른 타입의 값을 할당하려고 하면 에러 생기게 함.

→ 불필요하게 타입 지정하지 않고 이런식으로 타입 추론하게 하는 방식을 권장!

### 430. Union

하나의 타입만 지정할 때도 있지만 여러 타입을 지정할 때도 있다.

```jsx
let course: string | number = "React-Complete";
course = 12312; //에러 사라짐
```

### 431. Type Aliases

어느 시점 반복해서 정의하는 일이 많아짐.

Base 타입을 만들어 복잡한 타입을 정의해 두고, 그 타입 별칭을 사용한다.

```jsx
type Person = {
  name: string,
  age: number,
};

let person: Person;
let people: Person[];
```

### 432~433. 함수 및 함수유형

1)타입을 가진 함수

2)제네릭(generic) 타입

1)타입을 가진 함수

반환되는 값의 타입을 매개변수 뒤에서 추론 또는 직접 지정할 수 있다. 하지만 꼭 지정할 필요 없다면 알아서 추론하기 때문에 정의하지 않는 게 낫다.

```jsx
fuction add(a: number, b:number):number{
	return a+b;
}
```

특별한 반환 타입

```jsx
fuction printOut(value: any) {
	console.log(value);
}
//any 타입으로 지정한 이유는 콘솔에 출력하는 것뿐이라
```

이럴 때 void 를 쓴다.

null 이랑 undefined 랑 비슷하나 항상 함수와 결합해서 사용한다는 특징이 있음.

void 는 함수에 반환 값이 없다는 걸 뜻함.

```jsx
fuction printOut(value: void) {
	console.log(value);
}
```

2)제네릭(generic) 타입

```jsx
//Generics

function insertAtBegin(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBegin(demoArray, -1);
```

any로 정의해두면, 타입스크립트는 demoArray에 숫자만 들어있는 걸 인지 못함.

그렇다고 숫자배열 타입으로 설정할 수 없음. 다른 타입의 배열이 쓸 수도 있기에.

그래서 제네릭 구문 사용

```jsx
//Generics

function insertAtBegin<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBegin(demoArray, -1);
```

T는 Type

T타입의 배열과 밸류를 갖겠다.

→ 타입스크립트는 인수의 정확한 값을 살펴봐야 한다는 걸 알게 됨

배열과 밸류가 같은 타입을 가져가야 한다고 알려주는 것

(유연성+ 안정성)

### 435. 타입스크립 프로젝트

package.json

@types 패키지는 타입표기에 대한 번역기 역할

### 436~437. Props

**React.FC**

@types/react 리액트패키지에 정의된 타입

```tsx
import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  return <ul>{props.items}</ul>;
};

export default Todos;
```

React.FC타입으로 지정해주면서 이 함수가 함수형 컴포넌트로 동작한다는 걸 명확히 함

(Functional Component)

이런 제네릭 타입으로 인해 만든 컴포넌트에 children 프로퍼티 같은 기본적인 Props 를 합치는 것

React.FC 뒤에 홑화살괄호’<>’를 붙여 내부적으로 사용되는 제네릭 타입에 구체적인 값을 집어넣음

→ React.FC 에 의해 정의된 타입 T

→ 이렇게 한 이유는 타입스크립트가 제네릭 타입을 추론하게 둘 수 없다.

(매개변수를 넣고 제네릭 함수를 호출해서 해댕 값의 타입을 추론하도록 두는 게 아니라 함수를 정의하고 타입스크립트에게 이 함수를 내부적으로 어떻게 처리해야 하는지 알려주고 싶기 때문)

→추가한 props 를 받아서 모든 함수형 컴포넌트가 갖고 있는 children 프로퍼티 같은 기본적인 Props 들과 합칠 수 있도록

→<{}>홑화살구문은 제네릭 타입을 만드는 구문으로 추가해줘서 FC라는 제네릭 타입 내부의 기능을 밖으로 꺼낸 것

→props.items 로 쓸 수 있는 건 기본 props객체 정의에 추가했기 때문

다시 정리하면,

리액트와 타입스크립트로 함수형 컴포넌트를 만들려면 React.FC타입을 함수형 컴포넌트의 상수 옆에 기입

그리고 그 옆에 홑화살구문을 넣어 안에 필요한 형태의 props(프로퍼티 객체의 타입) 를 정의

### 438. 데이터 모델 추가

타입을 지정할 때 class를 생성하면서 지정해줄 수 있다.

```tsx
class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}

export default Todo;
```

```tsx
import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const todos = [new Todo("todo1"), new Todo("todo2")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
```

```tsx
import React from "react";
import Todo from "../models/Todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
```

### 440. useRef작업

```jsx
const todoTextInputRef = useRef < HTMLInputElement > null;

const enteredText = todoTextInputRef.current?.value;
```

물음표는 개발툴이 자동적으로 붙인 것

→ 레퍼런스에 실행 시점에서 아직 값이 설정되지 않았을 수도 있어서 붙인다.

→타입스크립트에게 일단 값에 접근해보고 접근이 가능하다면 그 때, 입력된 값을 가져오라는 것

만약에 개발자로서 값에 확신이 든다면 값이 null이 아니라는 걸, 래퍼런스와 요소가 연결되어 있다는 것을 알고 있다면 물음표 대신 느낌표 사용할 수 있다.

```jsx
const enteredText = todoTextInputRef.current!.value
```

타입스크립트에게 이 값이 null 일 수도 있지만, 실행 시점엔 절대 null이 아니라고 알려주는 것

이렇게 하면 추론한 타입에 string | undefined 가 아닌 string이 나온다.

### 443. useState작업

```jsx
const [todos, setTodos] = useState<Todo[]>([])
```

처음엔 빈 배열로 초기화하고, Todo[]를 관리하며, 나중에 배열에 항목을 추가할 때는 반드시 Todo타입이어야 함을 알려줌

제네릭을 안 써주면 Never 타입으로 무조건 빈배열이어야 한다고 나옴.

```tsx
import React, { useState } from "react";
import Todo from "./models/Todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (newText: string) => {
    const newTodo = new Todo(newText);
    const updatedTodo = setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
    return updatedTodo;
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
```

```tsx
import React, { FormEvent, useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const inputHandler = (event: FormEvent) => {
    event.preventDefault();
    const newTodoText = todoInputRef.current!.value;
    if (newTodoText.trim().length === 0) {
      return;
    } else {
      props.onAddTodo(newTodoText);
    }
  };

  return (
    <form onSubmit={inputHandler}>
      <label htmlFor="text">Write Todo!</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
```

React.FC<{ onAddTodo: (text: string) => void}>로 함수 프롭스를 전달 받아쓰는 것

### 445.투두항목 제거하기

```tsx
<TodoItem
  key={item.id}
  text={item.text}
  onRemoveItem={props.onRemoveItem.bind(null, item.id)}
/>
```

어떤 걸 없앨지 알려줘야하는데 이 대 자바스크립트 메서드인 bind()를 사용

이 메서드를 실행하면 실행할 함수를 미리 설정할 수 있다.

먼저 인수로 첫 번째는 이것이 호출될 함수 안에서 무엇을 가르키는지 지정,

여기선 값이 중요하지 않으니까 null,

두 번째 인수로는 함수가 매개변수로 받음

### 446. Context API

강의대로 따라서 했는데 props.children에서

ERROR in src/App.tsx:7:6
TS2559: Type '{ children: Element[]; }' has no properties in common with type 'IntrinsicAttributes'.
5 | function App() {
6 | return (

> 7 | <TodosContextProvider>
> | ^^^^^^^^^^^^^^^^^^^^
> 8 | <NewTodo />
> 9 | <Todos />
> 10 | </TodosContextProvider>

ERROR in src/store/todos-context.tsx:39:14
TS2339: Property 'children' does not exist on type '{}'.
37 | return (
38 | <TodosContext.Provider value={contextValue}>

> 39 | {props.children}
> | ^^^^^^^^
> 40 | </TodosContext.Provider>
> 41 | );
> 42 | };

이런 에러가 발생했다.

children에 대해서 React.ReactNode로 타입을 지정하고 TodosContextProvider 컴포넌트에서 쓸 수 있게 타입 지정한 것을 제네릭으로 정의해줌

```tsx
import React, { useState } from "react";
import Todo from "../models/Todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type TodoContextChildrenObj = {
  children: React.ReactNode;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<TodoContextChildrenObj> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (newText: string) => {
    const newTodo = new Todo(newText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeItemHandler = (itemId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== itemId));
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeItemHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
```
