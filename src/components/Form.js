import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';

function Form(props) {

    const { saveExpense, saveCreateExpense } = props;

    // state
    const [expenseName, saveExpenseName] = useState('');
    const [expenseQuantity, saveExpenseQuantity] = useState(0);
    const [error, saveError] = useState(false);

    // when the expense is added
    const addExpense = (e) => {
        e.preventDefault();

        // validate
        if (expenseQuantity < 1 || isNaN(expenseQuantity) || expenseName === '') {
            saveError(true);
            return;
        }

        // build expense object
        const expense = {
            expenseName,
            expenseQuantity,
            id: shortid.generate()
        }

        // pass the expense to the main component
        saveExpense(expense);
        saveCreateExpense(true);

        // eliminate alert
        saveError(false);

        // form reset
        saveExpenseName('');
        saveExpenseQuantity('');

    }

    return (
        <form
            onSubmit={addExpense}
        >
            <h2>Add your Expenses Here</h2>
            {error ? <Error message='Both fields are mandatory or wrong budget' /> : null}
            <div className="field">
                <label>Expense Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="e.g. Transport"
                    onChange={e => saveExpenseName(e.target.value)}
                    value={expenseName}
                />
            </div>
            <div className="field">
                <label>Expense Quantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="e.g. 300"
                    onChange={e => saveExpenseQuantity(parseInt(e.target.value, 10))}
                    value={expenseQuantity}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Add Expense" />
        </form>
    )
}

export default Form;