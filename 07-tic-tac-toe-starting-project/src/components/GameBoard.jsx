
export default function GameBoard({onSelectSquare, board}) {
 
	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handleClick(rowIndex, colIndex) {
	// 	setGameBoard((prevGameboard) => {
	// 		const updatedBoard = [
	// 			...prevGameboard.map(innerArray => [...innerArray]),
	// 		];
	// 		updatedBoard[rowIndex][colIndex] = activeSymbol;
	// 		return updatedBoard;
	// 	});
  //   onSelectSquare();
	// }

	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol? true:false }>
								{playerSymbol}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
