import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';


const App = () => {

	
// 	const axios = require("axios");
// const options = {
//   method: 'POST',
//   url: 'https://spendid.p.rapidapi.com/budgets/generate',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'spendid.p.rapidapi.com'
//   },
//   data: '{"budget":{"education":0,"health_insurance":0,"mortgage_and_rent":9600,"prescription_drugs":0,"savings":2400,"tobacco_and_smoking":0,"vehicle_purchase_and_lease":3000},"demographics":{"age":25,"gross_annual_income":50000,"household_members":1,"is_homeowner":false,"net_annual_income":41004,"zip":"35210"}}'
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// const [budget,setBudget] = useState([])
//  useEffect(() => {
//     fetch("https://spendid.p.rapidapi.com/budgets/generate")
//     .then(res => res.json())
//     .then(data => {
//       setBudget(data)
//     })
//   }, [])
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;
