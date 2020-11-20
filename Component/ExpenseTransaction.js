import React ,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState.js';

const ExpenseTransaction = ({expenseTransaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    return(
                   <li className="transaction" key={expenseTransaction.id}>
                        <span className="transaction-text">{expenseTransaction.expenceText}</span>
                        <span className="transaction-amount">${expenseTransaction.expenceAmount}</span>
                        <button className="delete-btn" onClick={ ()=>deleteTransaction(expenseTransaction.id)}>Delete</button>
                    </li>
    )
}
export default ExpenseTransaction