# React | React 완벽가이드 with Redux, Next, TypeScript | Section14

**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview

## **Section14 : HTTP 요청 보내기(예: 데이터베이스 연결)**

### 187. 비동기/대기 사용하기

promise 메소드에 then 을 재차 활용할 수 있지만 async와 await 라는 다른 문법을 사용할 수도 있다.

함수 앞에 async 예약어를 추가하고 promise 를 반환하는 작업 앞에 await 예약어를 사용

이것은 백그라운드에서 then 블록을 사용하는 것과 같은 일을 한다.

```jsx
const [movies, setMovies] = useState([]);

function fetchMoviesHandler() {
  fetch('https://swapi.dev/api/films')
    .then(res => {
      return res.json();
    })
    .then(data => {
      const transformMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformMovies);
    });
}
```

원래 then 을 붙여 사용하던 fetch코드를

```jsx
const [movies, setMovies] = useState([]);

async function fetchMoviesHandler() {
  const response = await fetch('https://swapi.dev/api/films');
  const data = await response.json();

  const transformMovies = data.results.map(movieData => {
    return {
      id: movieData.episode_id,
      title: movieData.title,
      openingText: movieData.opening_crawl,
      releaseDate: movieData.release_date,
    };
  });
  setMovies(transformMovies);
}
```

이런 식으로 더 간단하게 then을 없애고 쓸 수 있다. ⇒ 비동기화 코드

단계적으로 실행하는 것처럼 보이지만 백그라운드에서는 then과 같은 역할을 하는 것

### 188. 로딩 및 데이터 state 처리하기

사용자 인터페이스에 있어서 매우 중요 ⇒ 현재 상태를 알려줘야 함

```jsx
const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();

    const transformMovies = data.results.map(movieData => {
      return {
				...
      };
    });
    setIsLoading(false);
    setMovies(transformMovies);
  }

  return (
    ...
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        {isLoading && <p>Loading...</p>}
      </section>
  );
}
```

### 189. http 오류 처리하기

400대나 500대

400대은 요청은 성공적으로 이루어졌고 서버가 요청은 받았지만 원하는 응답을 주지 않았음을 의미

500대는 서버에 오류가 있을 때

async , await 를 쓰면 try catch 를 해서 오류 발생시킬 수 있다.

하지만 fetch API는 이러한 에러 상태 코드를 실제 에러로 취급하지 않는다.

⇒ 실제 오류 상태 코드를 받아도 기술적인 오류로서 처리하지 않음.

⇒가져오지 못한 데이터로 어떤 작업을 하려고 할 때만 오류가 발생하게 됨

오류 상태 코드를 받았을 때 실제 오류가 발생하게끔 하는 것이 올바를 처리 방식

써드 패키지 라이브러리인 Axios 는 이것을 가능하게 해줌

⇒ 요청전송에 성공하면 오류 상태 코드에 맞는 오류를 만들어 전달

일단 fetch API를 적용하면 error 에 대해

```jsx
const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

async function fetchMoviesHandler() {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch('https://swapi.dev/api/films');

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const data = await response.json();

    const transformMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformMovies);
  } catch (error) {
    setError(error.message);
  }
  setIsLoading(false);
}
```

변수를 만들어 조건에 따라 컨텐츠에 표시되는 내용을 바꾸게 해주기

```jsx
let content = <p>Found no movies</p>;

if (movies.length > 0) {
  content = <MoviesList movies={movies} />;
}
if (error) {
  content = <p>{error}</p>;
}
if (isLoading) {
  content = <p>Loading...</p>;
}
```

```jsx
return (
    ...
      <section>{content}</section>
  );
```

### 190. 요청에 useEffect() 사용하기

사이드 이팩트는 useEffect에

함수가 호출되면 컴포넌트 함수가 재렌더링, 재평가 되면서 함수가 다시 호출되는

함수를 useEffect에서 호출

컴포넌트가 재렌더링될 때마다 함수를 호출하고 싶진 않고 데이터가 바뀔 때만

```
useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
```

문제는 함수이고 컴포넌트기 재렌더링될 때마다 함수도 바뀌기 때문에

의존성으로 함수를 추가하게 되면 무한루프가 발생하게 된다.

해결책 중 하나는 빈 의존성 배열로 ⇒ 원하는 결과는 나오기 때문

```
useEffect(() => {
    fetchMoviesHandler();
  }, []);
```

하지만 함수가 외부 상태를 사용하게 되면 의도치 않은 버그 발생

⇒ 가장 좋은 해결책은 useCallback훅 사용

fetchMoviesHandler가 전체 코드를 파싱하기 전에 호출하면 문제 발생하기 때문에 useEffect를 뒤로

```jsx
const fetchMoviesHandler = useCallback(async function () {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch('https://swapi.dev/api/films');

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const data = await response.json();

    const transformMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformMovies);
  } catch (error) {
    setError(error.message);
  }
  setIsLoading(false);
}, []);

useEffect(() => {
  fetchMoviesHandler();
}, [fetchMoviesHandler]);
```

### 191. Firebase

프로젝트 생성 → realtime database → 주소 복사 → 붙여넣고 /원하는 데이터 관련 이름.json
