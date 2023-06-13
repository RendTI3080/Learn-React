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

    // expense item, expenses filter --> coming soon
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
            </Card>
        </div>
    )
}

export default Expenses;