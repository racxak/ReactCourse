export default function ResultsTable({values}) {
  const keys = Object.keys(values[0]);

	return (
		<table id="result">
			<thead id="thead">
       <tr>
           {keys.map((key) => <th> {key}</th>)}
       </tr>
		  </thead>
			<tbody></tbody>
		</table>
	);
}
