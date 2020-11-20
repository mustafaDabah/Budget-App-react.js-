import React , {useState , useContext} from 'react';
import {GlobalContext} from '../context/GlobalState.js';


const AddTransaction = () => {
    // context data 
    const {addIncome , addExpense } = useContext(GlobalContext)
    
    // state date 
    const [income , setIncome] = useState({
        incomeText:"",
        incomeAmount:0 ,
    })
    
    const [expense , setExpense] = useState({
        expenceText:"",
        expenceAmount: 0 ,
    })
    
    // disturing data 
    const {incomeText , incomeAmount} = income ;
    const {expenceText , expenceAmount } = expense

    // income function transactiom 
    
    const onChangeIncome = (e) => {
        setIncome({...income,[e.target.name]: e.target.value});
    }
        const  onSubmitIncome = (e) => {
            e.preventDefault();
            const newIncomeTransaction = {
                id:Math.floor(Math.random() * 10000) ,
                incomeText,
                incomeAmount:incomeAmount * 1,
                }
                
                if (incomeText !== "") {
                    addIncome(newIncomeTransaction);
                }
                setIncome ({
                    incomeText:"",
                    incomeAmount:0 ,
                })
        }
        
    // expense function transaction 
    const onChangeExpense = (e) => {
        setExpense({...expense ,[e.target.name]:e.target.value});
    }
    
        const onSumbitExpense = (e) => {
            e.preventDefault();
            const newExpenseTransaction = {
                id:Math.floor(Math.random() * 10000) ,
                expenceText,
                expenceAmount:expenceAmount * 1,
            };
            if (expenceText !== "") {
                addExpense(newExpenseTransaction)
                } 
            setExpense({
                expenceText:"",
                expenceAmount: 0 ,
            })
        }
    
    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className='input-group income'>
                    <input type="text" placeholder="Add Income..." onChange={onChangeIncome} autoComplete="off" name="incomeText" value={incomeText}/>
                    <input type="number" placeholder="Amount" onChange={onChangeIncome} autoComplete="off" name="incomeAmount" value={incomeAmount} />
                    <input type="submit" value="Submit"  />
                </div>
            </form>
            <form onSubmit={onSumbitExpense}>
                <div className='input-group expense'>
                    <input type="text" placeholder="Add Expense..." autoComplete="off" onChange={onChangeExpense} name="expenceText" value={expenceText} />
                    <input type="number" placeholder="Amount" autoComplete="off"  onChange={onChangeExpense} name="expenceAmount" value={expenceAmount}/>
                    <input type="submit" value="Submit" />
                </div>        
            </form>
        </div>
    )
}
export default AddTransaction ; 