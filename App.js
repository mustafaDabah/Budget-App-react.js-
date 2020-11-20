import React from 'react';
import Header from './Component/Header.js';
import Balance from './Component/Balance.js';
import AddTransaction from './Component/AddTransaction.js';
import IncomeList from './Component/IncomeList.js';
import ExpenseList from './Component/ExpenseList.js';
import {GlobalContextProvider} from './context/GlobalState.js'

import './index.css';



function App () {
                                   
   return (
    <GlobalContextProvider>   
       <div className="App container">
            <div className="app-wrapper">
                <Header />
                <Balance />
                <AddTransaction />
                <IncomeList />
                <ExpenseList /> 
            </div>
       </div>
    </GlobalContextProvider>   
    )}


export default App;
