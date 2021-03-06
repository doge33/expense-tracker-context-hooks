import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  //Income: filter through transactions for positive numbers:
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, curVal) => (acc += curVal), 0)
    .toFixed(2)
  //Expense: filter through transactions for negative numbers:
  const expense = (
      amounts
      .filter(amount => amount < 0)
      .reduce((acc, curVal) => (acc += curVal), 0) 
      * -1
    )
    .toFixed(2)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  )
}
