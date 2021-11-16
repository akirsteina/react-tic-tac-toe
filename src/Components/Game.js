import { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';

const GameDiv = styled.div`
	display: grid;
`;

const GameInfo = styled.ul`
	margin-left: 20px;
	list-style: none;
`;

const Status = styled.div`
	margin-bottom: 10px;
	font-size: 20px;
`;

const Button = styled.button`
	margin: 10px;
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
			return board[a];
		}
	}
	return null;
};

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [moveNumber, setMoveNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);

	const winner = calculateWinner(history[moveNumber]);

	const clickHandler = (i) => {
		const gameHistory = history.slice(0, moveNumber + 1);
		const currentBoard = gameHistory[moveNumber];
		// const squares = [...history];
		const squares = [...currentBoard];
		if (winner || squares[i]) return;
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
	} else {
		status = `Next player: ${xIsNext ? 'X' : 'O'}`;
	}

	return (
		<GameDiv>
			<div className='game-board'>
				<Status>{status}</Status>
				<Board board={history[moveNumber]} clickHandler={clickHandler} xIsNext={xIsNext} />
			</div>
			<GameInfo>{renderMoves()}</GameInfo>
		</GameDiv>
	);
};

export default Game;
