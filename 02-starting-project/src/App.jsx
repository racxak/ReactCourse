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

  const [inputValues, setInputValues] = useState()
	return (
		<>
			<Header />
			<UserInput />
			<ResultsTable values={VALUES} />
		</>
	);
}

export default App;
