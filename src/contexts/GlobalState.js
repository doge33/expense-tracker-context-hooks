import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state: any global states should go in this object
const initialState = {
  transactions: [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//Provide component
export const GlobalProvider = ({ children }) => {
  //useReducer: accepts a reducer, and initial state and returns a modified, new piece of state(along with a dispatch method).
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions (that make calls to reducer)
  function deleteTransaction(id){
    //dispatch an action object to our reducer:
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }


  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction, //lets the children use delete action
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
    )
}