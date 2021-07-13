import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(exp => {return exp.date.getFullYear().toString() == filteredYear});

    return(
        <li>
            <div className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items = {filteredExpenses} />
            </div>
        </li>
    );
}

export default Expenses;