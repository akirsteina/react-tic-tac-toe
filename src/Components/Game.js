import { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';

const GameDiv = styled.div`
	display: grid;
`;

const GameInfo = styled.div`
	margin-left: 20px;
`;

const Status = styled.div`
	margin-bottom: 10px;
	font-size: 20px;
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
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState(board);

	const current = history.length - 1;
	const winner = calculateWinner(board);

	const clickHandler = (i) => {
		const squares = [...board];
		if (winner || squares[i]) return;
		squares[i] = xIsNext ? 'X' : 'O';
		setBoard(squares);
		setXIsNext(!xIsNext);
	};

	const jumpToStart = () => {};
	const renderMoves = () => {};

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
				<Board board={board} clickHandler={clickHandler} xIsNext={xIsNext} />
			</div>
			<GameInfo>
				<div onClick={jumpToStart}>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</GameInfo>
		</GameDiv>
	);
};

export default Game;
