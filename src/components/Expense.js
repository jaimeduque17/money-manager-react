import React from 'react';

const Expense = ({ expense }) => {

    return (
        <li className="expenses">
            <p>
                {expense.expenseName}
                <span className="expense">$ {expense.expenseQuantity}</span>
            </p>
        </li>
    );
}

export default Expense;