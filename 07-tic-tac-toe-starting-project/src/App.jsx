import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameTurns){
	let curPlayer = "X";
			if (gameTurns.length > 0 && gameTurns[0].player === "X") {
				curPlayer = "O";
			}
	return curPlayer;
}
function App() {
	// const [activePlayer, setActivePlayer] = useState("X");
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = deriveActivePlayer(gameTurns);
			
	let gameBoard = initialGameBoard;
	let winner;

  for (const turn of gameTurns){
   const {square, player} = turn;
   const {row, col} = square; 
   gameBoard[row][col]=player;
  }

	for (const combination of WINNING_COMBINATIONS){
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
		if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol){
			winner = firstSquareSymbol;
		}
	}

	const hasDraw = !winner && gameTurns.length === 9; 

	function handleSelectedSquare(rowIndex, colIndex) {
		// setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
		setGameTurns((prevTurns) => {
		const curPlayer = deriveActivePlayer(prevTurns);
			
			const updatedTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: curPlayer },
				...prevTurns,
			];
			return updatedTurns; 
			
		});
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName="Player 1"
						symbol="X"
						isActive={activePlayer === "X"}
					/>
					<Player
						initialName="Player 2"
						symbol="O"
						isActive={activePlayer === "O"}
					/>
				</ol>
			{(winner|| hasDraw) && <GameOver winner={winner}/>}
				<GameBoard board={gameBoard} onSelectSquare={handleSelectedSquare} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
