import React, { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

export const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //build the transaction object
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000000),
      text,
      amount: +amount //this is a convenient way to parse string into number (without this, the amount is being passed as string)
    }
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
            type="text" 
            value={text} 
            onChange={(evt) => setText(evt.target.value)} 
            placeholder="Enter text..." 
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input 
            type="number" 
            value={amount}
            onChange={(evt) => setAmount(evt.target.value)} 
            placeholder="Enter text..." 
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
