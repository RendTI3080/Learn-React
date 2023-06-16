import React from "react";
import "./NewExpense.css"; // --> for new-expense class
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // props expense data handler
        props.onAddExpense(expenseData);
    }

    return (
        // expense form --> coming soon
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;