# React | React 완벽가이드 with Redux, Next, TypeScript | Section5~6

**📌유데미 강의**

https://kmooc.udemy.com/course/best-react/learn/lecture/28517031#overview

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
