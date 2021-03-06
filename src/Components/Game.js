import { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';

const GameDiv = styled.div`
	display: grid;
`;

const GameInfo = styled.ul`
	list-style: none;
	padding: 0;
`;

const Status = styled.div`
	margin: 20px 0 10px;
	font-size: 20px;
	font-weight: bold;
`;

const Button = styled.button`
	margin: 3px;
	background-color: #ffffff;
	border: 1px solid #a9a9a9;
	border-radius: 5px;
	padding: 10px 15px;
	cursor: pointer;
	&:hover {
		background-color: #e7e7e7;
	}
`;

const calculateWinner = (board) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return [board[a], lines[i]];
		}
	}
	return null;
};

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [moveNumber, setMoveNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);

	const winData = calculateWinner(history[moveNumber]);
	const winner = winData ? winData[0] : null;
	const winnerLine = winData ? winData[1] : null;
	const tie = !winner && moveNumber === 9;

	const clickHandler = (i) => {
		const gameHistory = history.slice(0, moveNumber + 1);
		const currentBoard = gameHistory[moveNumber];
		// const squares = [...history];
		const squares = [...currentBoard];
		if (winner || squares[i] || tie) return;
		squares[i] = xIsNext ? 'X' : 'O';
		setHistory([...gameHistory, squares]);
		setMoveNumber(gameHistory.length);
		setXIsNext(!xIsNext);
	};

	const jumpToMove = (move) => {
		setMoveNumber(move);
		setXIsNext(move % 2 === 0);
	};

	const renderMoves = () =>
		history.map((_moveNumber, move) => {
			const destination = move ? `Go to move ${move}` : 'Start again';
			return (
				<li key={move}>
					<Button onClick={() => jumpToMove(move)}>{destination}</Button>
				</li>
			);
		});

	let status;
	if (winner) {
		status = `Player ${winner} won!`;
	} else if (tie) {
		status = 'Friendship won!';
	} else {
		status = `Next player: ${xIsNext ? 'X' : 'O'}`;
	}

	return (
		<GameDiv>
			<Board board={history[moveNumber]} clickHandler={clickHandler} xIsNext={xIsNext} winner={winner || tie} winnerLine={winnerLine} />
			<Status>{status}</Status>
			<GameInfo>{renderMoves()}</GameInfo>
		</GameDiv>
	);
};

export default Game;
