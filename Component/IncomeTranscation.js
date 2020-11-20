import React , {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState.js';

const IncomeTransaction = ({incomeTransaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    
    return(
                   <li className="transaction" key={incomeTransaction.id}>
                        <span className="transaction-text">{incomeTransaction.incomeText}</span>
                        <span className="transaction-amount">${incomeTransaction.incomeAmount}</span>
                        <button className="delete-btn" onClick={()=>deleteTransaction(incomeTransaction.id)}>Delete</button>
                    </li>
    )
}
export default IncomeTransaction