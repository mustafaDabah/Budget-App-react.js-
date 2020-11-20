import React , {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState.js';
import ExpenseTransaction from './ExpenseTransaction.js'; 


const ExpenseList = () => {
    const {expenseTransaction} = useContext(GlobalContext)
    return (
        <div className="transactions transactions-expense">
            <h2>Transactions History</h2>
            <ul className="transaction-list">
                {expenseTransaction.map(expenseTransaction => {
                return (
                    <ExpenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction} />
                )})}
            </ul>
        </div>
    )
}
export default ExpenseList ;