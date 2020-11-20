import React ,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState.js';
import IncomeTransaction from './IncomeTranscation.js'; 

const IncomeList = () => {
    const {incomeTransaction} = useContext(GlobalContext)
    return (
        <div className="transactions transactions-income">
            <h2>Transactions History</h2>
            <ul className="transaction-list">
            {incomeTransaction.map(incomeTransaction => {
                return (
                    <IncomeTransaction key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
                )
            })}
            </ul>
        </div>
    )
}
export default IncomeList ;