import React, {useState} from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState("2019");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    // expense filter
    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    // expense default value if items == 0
    let expenseContent = <p className="expenses-list__fallback">Not Found</p>;

    if(filteredExpense.length > 0){
        expenseContent = filteredExpense.map(expense => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}>
            </ExpenseItem>
        ))
    }


    // expense item
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenseContent}
            </Card>
        </div>
    )
}

export default Expenses;