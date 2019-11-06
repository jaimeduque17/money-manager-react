import React, { Fragment, useState } from 'react';
import Error from './Error';

function Question(props) {

    const { saveBudget, saveBudgetQuestion, saveResiduary } = props;

    // define the state
    const [quantity, saveQuantity] = useState(0);
    const [error, saveError] = useState(false);

    // validate the budget
    const addBudget = (e) => {
        e.preventDefault();

        // validate
        if (quantity < 1 || isNaN(quantity)) {
            saveError(true);
            return;
        }

        // if the validation is passed
        saveError(false);
        saveBudget(quantity);
        saveResiduary(quantity);
        saveBudgetQuestion(false);
    }

    return (
        <Fragment>
            <h2>Write your Budget</h2>
            {error ? <Error message='The budget is incorrect' /> : null}
            <form
                onSubmit={addBudget}
            >
                <input type="number"
                    className="u-full-width"
                    placeholder="Add your budget"
                    onChange={e => saveQuantity(parseInt(e.target.value, 10))} />
                <input type="submit" className="button-primary u-full-width" value="Define Budget" />
            </form>
        </Fragment>
    );
}

export default Question;