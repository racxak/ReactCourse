import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/userInput";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_INPUT = {
	initialInvestment: 1000,
	annualInvestment: 900,
	expectedReturn: 6,
	duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
		setUserInput((prevValue) => {
			return {
				...prevValue,
				[inputIdentifier]: +newValue,
			};
		});
	}

	return (
		<>
			<Header />
			<UserInput onChange={handleChange} userInput={userInput}/>
			{inputIsValid?<ResultsTable userInput={userInput}/>:<p className="center">Please enter valid data</p>}
		</>
	);
}

export default App;
