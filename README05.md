# React | React 완벽가이드 with Redux, Next, TypeScript | Section5

**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview

https://github.com/pajiyeee/react-complete-guide/assets/124162355/ff094b72-358f-42b4-9868-1b359a833fe5

## **Section 5 렌더링 리스트 및 조건부 Content**

### 69. 데이터 렌더링 목록

map()

목록을 추가하는데는 이전 최신 상태의 배열을 가져와서 상태업데이트

```jsx
const [expenses, setExpenses] = useState(DUMMY_EXPENSES))
const addExpenseHandler = expense ⇒ {setExpenses((prevExpenses) ⇒ [expense, …prevExpenses]}
```

### 70~71. key props

### key props

리액트는 데이터목록을 업데이트할 때 특별한 개념을 가진다.

→ 리액트가 발생할 수 있는 어떤 성능 손실이나 버그 없이 효과적으로 목록들을 업데이트하고 렌더링할 수 있도록 보장하기 위해 존재

**키가 없을 시 일어나는 문제**

키가 없다면 목록을 추가할 때 마지막 아이템으로 렌더링하고 모든 아이템을 업데이트해서 컨텐츠를 교체

→성능적으로 문제있다.

왜냐하면

1)모든 목록을 체크해서 업데이트해야 하고, 버그까지도 만들 수 있음

2)추가한 새아이템이 특정 state를 갖고 있었다면 새 아이템은 이전 아이템을 덮어쓸 것 →있었을 수도 있는 어떤 상태의 변화는 사라질 것

3)잠재적인 성능 이외에도 버그가 발생할 수 있다.

### 리엑트는 왜 그렇게 작동할까?

다른 방법이 없기 때문

리엑트는 각각의 아이템들이 모두 비슷해 보이기 때문에

배열의 길이를 체크하고 이미 렌더링된 아이템의 수만 확인한다.

그래서 새로운 아이템이 어느 위치에 추가되어야 하는지 모른다.

새로운 아이템이 어디에 추가될지 알려줘야 하기에 key

어떤 원시값도 고유 식별자 id로 쓸 수 있다.

어떤 숫자나 문자열도

### 73. filter 연습

```jsx
정답;
const Expenses = props => {
  const [filterYear, setFilterYear] = useState(2022);

  const filterChanageHandler = changeYear => {
    setFilterYear(changeYear);
  };

  const filteredExpenses = props.items.filter(
    prevExpense => prevExpense.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChanageHandler}
        />
        {filteredExpenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
```

나는 드롭다운 선택이 바뀌는 함수에서 filter를 적용하고 있고

필터된 항목을 map() 돌리지 않아서 안 바뀌고 있었음

```jsx
오답..
const Expenses = props => {
  const [filterYear, setFilterYear] = useState(2022);

  const filterChanageHandler = changeYear => {
    setFilterYear(changeYear);
		props.items.filter(
    prevExpense => prevExpense.date.getFullYear() === filterYear
  );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChanageHandler}
        />
        {props.items.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
```

### 74. 조건부 내용 출력

if/for x

물음표 조건부 연산자

```jsx
{
  filteredExpenses.length === 0 ? (
    <p>No data</p>
  ) : (
    filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  );
}
```

{조건 ? (true) : (false)}

길어지면 더 짧게 구문을 써줄 수 있는 표현식

&& 연산자

```jsx
{
  filteredExpenses.length === 0 && <p>No data</p>;
}
{
  filteredExpenses.length > 0 &&
    filteredExpenses.map(expense => <ExpenseItem />);
}
```

let 을 사용하여 변수에 값을 저장하면

return문 밖으로 빼서 if 문을 쓸 수 있게 한다.

```
let expenseContents = <p>No data</p>;
  if (filteredExpenses.length > 0) {
    expenseContents = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChanageHandler}
        />
        {expenseContents}
      </Card>
    </div>
  );
```

깔끔하게 JSX코드를 쓸 수 있음

### 80. 차트

```jsx
const chartDataPoints = [
  { label: 'Jan', value: 0 },
  { label: 'Feb', value: 0 },
  { label: 'Mar', value: 0 },
  { label: 'Apr', value: 0 },
  { label: 'May', value: 0 },
  { label: 'Jun', value: 0 },
  { label: 'Jul', value: 0 },
  { label: 'Aug', value: 0 },
  { label: 'Sep', value: 0 },
  { label: 'Oct', value: 0 },
  { label: 'Nov', value: 0 },
  { label: 'Dec', value: 0 },
];
```

```jsx
for (const expense in props.expenses) {
  const expenseMonth = expense.date.getMonth();
  chartDataPoints[expenseMonth].value += expense.amount;
}
```

이렇게 하면 오류가 뜬다. For문에서 props.expenses가 객체가 아닌 배열이기 때문에 in 이 아닌 of 를 써야 한다.

```jsx
for (const expense of props.expenses) {
  const expenseMonth = expense.date.getMonth();
  chartDataPoints[expenseMonth].value += expense.amount;
}

return <Chart dataPoints={chartDataPoints} />;
```

maxValue 값을 구하기 위해 Math.max 를 사용하는데

dataPoints에서 value 값을 모은 배열을 따로 만들어

그 배열을 펼쳐서 그 중에 최댓값이 구해지게 한다.

```jsx
const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
const totalMaximumValue = Math.max(...dataPointValues);
```

```jsx
{
  props.dataPoints.map(dataPoint => (
    <ChartBar
      key={dataPoint.label}
      value={dataPoint.value}
      maxValue={totalMaximumValue}
      label={dataPoint.label}
    />
  ));
}
```

차트의 Inner 값이 채워지는 걸 보이게 하기 위해 style 을 적용하는데

먼저 해당 월의 value 를 위에서 구한 최댓값으로 나누고 100 곱하여 % 비율로 나오게 한다.

Math.round() : 반올림한 정수를 구해준다.

```jsx
let barFillHeight = '0%';

if (props.maxValue > 0) {
  barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
}
```

```jsx
<div className="chart-bar_fill" style={{ height: barFillHeight }} />
```
