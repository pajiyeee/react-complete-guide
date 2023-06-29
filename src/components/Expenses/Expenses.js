import React, { useState } from 'react';
import Card from '../Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
  const [filterYear, setFilterYear] = useState(2022);

  const filterChanageHandler = changeYear => {
    setFilterYear(changeYear);
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
