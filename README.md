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
