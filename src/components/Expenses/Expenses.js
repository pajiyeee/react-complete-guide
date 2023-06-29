import React, { useState } from 'react';

import Card from '../Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

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
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
