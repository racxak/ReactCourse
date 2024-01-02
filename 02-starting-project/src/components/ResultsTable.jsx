import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultsTable({userInput}) {
	const calculatedTable = calculateInvestmentResults(userInput)
	const initialInvestment = calculatedTable[0].valueEndOfYear - calculatedTable[0].interest -calculatedTable[0].annualInvestment; 

	return (
		<table id="result">
			<thead id="thead">
       <tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
       </tr>
		  </thead>
			<tbody>
				{calculatedTable.map((row) => {
					const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
					const totalAmountInvested = row.valueEndOfYear - totalInterest;
					return(
					<tr key={row.year}>
						<td>{row.year}</td>
						<td>{formatter.format(row.valueEndOfYear)}</td>
						<td>{formatter.format(row.interest)}</td>
						<td>{formatter.format(totalInterest)}</td>
						<td>{formatter.format(totalAmountInvested)}</td>
					</tr>)
				})}
			</tbody>
		</table>
	);
}
