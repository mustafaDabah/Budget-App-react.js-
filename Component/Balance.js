import React , {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState.js';

const Balance = () => {
    const {incomeTransaction , expenseTransaction} = useContext(GlobalContext);
    
    const incomeAmount = incomeTransaction.map(incomeTransaction => incomeTransaction.incomeAmount )
    
    const expenseAmount = expenseTransaction.map(expenseTransaction => expenseTransaction.expenceAmount )
    
    const totalIncome = incomeAmount.reduce((acc , item ) => (acc + item) , 0).toFixed(2)
    
    const totalExpense = expenseAmount.reduce((acc , item ) =>( acc + item) , 0).toFixed(2)
    
    return (
        <div className="balance">
            <h2>Your Balance </h2>
            <h3>${(totalIncome - totalExpense).toFixed(2)}</h3>
            <div className='income-expense'>
                <div className="plus">
                    <h3>Income</h3>
                    <p>+{totalIncome}</p>
                </div>
                <div className="plus">
                    <h3>Expenses</h3>
                    <p>-{totalExpense}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance ;