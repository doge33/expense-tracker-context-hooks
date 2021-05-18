//Reducers: specify how to change state in response to certain actions
export default (state, action) => {
  switch(action.type){
    case 'DELETE_TRANSACTION':
      return{
        ...state, 
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload) //action payload contains the id of the transaction to delete
      }
      //return a new state(not change the original state directly)
    
    case 'ADD_TRANSACTION':
      return{
        ...state, 
        transactions: [action.payload, ...state.transactions]
      }

    default:
      return state;
  }
}
