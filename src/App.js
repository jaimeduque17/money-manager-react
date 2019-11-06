import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {

	// state
	const [budget, saveBudget] = useState(0);
	const [residuary, saveResiduary] = useState(0);
	const [budgetQuestion, saveBudgetQuestion] = useState(true);
	const [createExpense, saveCreateExpense] = useState(false);
	const [expense, saveExpense] = useState({});
	const [expenses, saveExpenses] = useState([]);

	useEffect(() => {
		if (createExpense) {
			const expensesList = [...expenses, expense];
			saveExpenses(expensesList);

			// subtract the budget
			const residuaryBudget = residuary - expense.expenseQuantity;
			saveResiduary(residuaryBudget);

			// after adding it, it gets false
			saveCreateExpense(false);
		}
	}, [createExpense])

	return (
		<div className="App container">
			<header>
				<h1>Money Manager</h1>
				<div className="main-content content">
					{(budgetQuestion)
						? <Question
							saveBudget={saveBudget}
							saveBudgetQuestion={saveBudgetQuestion}
							saveResiduary={saveResiduary}
						/>
						: (
							<div className="row">
								<div className="one-half column">
									<Form
										saveExpense={saveExpense}
										saveCreateExpense={saveCreateExpense}
									/>
								</div>
								<div className="one-half column">
									<List
										expenses={expenses}
									/>
									<BudgetControl 
										budget={budget}
										residuary={residuary}
									/>
								</div>
							</div>
						)}
				</div>
			</header>
		</div>
	);
}

export default App;
