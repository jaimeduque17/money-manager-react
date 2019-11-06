import React, { Fragment } from 'react';
import { checkBudget } from '../Helpers';

const BudgetControl = ({ budget, residuary }) => (
    <Fragment>
        <div className="alert alert-primary">
            Budget: $ {budget}
        </div>
        <div className={checkBudget(budget, residuary)}>
            Residuary: $ {residuary}
        </div>
    </Fragment>
);

export default BudgetControl;