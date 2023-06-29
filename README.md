#React | React 완벽가이드 with Redux, Next, TypeScript | Section ~4

**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview

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

### **let & const**

`let` 에 대해 더 읽어보기: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

`const`에 대해 더 읽어보기:: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

`let` 과 `const` 는 기본적으로 `var` 를 대체합니다. 여러분은 `var` 대신 `let` 을 사용하고, `var`  대신 `const`를 사용하게 됩니다. 만약 이 "변수"를 다시 할당하지 않을 경우에 말이죠 (따라서 효과적으로 constant로 변환합니다).

### 13. 화살표 함수

키워드 function 을 생략하여 더 짧게 쓸 수 있었다

자바스크립트의 this 의 많은 이슈를 해결해준다.

키워드 this 가 항상 정의한 객체를 나타내고, 실행 중 갑자기 바뀌지 않을 것

함수구문이 짧다면 return {} 를 생략하고 작성할 수 있음

\***\*ES6 Arrow Functions\*\***

더 읽어보기: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Arrow function은 JavaScript 환경에서함수를 생성하는 또 다른 방법입니다. 더 짧은 구문 외에도 `this` 키워드의 범위를 유지하는데 있 이점을 제공합니다 ([여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this)를 보세요).

Arrow function 구문은 낯설게 보일 수 있으나 사실 간단합니다.

`1. function callMe(name) { 
2.     console.log(name);
3. }`

또한 다음과 같이 작성할 수도 있습니다:

`1. const callMe = function(name) { 
2.     console.log(name);
3. }`

이렇게 됩니다:

`1. const callMe = (name) => { 
2.     console.log(name);
3. }`

**중요:**

**arguments가 없는 경우**, 함수 선언시 빈 괄호를 사용해야 합니다:

`1. const callMe = () => { 
2.     console.log('Max!');
3. }`

**정확히 하나의 argument가 있는 경우**, 괄호를 생략할 수 있습니다:

`1. const callMe = name => { 
2.     console.log(name);
3. }`

**value를 return할 때**, 다음과 같은 숏컷을 사용할 수 있습니다:

`1. const returnMe = name => name`

이것은 다음과 같습니다:

`1. const returnMe = name => { 
2.     return name;
3. }`

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

### **Exports & Imports**

React 프로젝트에서 (그리고 실제로 모든 최신 JavaScript에서), 모듈이라 불리는 여러 자바스크립트 파일들에 코드를 분할합니다. 이렇게 하면 각 file/ 모듈의 목적을 명확하게 하고 관리가 용이하게 합니다.

다른 파일의 기능에 계속 액세스하려면 `export`  (available하게 하기 위해) 및 `import` 엑세스를 확보하기 위해) statements가 필요합니다.

두 가지 유형의 export가 있습니다: **default** (unnamed)와 **named** 입니다.

**default** => `export default ...;`

**named** => `export const someData = ...;`

**default exports**를 다음과 같이 import 할 수 있습니다.

`import someNameOfYourChoice from './path/to/file.js';`

놀랍게도, `someNameOfYourChoice`  전적으로 여러분에게 달려 있습니다.

**Named exports**는 이름으로 import되어야 합니다:

`import { someData } from './path/to/file.js';`

파일 하나는 오직 하나의 default와 무한한 named exports를 가질 수 있습니다. 하나의 default를 같은 파일 내에서 named exports와 믹스할 수 있습니다.

**named exports를 import할 때,** 다음 구문을 이용해 한 번에 모든 named exports를 import할 수 있습니다.

`import * as upToYou from './path/to/file.js';`

`upToYou` 는 모든 exported 변수/함수를 하나의 자바스크립트 객체에 모읍니다. 예를 들어, `export const someData = ...`  (`/path/to/file.js` ) 이와 같이 `upToYou` 에 액세스 할 수 있습니다: `upToYou.someData` .

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

![스크린샷 2023-06-27 오후 9.29.16.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6cce3cf-5513-48ce-aae6-c1b9b0f7d580/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.29.16.png)

### **Classes**

Classes는 constructor 함수와 prototypes를 대체하는 기능입니다. 자바스크립트 객체에 blueprints를 정의할 수 있습니다.

예시:

`1. class Person {
2.     constructor () {
3.         this.name = 'Max';
4.     }
5. }
6.  
7. const person = new Person();
8. console.log(person.name); // prints 'Max'`

위의 예시에서, class뿐 만 아니라 해당 class의 property (=> `name`) 이 정의됩니다. 해당 구문은, property를 정의하는 "구식" 구문입니다. 최신 자바스크립트 프로젝트에서는 (이 코스에서 사용된 것처럼), 다음과 같은 보다 편리한 정의 방법을 사용해 class property를 정의합니다:

`1. class Person {
2.     name = 'Max';
3. }
4.  
5. const person = new Person();
6. console.log(person.name); // prints 'Max'`

메소드를 정의할 수도 있습니다. 다음과 같이 말이죠:

`1. class Person {
2.     name = 'Max';
3.     printMyName () {
4.         console.log(this.name); // this is required to refer to the class!
5.     }
6. }
7.  
8. const person = new Person();
9. person.printMyName();`

혹은 이와 같이 할 수도 있습니다:

`1. class Person {
2.     name = 'Max';
3.     printMyName = () => {
4.         console.log(this.name);
5.     }
6. }
7.  
8. const person = new Person();
9. person.printMyName();`

두 번째 접근 방식은 all arrow function과 같은 이점이 있습니다: `this`키워드가 reference를 변경하지 않습니다.

class 사용시 **inheritance**를 사용할 수도 있습니다.

`1. class Human {
2.     species = 'human';
3. }
4.  
5. class Person extends Human {
6.     name = 'Max';
7.     printMyName = () => {
8.         console.log(this.name);
9.     }
10. }
11.  
12. const person = new Person();
13. person.printMyName();
14. console.log(person.species); // prints 'human'`

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

![스크린샷 2023-06-27 오후 9.50.14.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e602b9ec-d10c-4fbe-bca2-092e8c80b507/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.50.14.png)

### **Spread & Rest Operator**

Spread 와 rest operator는 사실 같은 구문을 사용합니다: `...`

맞습니다, 연산자입니다 - 점 세개죠. 이것을 사용해 spread로 사용할지 rest operator로 사용할지 결정합니다.

**Spread Operator 사용하기:**

Spread operator는 배열에서 요소들을 가져오거나 (=> 배열을 요소들의 리스트로 분해) 객체에서 속성을 가져옵니다.

두 가지 예시가 있습니다:

`1. const oldArray = [1, 2, 3];
2. const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];`

객체에 spread operator를 사용한 예시입니다:

`1. const oldObject = {
2.     name: 'Max'
3. };
4. const newObject = {
5.     ...oldObject,
6.     age: 28
7. };`

그러면 `newObject`는 다음이 될 것입니다.

`1. {
2.     name: 'Max',
3.     age: 28
4. }`

sperad operator는 배열과 객체를 복제하는데 매우 유용합니다. 둘 다  [(primitives가 아닌) reference 유형](https://youtu.be/9ooYYRLdg_g)이기 때문에, 안정적으로 복사를 하는게 어려울 수 있습니다. (복사된 원본에 future mutation 발생 방지). Spread operator로, 객체나 배열의 복사본 (shallow!)을 쉽게 얻을 수 있습니다.

### 18. 구조분해할당

Destructuring

배열의 원소나 객체의 프로퍼티를 추출해서 변수에 저장할 수 있도록 함

원소나 프로퍼티를 하나만 가져와서 변수에 저장

[a, b] = [’Hello’, ‘Max’]

{name} = {name: ‘Max’ age:28}

![스크린샷 2023-06-27 오후 9.57.50.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d29da663-e0f9-40fd-ab04-aa666fef9c1d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-27_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.57.50.png)

### **Destructuring**

Destructuring을 사용하면 배열이나 객체의 값에 쉽게 엑세스할 수 있고 변수에 할당할 수 있습니다.

한 배열의 예시입니다:

`1. const array = [1, 2, 3];
2. const [a, b] = array;
3. console.log(a); // prints 1
4. console.log(b); // prints 2
5. console.log(array); // prints [1, 2, 3]`

다음은 객체의 예시입니다:

`1. const myObj = {
2.     name: 'Max',
3.     age: 28
4. }
5. const {name} = myObj;
6. console.log(name); // prints 'Max'
7. console.log(age); // prints undefined
8. console.log(myObj); // prints {name: 'Max', age: 28}`

Destructuring은 인자를 가진 함수를 작업할 때 매우 유용합니다. 이 예시를 보시죠:

`1. const printName = (personObj) => {
2.     console.log(personObj.name);
3. }
4. printName({name: 'Max', age: 28}); // prints 'Max'`

여기서, 함수내 name만을 print하고 싶지만 함수에 완전한 person 객체를 보내고 있습니다. 당연히 이것은 문제가 되지 않지만 personObj.name을 이 함수내에서 호출해야만 합니다. 이 코드를 destructuring으로 압축시켜 보겠습니다.

`1. const printName = ({name}) => {
2.     console.log(name);
3. }
4. printName({name: 'Max', age: 28}); // prints 'Max')`

위와 동일한 결과를 얻지만 코드가 줄었습니다. Destructuring을 통해, `name` property를 가져와 `name` 이라는 이름의 변수/인수에 저장하고 함수 본문에서 사용할 수 있습니다.

### 19. 참조형 및 원시형 데이터 타입

number , string, boolean 같은 것은 기본형 자료 타입

재할당하거나 변수를 다른 변수에 저장할 때마다 값을 복사한다

객체와 배열은 참조형 자료 타입으러 만약 재할당한다면 , 값이 아닌 포인터를 복사

그러므로 진짜 복사하고 싶다면 새로운 객체를 생성해서 전체 객체를 복사하는 것이 아니라

프로퍼티를 복사해야한다.

### 20. 배열 함수 새로 고침

map() 옛 배열을 원하는 값의 배열로 반환

### **JS Array functions**

차세대 자바스크립트는 아니지만 중요합니다. 다음과 같은 자바스크립트 array 함수가 있습니다: `map()` , `filter()` , `reduce()`.

많은 React 개념이 (불변의 방식으로) 배열 작업에 의존하기 때문에 제가 그것들을 꽤 많이 사용하는 것을 보게 될 것입니다.

다음 페이지는 어레이 프로토타입에서 사용할 수 있는 다양한 방법에 대한 좋은 개요를 제공합니다. 필요에 따라 이를 클릭하고 지식을 리프레시할 수 있습니다. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

이 코스에서 특히 중요한 사항은 다음과 같습니다:

- `map()` => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- `find()` => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- `findIndex()` => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
- `filter()` => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- `reduce()` => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
- `concat()` => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
- `slice()` => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
- `splice()` => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

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

NodeJS 참고 사항

새로 생성한 React 프로젝트를 실행하는 도중에 **‘digital envelope routines unsupported’** 오류가 발생한다면, 그 이유는 NodeJS 버전 때문입니다.

이 오류가 발생한다면, package.json 파일에서 다음을 교체하십시오.

"start": "react-scripts start"

부분을 아래와 같이 바꿔주세요.

"start": "react-scripts --openssl-legacy-provider start"

그리고

"build": "react-scripts build"

부분을 아래와 같이 바꿔주세요.

"build": "react-scripts --openssl-legacy-provider build"

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

![스크린샷 2023-06-28 오후 3.33.29.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fab97351-5dd9-42da-90c3-186cd04624d5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.33.29.png)

props children 에 있는 css 를 적용하고 싶을 때

원래 클래스네임의 props.className이 추가 되도록 설정

래퍼 컴포넌트를 추출해서 쓰면 수많은 코드 중복을 피하고 다른 컴포넌트를 깔끔하게 유지시켜줌

합성의 또 다른 특징 → 컴포넌트를 결합할 때마다 합성을 이용하는 것

## **Section 4 state, 이벤트**

### 59. 이전 State에 의존하는 state 업데이트

![스크린샷 2023-06-28 오후 6.46.50.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9fdb7fe-0455-45fc-8523-acf7cbe61e39/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.46.50.png)

이런식으로 써도 상관없지만 어쩔땐 적절하지 않다

동시에 수많은 상태 업데이트를 계획한다면, 오래되었거나 잘못된 상태 스냅샷에 의존할 수도 있음

리액트는 이 안에 있는 함수 상태가 가장 최신 상태의 스냅샷이라는 것과 항상 계획된 상태를 염두에 두고 있다는 것을 보장

가장 최신 상태에서 업데이트할 수 있는 안전함을 보장

![스크린샷 2023-06-28 오후 6.53.35.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/729aabdd-6b14-43b3-82af-415787a324ef/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.53.35.png)

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
