# React | React 완벽가이드 with Redux, Next, TypeScript | Section15

**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview

## **Section15 : 커스텀 리액트 hook빌드**

### 197. 커스텀 리액트 컴포넌트 Re-Evaluation Hook 함수 생성하기

함수명엔 무조건 use로 시작해야 하는 필수 규칙

⇒ use로 시작해서 리액트가 확인하고 프로젝트 셋업이 함수가 use로 시작하면서

훅의 규칙을 위반한 것이 발견될 때 경고를 보낼 수 있기 때문

함수 컴포넌트를 만들어 재사용하려는 로직을 추가

useState로 상태관리하는 값을 반환한다.

```jsx
import { useEffect, useState } from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return counter;
};

export default useCounter;
```

```jsx
import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
```

조건에 따라 함수가 쓰이게 하려면

```jsx
import { useEffect, useState } from 'react';

const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setCounter(prevCounter => prevCounter + 1);
      } else {
        setCounter(prevCounter => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);
  return counter;
};

export default useCounter;
```

```jsx
import useCounter from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
```

```jsx
import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
```

### 202. 커스텀 훅 http 빌드, 사용, 조정

```jsx
import { useCallback, useState } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error('Request failed!');
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useFetch;
```

함수가 중첩을 피해 함수 밖에 선언되면 그 매개변수를 쓰고 싶을 때 bind()호출 ⇒ 바로 호출하지 않는다.

bind 첫번째 인자로는 실행이 예정된 함수에서 this 예약어를 사용하는 것

두 번째 인자는 호출 예정인 함수가 받는 첫 번째 인자가 된다.

```jsx
const { isLoading, error, sendRequest: sendTaskRequest } = useFetch();

const createTask = (taskText, taskData) => {
  const generatedId = taskData.name; // firebase-specific => "name" contains generated id
  const createdTask = { id: generatedId, text: taskText };

  props.onAddTask(createdTask);
};

const enterTaskHandler = async taskText => {
  sendTaskRequest(
    {
      url: 'https://react-http-b0bc6-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { text: taskText },
    },
    createTask.bind(null, taskText),
  );
};
```

useFetch에서의 data를 taskText 인자로 받게 되는 것
