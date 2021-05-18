import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext); //an array
  //use reduce() to get total balance of all transactions:
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, curVal) => (acc += curVal), 0).toFixed(2); //0 is the initial value provided to reduce()

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </Fragment>
  )
}
