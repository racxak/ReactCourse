import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({onSelectSquare, activeSymbol}) {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handleClick(rowIndex, colIndex) {
		setGameBoard((prevGameboard) => {
			const updatedBoard = [
				...prevGameboard.map(innerArray => [...innerArray]),
			];
			updatedBoard[rowIndex][colIndex] = activeSymbol;
			return updatedBoard;
		});
    onSelectSquare();
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => handleClick(rowIndex, colIndex)}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
