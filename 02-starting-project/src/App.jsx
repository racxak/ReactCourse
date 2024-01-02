import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/userInput";
import { calculateInvestmentResults } from "./util/investment";

const VALUES = [
	{
		"Year": 0,
		"Investment Value": 0,
		"Interest (Year)": 0,
		"Total Interest": 0,
		"Invested Capital": 0,
	},
];

function App() {
	return (
		<>
			<Header />
			<UserInput />
			<ResultsTable />
		</>
	);
}

export default App;
